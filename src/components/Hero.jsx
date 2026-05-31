export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 bg-gradient-to-b from-white to-bark-cream">
      <div className="max-w-3xl mx-auto">
        {/* Visually hidden h1 so screen readers have a page title */}
        <h1 className="sr-only">Bark of the Town Pet Spa — St. Augustine, FL</h1>

        <img
          src="/logo.png"
          alt="Bark of the Town Pet Spa logo — Scottie dog silhouette with blue and white stripes"
          className="w-64 sm:w-80 mx-auto mb-8 drop-shadow-lg rounded-xl"
        />

        <p className="text-xl sm:text-2xl text-stone-500 font-light mb-3 italic">
          Personalized grooming for your pet.
        </p>

        <p className="text-stone-500 text-sm mb-10">
          641 Market St &bull; Palencia &bull; St. Augustine, FL 32095
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="tel:9049075100"
            className="inline-flex items-center justify-center gap-2 bg-bark-green-dark text-white rounded-full px-8 py-4 text-lg font-semibold hover:bg-bark-green-dark/80 transition-colors shadow-lg"
          >
            <PhoneIcon />
            (904) 907-5100
          </a>
          <a
            href="sms:9049075100"
            className="inline-flex items-center justify-center gap-2 bg-white text-bark-green-dark border-2 border-bark-green-dark rounded-full px-8 py-4 text-lg font-semibold hover:bg-bark-green-dark hover:text-white transition-colors shadow"
          >
            <MessageIcon />
            Send a Text
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/barkofthetownfl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram — @barkofthetownfl (opens in new tab)"
            className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-5 py-2.5 text-sm font-semibold text-stone-700 hover:border-bark-green-dark hover:text-bark-green-dark transition-colors shadow-sm"
          >
            <InstagramIcon />
            <span aria-hidden="true">@barkofthetownfl</span>
          </a>
          <a
            href="https://bsky.app/profile/barkofthetownfl.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky (opens in new tab)"
            className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-5 py-2.5 text-sm font-semibold text-stone-700 hover:border-bark-green-dark hover:text-bark-green-dark transition-colors shadow-sm"
          >
            <BlueskyIcon />
            <span aria-hidden="true">Bluesky</span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-10 text-bark-green-dark opacity-60 motion-safe:animate-bounce"
      >
        <ChevronDown />
      </a>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function BlueskyIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 360 320" fill="currentColor">
      <path d="M180 142c-16.3-31.7-60.7-90.8-102-120C40.7 0 0 0 0 0s-2 57.3 38 96c24.8 23.9 64 30.5 100 32-36 1.5-75.2 8.1-100 32C-2 198.7 0 256 0 256s40.7 0 78-22c41.3-29.2 85.7-88.3 102-120z"/>
      <path d="M180 142c16.3-31.7 60.7-90.8 102-120C320.7 0 360 0 360 0s2 57.3-38 96c-24.8 23.9-64 30.5-100 32 36 1.5 75.2 8.1 100 32 38 38.7 38 96 38 96s-40.7 0-78-22c-41.3-29.2-85.7-88.3-102-120z"/>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
