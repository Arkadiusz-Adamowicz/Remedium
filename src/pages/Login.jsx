import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // MOCK AUTH (PRO SIMPLE)
    if (!email || !password) return

    const user = {
      email,
      token: 'mock-token-' + Date.now(),
    }

    localStorage.setItem('user', JSON.stringify(user))

    navigate('/dashboard')
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950 px-6'>
      <div className='w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8'>
        <h1 className='text-3xl font-bold mb-6'>Logowanie</h1>

        <form onSubmit={handleLogin} className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-3 rounded-xl bg-slate-900 border border-white/10'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Hasło'
            className='w-full p-3 rounded-xl bg-slate-900 border border-white/10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold'
          >
            Zaloguj się
          </button>
        </form>

        <p className='text-sm text-slate-400 mt-4'>
          Demo login — dane zapisywane w LocalStorage
        </p>
      </div>
    </div>
  )
}