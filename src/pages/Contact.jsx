import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className='mx-auto max-w-5xl px-6 py-16'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-10 text-5xl font-black'
      >
        Kontakt
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur'
      >
        <p className='text-lg text-slate-300'>
          Masz pytania dotyczące rezerwacji lub lotów? Skontaktuj się z nami.
        </p>

        <div className='mt-10 space-y-6'>
          <div className='flex items-center gap-4 text-slate-300'>
            <MapPin className='text-blue-400' />
            <span>ul. Piłsudskiego 2, 50-001 Wrocław</span>
          </div>

          <div className='flex items-center gap-4 text-slate-300'>
            <Phone className='text-blue-400' />
            <span>+48 71 344 33 43</span>
          </div>

          <div className='flex items-center gap-4 text-slate-300'>
            <Mail className='text-blue-400' />
            <span>kontakt@remedium.pl</span>
          </div>
        </div>

        {/* formularz kontaktowy */}
        <form className='mt-10 space-y-4'>
          <input
            type='text'
            placeholder='Imię i nazwisko'
            className='w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500'
          />

          <input
            type='email'
            placeholder='Email'
            className='w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500'
          />

          <textarea
            placeholder='Twoja wiadomość...'
            rows={5}
            className='w-full rounded-xl border border-white/10 bg-slate-900 p-4 outline-none focus:border-blue-500'
          />

          <button
            type='button'
            className='rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-500'
          >
            Wyślij wiadomość
          </button>
        </form>
      </motion.div>
    </div>
  )
}