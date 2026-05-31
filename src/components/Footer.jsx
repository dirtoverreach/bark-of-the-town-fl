export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bark-brown text-stone-300 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-white font-bold text-lg">Bark of the Town Pet Spa</p>
          <p className="text-sm mt-1">641 Market St &bull; Palencia &bull; St. Augustine, FL 32095</p>
        </div>

        <nav aria-label="Social media links" className="flex gap-5 text-sm">
          <a
            href="https://www.instagram.com/barkofthetownfl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram (opens in new tab)"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://bsky.app/profile/barkofthetownfl.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky (opens in new tab)"
            className="hover:text-white transition-colors"
          >
            Bluesky
          </a>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-stone-700 text-center text-xs text-stone-400">
        &copy; {year} Bark of the Town Pet Spa. All rights reserved.
      </div>
    </footer>
  )
}
