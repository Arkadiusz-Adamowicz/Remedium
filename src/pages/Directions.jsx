import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

const allDestinations = [
  { city: "Paryż", country: "Francja", price: "299 PLN", image: "/assets/paris.png" },
  { city: "Rzym", country: "Włochy", price: "349 PLN", image: "/assets/rome.png" },
  { city: "Barcelona", country: "Hiszpania", price: "329 PLN", image: "/assets/barcelona.png" },
  { city: "Nowy Jork", country: "USA", price: "1599 PLN", image: "/assets/new-york.png" },
  { city: "Bali", country: "Indonezja", price: "2299 PLN", image: "/assets/bali.png" },
  { city: "Tokio", country: "Japonia", price: "2499 PLN", image: "/assets/tokyo.png" },
  { city: "Londyn", country: "Wielka Brytania", price: "399 PLN", image: "/assets/london.png" },
  { city: "Dubaj", country: "ZEA", price: "1399 PLN", image: "/assets/dubai.png" },
];

export default function Directions() {
  const [search, setSearch] = useState("");

  const filtered = allDestinations.filter((item) =>
    `${item.city} ${item.country}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#020812] font-['Satoshi'] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.25),transparent_35%),radial-gradient(circle_at_top_left,rgba(14,165,233,.12),transparent_30%)]" />

      <section className="relative z-10 mx-auto max-w-[1780px] px-4 py-8 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          <ArrowLeft className="h-5 w-5" />
          Wróć na stronę główną
        </Link>

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-[42px] font-black tracking-tight sm:text-[64px]">
              Wszystkie kierunki
            </h1>
            <p className="mt-3 text-[18px] text-white/60">
              Wybierz miejsce swojej następnej podróży.
            </p>
          </div>

          <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 backdrop-blur-xl lg:w-[420px]">
            <Search className="h-5 w-5 text-white/50" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Szukaj kierunku..."
              className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <Link
              key={item.city}
              to={`/flights?to=${encodeURIComponent(item.city)}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#07101a]/80 shadow-2xl shadow-black/40"
            >
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.city}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-[#020812]/45 to-transparent" />

                <div className="absolute bottom-0 p-6">
                  <h2 className="text-[28px] font-black">{item.city}</h2>
                  <p className="mt-1 text-white/55">{item.country}</p>
                  <p className="mt-4 text-[22px] font-bold">
                    <span className="font-medium text-white/60">od </span>
                    {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}