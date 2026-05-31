module.exports = {
  apps: [
    {
      name: 'bark-of-the-town',
      script: 'server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',
      env_file: '.env',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
