import { Link } from "react-router-dom";
import { useState } from "react";
import Popular from "./Popular.jsx";
import TestimonialsCarousel from "./TestimonialsCarousel";
import airports from "../data/airports.js";
import {
  Plane,
  ArrowLeftRight,
  Tag,
  CreditCard,
  Headphones,
  Route,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020812] font-['Satoshi'] text-white">
      <img
        src="/home-hero.png"
        alt="Remedium travel hero"
        className="
          absolute inset-0
          h-[760px] w-full
          object-cover
          object-[70%_center]
          sm:object-[64%_center]
          md:object-[60%_center]
          lg:h-[820px]
          lg:object-[58%_center]
          xl:h-[850px]
        "
      />

      <div className="absolute inset-0 h-[850px] bg-gradient-to-r from-[#020812]/95 via-[#020812]/58 to-[#020812]/8" />
      <div className="absolute inset-0 h-[850px] bg-gradient-to-t from-[#020812] via-[#020812]/25 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1370px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
        <header className="relative flex h-[82px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Plane className="h-8 w-8 rotate-[10deg] fill-blue-500 stroke-blue-500 stroke-[1.8]" />
            <span className="text-[20px] font-black tracking-[-0.03em]">
              REMEDIUM
            </span>
          </Link>

          <nav className="hidden items-center gap-[50px] text-[13px] font-semibold text-white/90 xl:flex">
            <Link to="/">Strona główna</Link>
            <Link to="/flights">Loty</Link>
            <Link to="/reservations">Moje rezerwacje</Link>
            <Link to="/contact">Kontakt</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-[8px] border border-white/45 bg-white/10 px-[22px] py-[13px] text-[13px] font-bold shadow-inner shadow-white/10 backdrop-blur hover:bg-white/20"
            >
              Zaloguj się
            </Link>

            <Link
              to="/register"
              className="rounded-[8px] bg-blue-600 px-[24px] py-[14px] text-[13px] font-bold shadow-lg shadow-blue-700/40 hover:bg-blue-500"
            >
              Zarejestruj się
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={mobileMenuOpen}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 top-[72px] z-40 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07101a]/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl md:hidden">
              <nav className="flex flex-col gap-2 text-[15px] font-bold text-white">
                <MobileMenuLink to="/" setMobileMenuOpen={setMobileMenuOpen}>
                  Strona główna
                </MobileMenuLink>
                <MobileMenuLink
                  to="/flights"
                  setMobileMenuOpen={setMobileMenuOpen}
                >
                  Loty
                </MobileMenuLink>
                <MobileMenuLink
                  to="/reservations"
                  setMobileMenuOpen={setMobileMenuOpen}
                >
                  Moje rezerwacje
                </MobileMenuLink>
                <MobileMenuLink
                  to="/contact"
                  setMobileMenuOpen={setMobileMenuOpen}
                >
                  Kontakt
                </MobileMenuLink>
              </nav>

              <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[14px] font-black hover:bg-white/15"
                >
                  Zaloguj się
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 items-center justify-center rounded-xl bg-blue-600 text-[14px] font-black shadow-lg shadow-blue-700/40 hover:bg-blue-500"
                >
                  Zarejestruj się
                </Link>
              </div>
            </div>
          )}
        </header>

        <section className="relative z-10 pt-8 sm:pt-12 lg:pt-[58px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold text-white/90 backdrop-blur">
            <Plane className="h-4 w-4 rotate-[10deg] fill-cyan-400 stroke-cyan-400 stroke-[1.6]" />
            Odkrywaj świat z Remedium
          </div>

          <h1 className="mt-7 max-w-[670px] text-[42px] font-black leading-[1.08] tracking-[-0.055em] drop-shadow-xl sm:text-[52px] md:text-[58px] lg:text-[64px]">
            Podróże, które <br />
            pozostają <span className="text-blue-500">w pamięci</span>
          </h1>

          <p className="mt-5 max-w-[520px] text-[15px] font-medium leading-[1.6] text-white/78 sm:text-[16px] lg:text-[17px]">
            Znajdź najlepsze loty w najatrakcyjniejszych cenach
            <br className="hidden sm:block" />i wyrusz w swoją następną
            przygodę.
          </p>

          <FlightSearch />

          <div className="mt-[38px] grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            <Feature
              icon={<Tag />}
              title="Najlepsze ceny"
              text="Gwarancja niskiej ceny"
            />
            <Feature
              icon={<CreditCard />}
              title="Bezpieczne płatności"
              text="Twoje dane są bezpieczne"
            />
            <Feature
              icon={<Headphones />}
              title="Wsparcie 24/7"
              text="Jesteśmy zawsze dla Ciebie"
            />
            <Feature
              icon={<Route />}
              title="Tysiące kierunków"
              text="Odkrywaj świat bez ograniczeń"
            />
          </div>
        </section>

        <TestimonialsCarousel />
        <Popular />
      </div>
    </main>
  );
}

function MobileMenuLink({ to, children, setMobileMenuOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setMobileMenuOpen(false)}
      className="rounded-xl px-4 py-3 hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function FlightSearch() {
  const [from, setFrom] = useState("Warszawa (WAW)");
  const [to, setTo] = useState("Paryż (CDG)");
  const [departureDate, setDepartureDate] = useState("2025-05-12");
  const [returnDate, setReturnDate] = useState("2025-05-19");
  const [passengers, setPassengers] = useState("1 pasażer");

  return (
    <div className="mt-[34px] rounded-[11px] border border-white/15 bg-[#050b12]/92 p-4 shadow-2xl shadow-black/70 backdrop-blur-xl sm:p-[18px]">
      <div className="mb-[16px] flex flex-wrap gap-x-[28px] gap-y-3 text-[13px] font-semibold text-white/70">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="radio"
            name="trip"
            defaultChecked
            className="h-4 w-4 accent-blue-600"
          />
          W obie strony
        </label>

        <label className="flex cursor-pointer items-center gap-2">
          <input type="radio" name="trip" className="h-4 w-4 accent-blue-600" />
          W jedną stronę
        </label>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.23fr_1.23fr_1fr_1fr_.8fr_.86fr] xl:gap-[6px]">
        <SelectBox label="Z" value={from} onChange={setFrom} />

        <div className="relative">
          <SelectBox label="Do" value={to} onChange={setTo} />
        </div>

        <DateBox
          label="Wylot"
          value={departureDate}
          onChange={setDepartureDate}
        />
        <DateBox label="Powrót" value={returnDate} onChange={setReturnDate} />

        <SelectBox
          label="Pasażerowie"
          value={passengers}
          onChange={setPassengers}
          options={["1 pasażer", "2 pasażerów", "3 pasażerów", "4 pasażerów"]}
        />

        <Link
          to={`/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
            to,
          )}&departure=${departureDate}&return=${returnDate}&passengers=${encodeURIComponent(
            passengers,
          )}`}
          className="flex min-h-[64px] items-center justify-center rounded-[7px] bg-blue-600 text-[15px] font-black shadow-lg shadow-blue-700/40 transition hover:bg-blue-500 md:col-span-2 xl:col-span-1"
        >
          Szukaj lotów
        </Link>
      </div>
    </div>
  );
}

function SelectBox({ label, value, onChange, options = airports }) {
  return (
    <div className="rounded-[6px] border border-white/10 bg-[#07101a]/90 px-4 py-[11px] transition focus-within:border-blue-500/70 focus-within:bg-[#0a1624]">
      <label className="mb-[6px] block text-[12px] font-semibold text-white/50">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-md bg-[#07101a] pr-8 text-[15px] font-black text-white outline-none transition [color-scheme:dark]"
        >
          {options.map((item) => (
            <option key={item} value={item} className="bg-[#07101a] text-white">
              {item}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[10px] text-blue-400">
          ▼
        </span>
      </div>
    </div>
  );
}

function DateBox({ label, value, onChange }) {
  return (
    <div className="rounded-[6px] border border-white/10 bg-[#07101a]/90 px-4 py-[11px] transition focus-within:border-blue-500/70 focus-within:bg-[#0a1624]">
      <label className="mb-[6px] block text-[12px] font-semibold text-white/50">
        {label}
      </label>

      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer rounded-md bg-[#07101a] text-[15px] font-black text-white outline-none accent-blue-600 [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:rounded-md [&::-webkit-calendar-picker-indicator]:bg-blue-500 [&::-webkit-calendar-picker-indicator]:p-[3px]"
      />
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur xl:rounded-none xl:border-y-0 xl:border-l-0 xl:border-r xl:bg-transparent xl:p-0 xl:pr-8 xl:last:border-r-0">
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
        <div className="h-5 w-5">{icon}</div>
      </div>

      <div>
        <h3 className="text-[15px] font-black">{title}</h3>
        <p className="mt-[3px] text-[13px] font-medium text-white/58">{text}</p>
      </div>
    </div>
  );
}
