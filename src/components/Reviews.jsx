const reviews = [
  {
    name: 'Rachelle Stephen',
    initials: 'RS',
    body: "The shop is always so warm and friendly. It's a great place to bring my dogs, professional and neighborly.",
  },
  {
    name: 'B DiVeglia',
    initials: 'BD',
    body: "We have a very strong dog that is difficult to handle and she does the best nail trim we've seen yet. We've had my dog come out with bandaged paws, some have come out and said they won't do it and every time we go to Bark of the Town in Palencia he comes out with nails that actually looked trimmed. No blood, no bandages, and the groomer is still able to walk. She's got the touch!!!",
  },
  {
    name: 'Joell Haws',
    initials: 'JH',
    body: 'Best. Quiet place for Hank.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-bark-gold text-lg" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-bark-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-bark-gold font-semibold text-sm uppercase tracking-widest">Happy Pet Parents</span>
          <h2 className="font-display text-4xl font-bold text-bark-brown mt-2">Reviews</h2>
        </div>

        <ul className="grid sm:grid-cols-3 gap-6">
          {reviews.map(({ name, initials, body }) => (
            <li
              key={name}
              className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 flex flex-col gap-4"
            >
              <Stars />
              <blockquote className="text-stone-700 leading-relaxed flex-1">
                <p>"{body}"</p>
              </blockquote>
              <footer className="flex items-center gap-3 pt-2 border-t border-stone-100">
                <div
                  aria-hidden="true"
                  className="w-9 h-9 rounded-full bg-bark-green flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                >
                  {initials}
                </div>
                <cite className="font-semibold text-bark-brown text-sm not-italic">{name}</cite>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
