export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-bark-gold font-semibold text-sm uppercase tracking-widest">Reach Out</span>
          <h2 className="font-display text-4xl font-bold text-bark-brown mt-2">Contact Us</h2>
          <p className="text-stone-600 mt-4 max-w-md mx-auto">
            The best way to reach us is by phone or text — or drop us an email. We'd love to meet your pet!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <a
            href="tel:9049075100"
            className="group flex items-center gap-5 bg-bark-green-dark text-white rounded-3xl px-8 py-7 hover:opacity-90 transition-opacity shadow-md"
          >
            <div className="text-4xl" aria-hidden="true">📞</div>
            <div>
              <p className="text-sm font-medium opacity-90 mb-0.5">Call us</p>
              <p className="text-xl font-bold tracking-wide">(904) 907-5100</p>
            </div>
          </a>

          <a
            href="sms:9049075100"
            className="group flex items-center gap-5 bg-bark-cream border-2 border-bark-green-dark text-bark-green-dark rounded-3xl px-8 py-7 hover:bg-bark-green-dark hover:text-white transition-colors shadow-sm"
          >
            <div className="text-4xl" aria-hidden="true">💬</div>
            <div>
              <p className="text-sm font-medium mb-0.5">Text us</p>
              <p className="text-xl font-bold tracking-wide">(904) 907-5100</p>
            </div>
          </a>
        </div>

        <a
          href="mailto:Barkofthetownfl@gmail.com"
          className="group flex items-center gap-5 bg-bark-cream border border-stone-200 text-bark-brown rounded-3xl px-8 py-6 mb-5 hover:border-bark-green-dark transition-colors shadow-sm"
        >
          <div className="text-4xl" aria-hidden="true">✉️</div>
          <div>
            <p className="text-sm font-medium text-stone-600 mb-0.5">Email us</p>
            <p className="text-lg font-semibold group-hover:text-bark-green-dark transition-colors">Barkofthetownfl@gmail.com</p>
          </div>
        </a>

        <div className="bg-bark-cream rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="text-4xl" aria-hidden="true">📍</div>
          <div>
            <p className="font-bold text-bark-brown text-lg mb-1">641 Market St</p>
            <p className="text-stone-600">Palencia &bull; St. Augustine, FL 32095</p>
          </div>
          <a
            href="https://maps.google.com/?q=641+Market+St+St+Augustine+FL+32095"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to 641 Market St, St. Augustine, FL (opens in new tab)"
            className="sm:ml-auto text-sm font-semibold text-bark-green-dark hover:underline whitespace-nowrap"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
