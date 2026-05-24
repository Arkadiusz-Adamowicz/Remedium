import { useParams, useNavigate } from "react-router-dom";
import { flights } from "../data/flights";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const flight = flights.find((f) => f.id === Number(id));
  const [bookings, setBookings] = useLocalStorage("remedium-bookings", []);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      ...form,
      flight,
      createdAt: new Date().toISOString(),
    };

    setBookings([...bookings, newBooking]);

    navigate("/dashboard");
  };
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-10 text-5xl font-black">Rezerwacja lotu</h1>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            {flight.from} → {flight.to}
          </h2>

          <p className="mt-2 text-slate-400">
            {flight.airline} — {flight.price} zł
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Imię i nazwisko"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-slate-900 p-4"
          />
          <input
            type="email"
            placeholder="Adres e-mail"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-slate-900 p-4"
          />

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-4 font-semibold hover:bg-blue-500"
          >
            Potwierdź rezerwację
          </button>
        </form>
      </div>
    </div>
  );
}
