const services = [
  {
    icon: <GroomingIcon />,
    title: 'Full Grooming',
    description: 'Complete spa treatment for your pet — bath, dry, haircut, nail trimming, and finish. By appointment only.',
    badge: 'Appointment Only',
  },
  {
    icon: <NailTrimIcon />,
    title: 'Nail Trimming',
    description: 'Walk-in nail trims available during walk-in hours. No appointment needed.',
    badge: 'Walk-ins Welcome',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-bark-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-bark-gold font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="font-display text-4xl font-bold text-bark-brown mt-2">Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map(({ icon, title, description, badge }) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 flex flex-col gap-4"
            >
              <div className="w-16 h-16 text-bark-green" aria-hidden="true">{icon}</div>
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-bark-brown text-xl">{title}</h3>
                  <span className="text-xs font-semibold text-bark-green bg-cyan-50 rounded-full px-3 py-1 whitespace-nowrap">
                    {badge}
                  </span>
                </div>
                <p className="text-stone-700 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-600 text-sm mt-8">
          Call or text to check availability and pricing.
        </p>
      </div>
    </section>
  )
}

function GroomingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
      {/* Handle rings */}
      <circle cx="5" cy="5" r="2.5" />
      <circle cx="19" cy="5" r="2.5" />
      {/* Blades crossing at pivot */}
      <line x1="5" y1="7.5" x2="20" y2="21" />
      <line x1="19" y1="7.5" x2="4" y2="21" />
      {/* Pivot screw */}
      <circle cx="12" cy="12.5" r="1.3" fill="currentColor" />
    </svg>
  )
}

function NailTrimIcon() {
  return (
    <svg viewBox="0 0 110 90" xmlns="http://www.w3.org/2000/svg" fill="currentColor">

      {/* ── Main bottom pad ── */}
      <ellipse cx="36" cy="70" rx="15" ry="10" />

      {/* ── Toe 1 — front/top, angled slightly upward ── */}
      <g transform="translate(42,50) rotate(-10)">
        <ellipse rx="20" ry="7.5" />
        {/* Nail: curved claw at toe tip */}
        <g transform="translate(18,0)">
          <path d="M0,-3 C6,0 8,7 4,12 C0,14 -4,10 -3,2 Z" />
        </g>
      </g>

      {/* ── Toe 2 — middle ── */}
      <g transform="translate(42,63) rotate(0)">
        <ellipse rx="17" ry="7" />
        <g transform="translate(15,0)">
          <path d="M0,-3 C6,0 8,7 4,12 C0,14 -4,10 -3,2 Z" />
        </g>
      </g>

      {/* ── Toe 3 — back/bottom, angled slightly downward ── */}
      <g transform="translate(42,76) rotate(10)">
        <ellipse rx="14" ry="6.5" />
        <g transform="translate(12,0)">
          <path d="M0,-3 C5,0 6,6 3,10 C0,12 -3,9 -2,2 Z" />
        </g>
      </g>

      {/* ── Scissor-style clipper at Toe 1 nail ── */}
      {/*    Toe 1 nail tip ≈ world (62, 55)      */}
      <g transform="translate(64,52)" fill="none" stroke="currentColor"
         strokeWidth="3.2" strokeLinecap="round">
        {/* Upper blade */}
        <line x1="0" y1="0" x2="26" y2="-13" />
        {/* Lower blade */}
        <line x1="0" y1="0" x2="26" y2="13" />
        {/* Pivot */}
        <circle cx="14" cy="-7" r="2" fill="currentColor" stroke="none" />
        {/* Handle rings */}
        <circle cx="30" cy="-17" r="5.5" />
        <circle cx="30" cy="17" r="5.5" />
      </g>

    </svg>
  )
}
