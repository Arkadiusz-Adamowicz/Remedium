import useLocalStorage from '../hooks/useLocalStorage'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export default function Dashboard() {
  const [bookings, setBookings] = useLocalStorage('remedium-bookings', [])

  const removeBooking = (indexToRemove) => {
    const updated = bookings.filter((_, index) => index !== indexToRemove)
    setBookings(updated)
  }

  const navigate = useNavigate()

  useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    navigate('/login')
  }
}, [])

  return (
    <div className='mx-auto max-w-7xl px-6 py-16'>
      <h1 className='mb-10 text-5xl font-black'>Twoje rezerwacje</h1>

      {bookings.length === 0 ? (
        <div className='rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-slate-400'>
          Nie masz jeszcze żadnych rezerwacji.
        </div>
      ) : (
        <div className='space-y-6'>
          <AnimatePresence>
            {bookings.map((booking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className='rounded-3xl border border-white/10 bg-white/5 p-6'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='text-2xl font-bold'>
                      {booking.flight.from} → {booking.flight.to}
                    </h3>

                    <p className='mt-2 text-slate-300'>
                      {booking.name}
                    </p>

                    <p className='text-slate-400'>
                      {booking.email}
                    </p>

                    <p className='mt-2 text-sm text-slate-500'>
                      {new Date(booking.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => removeBooking(index)}
                    className='rounded-xl p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400'
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}