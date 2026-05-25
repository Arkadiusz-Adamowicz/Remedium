import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeftRight,
  ChevronDown,
  Clock,
  Plane,
  SlidersHorizontal,
} from "lucide-react";
import { flights } from "../data/flights.js";
import Navbar from "../components/layout/Navbar.jsx";

export default function Flights() {
  const [query, setQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [stops, setStops] = useState("all");
  const [sort, setSort] = useState("price");

  const filtered = useMemo(() => {
    const list = flights.filter((f) => {
      const matchesQuery =
        f.from.toLowerCase().includes(query.toLowerCase()) ||
        f.to.toLowerCase().includes(query.toLowerCase());

      const matchesPrice = Number(f.price) <= Number(maxPrice);

      const matchesStops =
        stops === "all" ||
        String(f.stops ?? "0") === stops ||
        (stops === "2" && Number(f.stops ?? 0) >= 2);

      return matchesQuery && matchesPrice && matchesStops;
    });

    return [...list].sort((a, b) => {
      if (sort === "price") return Number(a.price) - Number(b.price);
      if (sort === "time")
        return String(a.duration).localeCompare(String(b.duration));
      return 0;
    });
  }, [query, maxPrice, stops, sort]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020812] font-['Satoshi'] text-white">
      <section>
        <img
          src="/flight-hero.png"
          alt="Lot samolotem ponad chmurami"
          className="absolute inset-0 h-[430px] w-full object-cover object-center"
        />

        <div className="absolute inset-0 h-[430px] bg-gradient-to-r from-[#050b12]/95 via-[#050b12]/55 to-[#050b12]/10" />
        <div className="absolute inset-0 h-[430px] bg-gradient-to-t from-[#050b12] via-[#050b12]/35 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1370px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
          <Navbar />

          <h1 className="text-[44px] font-black tracking-[-0.04em] drop-shadow-xl md:text-[56px]">
            Loty
          </h1>
          <p className="mt-3 max-w-[540px] text-[17px] font-semibold text-white/75">
            Znajdź i zarezerwuj loty w najniższych cenach
          </p>
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1315px] gap-6 px-4 py-5 pb-16 sm:px-6 lg:grid-cols-[350px_1fr] lg:px-8">
        <aside className="rounded-2xl border border-white/10 bg-[#07101a]/88 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <h2 className="text-[22px] font-black">Filtry</h2>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setMaxPrice(5000);
                setStops("all");
              }}
              className="text-[15px] font-bold text-blue-400 hover:text-blue-300"
            >
              Wyczyść
            </button>
          </div>

          <div className="mt-7">
            <h3 className="mb-5 text-[17px] font-black">Przesiadki</h3>

            <FilterCheckbox
              label="Bez przesiadek"
              count="125"
              checked={stops === "0"}
              onChange={() => setStops(stops === "0" ? "all" : "0")}
            />

            <FilterCheckbox
              label="1 przesiadka"
              count="342"
              checked={stops === "1"}
              onChange={() => setStops(stops === "1" ? "all" : "1")}
            />

            <FilterCheckbox
              label="2+ przesiadki"
              count="98"
              checked={stops === "2"}
              onChange={() => setStops(stops === "2" ? "all" : "2")}
            />
          </div>

          <div className="mt-8 border-t border-white/10 pt-7">
            <h3 className="mb-6 text-[17px] font-black">Cena</h3>

            <div className="mb-5 flex items-center justify-between text-[15px] font-bold">
              <span>100 PLN</span>
              <span>{maxPrice} PLN</span>
            </div>

            <input
              type="range"
              min="100"
              max="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="h-2 w-full cursor-pointer accent-blue-600"
            />
          </div>

          <div className="mt-8 border-t border-white/10 pt-7">
            <h3 className="mb-6 text-[17px] font-black">Czas wylotu</h3>

            <p className="mb-3 text-[14px] font-semibold text-white/65">
              Wylot
            </p>
            <p className="mb-5 text-[16px] font-bold">00:00 - 23:59</p>

            <input
              type="range"
              min="0"
              max="24"
              defaultValue="24"
              className="h-2 w-full cursor-pointer accent-blue-600"
            />
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-[16px] font-semibold text-white/70">
              Znaleziono {filtered.length || 0} lotów
            </p>

            <label className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#07101a]/90 px-4 py-3 text-[15px] font-semibold text-white/80 sm:w-[240px]">
              Sortuj:
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="cursor-pointer bg-transparent font-black text-white outline-none [color-scheme:dark]"
              >
                <option value="price">Najtańsze</option>
                <option value="time">Najszybsze</option>
              </select>
              <ChevronDown className="h-4 w-4 text-white/60" />
            </label>
          </div>

          <div className="grid gap-3">
            {filtered.map((f) => (
              <FlightCard key={f.id} flight={f} />
            ))}

            {filtered.length === 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center text-white/70">
                Brak lotów dla wybranych filtrów.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function SearchBar({ query, setQuery }) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-[#07101a]/90 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="grid gap-2 md:grid-cols-[1fr_44px_1.35fr_1.2fr_1.2fr_1.1fr_120px]">
        <SearchBox label="Z" value="Warszawa (WAW)" readOnly />

        <div className="hidden items-center justify-center md:flex">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-lg"
          >
            <ArrowLeftRight className="h-5 w-5" />
          </button>
        </div>

        <SearchBox
          label="Do"
          value={query}
          onChange={setQuery}
          placeholder="Dokąd lecisz?"
        />

        <SearchBox label="Wylot" value="" placeholder="Data wylotu," />
        <SearchBox label="Powrót" value="" placeholder="Data powrotu," />

        <SearchSelect />

        <button className="flex min-h-[60px] items-center justify-center rounded-xl bg-blue-600 px-6 text-[16px] font-black shadow-lg shadow-blue-700/40 transition hover:bg-blue-500">
          Szukaj
        </button>
      </div>
    </div>
  );
}

function SearchBox({ label, value, onChange, placeholder, readOnly = false }) {
  return (
    <label className="rounded-xl border border-white/10 bg-[#050b12]/55 px-5 py-3">
      <span className="block text-[13px] font-semibold text-white/45">
        {label}
      </span>

      <input
        value={value}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="mt-1 w-full bg-transparent text-[16px] font-black text-white outline-none placeholder:text-white/80"
      />
    </label>
  );
}

function SearchSelect() {
  return (
    <label className="rounded-xl border border-white/10 bg-[#050b12]/55 px-5 py-3">
      <span className="block text-[13px] font-semibold text-white/45">
        Pasażerowie
      </span>

      <select className="mt-1 w-full cursor-pointer bg-transparent text-[16px] font-black text-white outline-none [color-scheme:dark]">
        <option>1 pasażer</option>
        <option>2 pasażerów</option>
        <option>3 pasażerów</option>
      </select>
    </label>
  );
}

function FilterCheckbox({ label, count, checked, onChange }) {
  return (
    <label className="mb-4 flex cursor-pointer items-center gap-3 text-[15px] font-semibold text-white/75">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 rounded border-white/30 bg-transparent accent-blue-600"
      />

      <span className="flex-1">{label}</span>

      <span className="rounded-full bg-white/10 px-2 py-1 text-[12px] text-white/55">
        {count}
      </span>
    </label>
  );
}

function FlightCard({ flight }) {
  const fromCode = flight.fromCode || "WAW";
  const toCode = flight.toCode || "CDG";
  const fromCity = flight.from || "Warszawa";
  const toCity = flight.to || "Paryż";
  const departure = flight.departure || flight.time || "06:20";
  const arrival = flight.arrival || "08:35";
  const duration = flight.duration || "2h 15m";
  const airline = flight.airline || "LOT";
  const stops = Number(flight.stops ?? 0);

  return (
    <article className="grid gap-6 rounded-2xl border border-white/10 bg-[#07101a]/72 p-6 shadow-xl shadow-black/30 backdrop-blur transition hover:border-blue-500/35 hover:bg-[#0a1624]/85 md:grid-cols-[130px_1fr_1fr_1fr_160px] md:items-center">
      <div className="text-[23px] font-black italic tracking-[-0.06em] text-white">
        {airline}
      </div>

      <div>
        <p className="text-[18px] font-semibold text-white/65">{fromCode}</p>
        <p className="text-[28px] font-black">{departure}</p>
        <p className="text-[15px] font-semibold text-white/45">{fromCity}</p>
      </div>

      <div className="text-center">
        <div className="mb-2 flex items-center justify-center gap-2 text-[14px] font-black text-white/70">
          <Clock className="h-4 w-4 text-blue-400" />
          {duration}
        </div>

        <div className="relative mx-auto my-2 h-px max-w-[210px] bg-white/15">
          <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400 bg-[#07101a]" />
        </div>

        <p className="text-[14px] font-bold text-white/70">
          {stops === 0 ? "Bezpośredni" : `${stops} przesiadka`}
        </p>
      </div>

      <div>
        <p className="text-[18px] font-semibold text-white/65">{toCode}</p>
        <p className="text-[28px] font-black">{arrival}</p>
        <p className="text-[15px] font-semibold text-white/45">{toCity}</p>
      </div>

      <div className="flex flex-col items-start gap-4 md:items-end">
        <p className="text-[28px] font-black">
          {flight.price} <span className="text-[18px]">PLN</span>
        </p>

        <Link
          to={`/booking/${flight.id}`}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-7 text-[16px] font-black shadow-lg shadow-blue-700/40 transition hover:bg-blue-500 md:w-[135px]"
        >
          Wybierz
        </Link>
      </div>
    </article>
  );
}
