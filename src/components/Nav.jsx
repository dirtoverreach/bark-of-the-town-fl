import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Hours', href: '#hours' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">

        <a href="/" aria-label="Bark of the Town Pet Spa — return to top">
          <img src="/logo.png" alt="" aria-hidden="true" className="h-12 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-7">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-sm font-medium text-stone-600 hover:text-bark-green-dark transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="tel:9049075100"
            className="text-sm font-semibold text-bark-green-dark border border-bark-green-dark rounded-full px-4 py-1.5 hover:bg-bark-green-dark hover:text-white transition-colors"
          >
            Call Us
          </a>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-stone-600 hover:text-bark-green-dark hover:bg-stone-100 transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <div id="mobile-nav" className="sm:hidden bg-white border-t border-stone-100 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-base font-medium text-stone-700 hover:text-bark-green-dark transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
