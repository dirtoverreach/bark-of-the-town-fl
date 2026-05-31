export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-bark-gold font-semibold text-sm uppercase tracking-widest">Meet Your Groomer</span>
          <h2 className="font-display text-4xl font-bold text-bark-brown mt-2 mb-6">
            Theresa
          </h2>
          <p className="text-stone-700 text-lg leading-relaxed mb-4">
            With about 30 years experience in the professional pet grooming industry, I am able to pamper your baby with patience and skill!
          </p>
          <p className="text-stone-700 text-lg leading-relaxed mb-6">
            I promise to always have your pet's best interest in mind! I love ALL animals, and hope to be with my clients for years!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-bark-green-dark font-semibold hover:underline"
          >
            Get in touch
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { icon: '🏆', stat: '30+ Years', label: 'Professional Experience' },
            { icon: '🐕', stat: 'All Breeds', label: 'Welcome, including difficult dogs' },
            { icon: '📍', stat: 'Palencia', label: 'St. Augustine, FL' },
          ].map(({ icon, stat, label }) => (
            <div key={stat} className="flex items-center gap-5 bg-bark-cream rounded-2xl p-5">
              <span className="text-3xl" aria-hidden="true">{icon}</span>
              <div>
                <p className="font-bold text-bark-brown text-xl">{stat}</p>
                <p className="text-stone-600 text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
