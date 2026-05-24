import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Flights from '../pages/Flights.jsx'
import Booking from '../pages/Booking.jsx'
import Dashboard from '../pages/Dashboard.jsx'
import Contact from '../pages/Contact.jsx'
import Login from '../pages/Login.jsx'
import Directions from "../pages/Directions";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/flights' element={<Flights />} />
      <Route path='/booking/:id' element={<Booking />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path="/directions" element={<Directions />} />
    </Routes>
  )
}