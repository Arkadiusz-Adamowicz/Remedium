import { Link } from 'react-router-dom'
import { Plane } from 'lucide-react'

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between p-5'>
        <Link to='/' className='flex items-center gap-2 text-2xl font-bold'>
          <Plane className='text-blue-400' />
          REMEDIUM
        </Link>

        <nav className='flex gap-6 text-sm'>
          <Link to='/'>Home</Link>
          <Link to='/flights'>Loty</Link>
          <Link to='/dashboard'>Rezerwacje</Link>
          <Link to='/contact'>Kontakt</Link>
        </nav>
      </div>
    </header>
  )
}