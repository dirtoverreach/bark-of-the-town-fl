const schedule = [
  { day: 'Tuesday – Friday', time: '7:30 am – 2:00 pm', note: 'Appointment grooming' },
  { day: 'Walk-in Nails', time: '9:00 am – 12:00 pm', note: 'Tue – Fri, no appointment needed' },
  { day: 'Saturday – Monday', time: 'Closed', note: '' },
]

export default function Hours() {
  return (
    <section id="hours" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-bark-gold font-semibold text-sm uppercase tracking-widest">When to Visit</span>
          <h2 className="font-display text-4xl font-bold text-bark-brown mt-2">Hours</h2>
        </div>

        <dl className="divide-y divide-stone-100 rounded-3xl overflow-hidden border border-stone-100 shadow-sm bg-bark-cream">
          {schedule.map(({ day, time, note }) => (
            <div key={day} className="flex items-center justify-between px-8 py-5 gap-4">
              <div>
                <dt className="font-semibold text-bark-brown">{day}</dt>
                {note && <dd className="text-stone-600 text-sm mt-0.5">{note}</dd>}
              </div>
              <dd className={`font-medium tabular-nums ${time === 'Closed' ? 'text-stone-500' : 'text-bark-green-dark'}`}>
                {time}
              </dd>
            </div>
          ))}
        </dl>

        <p className="text-center text-stone-600 text-sm mt-6">
          Call or text ahead to confirm appointment availability.
        </p>
      </div>
    </section>
  )
}
