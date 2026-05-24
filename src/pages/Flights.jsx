import { useState } from 'react'
import { flights } from '../data/flights.js'
import { Link } from 'react-router-dom'

export default function Flights() {
  const [query, setQuery] = useState('')
  const [maxPrice, setMaxPrice] = useState(5000)

  const filtered = flights.filter((f) =>
    (f.from.toLowerCase().includes(query.toLowerCase()) ||
     f.to.toLowerCase().includes(query.toLowerCase())) &&
    Number(f.price) <= Number(maxPrice)
  )

  return (
    <div className='mx-auto max-w-6xl px-6 py-16'>
      <h1 className='text-4xl font-bold mb-6'>Szukaj lotów PRO</h1>

      <div className='flex gap-4 mb-8'>
        <input
          className='p-3 rounded-xl bg-slate-900 border border-white/10'
          placeholder='Miasto...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          type='range'
          min='500'
          max='5000'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
<span>Max: {maxPrice} PLN</span>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        {filtered.map((f) => (
          <div key={f.id} className='p-6 rounded-2xl bg-white/5 border border-white/10'>
            <h2 className='text-xl font-bold'>{f.from} → {f.to}</h2>
            <p className='text-slate-400'>{f.date}</p>
            <p className='text-blue-400 text-2xl font-bold'>{f.price} PLN</p>

            <Link
              to={`/booking/${f.id}`}
              className='inline-block mt-3 bg-blue-600 px-4 py-2 rounded-xl'
            >
              Rezerwuj
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}