export default function FlightCard({ flight }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'
    >
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-2xl font-bold'>
            {flight.from} → {flight.to}
          </h3>

          <p className='mt-2 text-slate-400'>
            {flight.airline}
          </p>
        </div>

        <div className='text-right'>
          <div className='text-3xl font-black text-blue-400'>
            {flight.price} zł
          </div>

          <p className='text-sm text-slate-400'>
            {flight.date}
          </p>
        </div>
      </div>

      <Link
        to={`/booking/${flight.id}`}
        className='mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500'
      >
        Rezerwuj
      </Link>
    </motion.div>
  )
}