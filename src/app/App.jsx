import Router from './router.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-950 text-white'>
      {/* <Navbar /> */}
      <Router />
      <Footer />
    </div>
  )
}