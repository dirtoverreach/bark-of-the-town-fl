import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createHmac, timingSafeEqual } from 'crypto'
import { exec } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000
const DEPLOY_SECRET = process.env.DEPLOY_SECRET

app.use(express.static(join(__dirname, 'dist')))

// Deploy webhook — called by GitHub Actions on push to main
app.post('/deploy', express.raw({ type: 'application/json' }), (req, res) => {
  if (!DEPLOY_SECRET) {
    return res.status(500).send('DEPLOY_SECRET not configured')
  }

  const sig = req.headers['x-deploy-signature']
  if (!sig) return res.status(401).send('Missing signature')

  const expected = createHmac('sha256', DEPLOY_SECRET)
    .update(req.body)
    .digest('hex')

  const sigBuf = Buffer.from(sig)
  const expBuf = Buffer.from(expected)
  if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
    return res.status(401).send('Invalid signature')
  }

  res.sendStatus(202)

  exec(
    'git pull origin main && npm ci && npm run build && pm2 reload ecosystem.config.cjs --update-env',
    { cwd: __dirname },
    (err, stdout, stderr) => {
      if (err) console.error('[deploy] error:', stderr)
      else console.log('[deploy] success:', stdout)
    }
  )
})

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Bark of the Town running on port ${PORT}`)
})
