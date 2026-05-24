import { Link } from "react-router-dom";
import Popular from "./Popular.jsx";
import TestimonialsCarousel from "./TestimonialsCarousel";
import {
  Plane,
  ArrowLeftRight,
  Tag,
  CreditCard,
  Headphones,
  Route,
  Menu,
} from "lucide-react";


export default function Home() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#020812] font-['Satoshi'] text-white">
      <img
  src="/src/assets/home-hero.png"
  alt="Remedium travel hero"
  className="
    absolute inset-0
    h-full w-full
    object-cover

    object-[78%_center]

    sm:object-[72%_center]
    md:object-[68%_center]
    lg:object-[65%_center]
    xl:object-center

    scale-[1.35]
    sm:scale-[1.18]
    md:scale-[1.08]
    lg:scale-100
  "
/>

      <div className="absolute inset-0 bg-gradient-to-r from-[#020812]/95 via-[#020812]/65 to-[#020812]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-[#020812]/20 to-[#020812]/20" />

      <div className="relative z-10 mx-auto max-w-[1780px] px-4 sm:px-6 lg:px-10">
        <header className="flex h-[82px] items-center justify-between lg:h-[110px]">
          <Link to="/" className="flex items-center gap-3 lg:gap-4">
            <Plane className="h-7 w-7 rotate-25 fill-blue-500 stroke-blue-500 stroke-[1.7] lg:h-9 lg:w-9" />
            <span className="text-[22px] font-black tracking-tight lg:text-[28px]">
              REMEDIUM
            </span>
          </Link>

          <nav className="hidden items-center gap-10 text-[16px] font-semibold text-white/90 xl:flex">
            <Link to="/">Strona główna</Link>
            <Link to="/flights">Loty</Link>
            <Link to="/reservations">Moje rezerwacje</Link>
            <Link to="/contact">Kontakt</Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/login"
              className="rounded-lg border border-white/70 bg-white/10 px-5 py-3 text-[15px] font-bold backdrop-blur hover:bg-white/20 lg:px-8 lg:py-4"
            >
              Zaloguj się
            </Link>

            <Link
              to="/register"
              className="rounded-lg bg-blue-600 px-5 py-3 text-[15px] font-bold shadow-lg shadow-blue-700/40 hover:bg-blue-500 lg:px-8 lg:py-4"
            >
              Zarejestruj się
            </Link>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </header>

        <section className="pt-10 sm:pt-16 lg:pt-[95px] relative z-10 flex min-h-[100svh] flex-col">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[14px] font-semibold backdrop-blur sm:px-6 sm:py-3 sm:text-[16px]">
            <Plane className="h-4 w-4 rotate-25 fill-cyan-400 stroke-cyan-400 stroke-[1.6] sm:h-5 sm:w-5" />
            Odkrywaj świat z Remedium
          </div>

          <h1 className="mt-8 max-w-[900px] text-[44px] font-black leading-[1.08] tracking-[-0.04em] drop-shadow-xl sm:text-[58px] md:text-[68px] lg:mt-12 lg:text-[82px]">
            Podróże, które <br />
            pozostają <span className="text-blue-500">w pamięci</span>
          </h1>

          <p className="mt-5 max-w-[650px] text-[17px] font-medium leading-[1.55] text-white/80 sm:text-[20px] lg:mt-7 lg:text-[24px]">
            Znajdź najlepsze loty w najatrakcyjniejszych cenach i wyrusz w swoją
            następną przygodę.
          </p>

          <FlightSearch />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
            <Feature icon={<Tag />} title="Najlepsze ceny" text="Gwarancja niskiej ceny" />
            <Feature icon={<CreditCard />} title="Bezpieczne płatności" text="Twoje dane są bezpieczne" />
            <Feature icon={<Headphones />} title="Wsparcie 24/7" text="Jesteśmy zawsze dla Ciebie" />
            <Feature icon={<Route />} title="Tysiące kierunków" text="Odkrywaj świat bez ograniczeń" />
          </div>
        </section>
        <TestimonialsCarousel />®∂
        <Popular />
      </div>
    </main>
  );
}

function FlightSearch() {
  return (
    <div className="mt-8 rounded-xl border border-white/15 bg-[#050b12]/90 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-5 lg:mt-12 lg:p-6">
      <div className="mb-5 flex flex-wrap gap-4 text-[14px] font-semibold text-white/75 sm:gap-8 sm:text-[16px]">
        <label className="flex items-center gap-2 sm:gap-3">
          <input type="radio" name="trip" defaultChecked className="h-4 w-4 accent-blue-600 sm:h-5 sm:w-5" />
          W obie strony
        </label>

        <label className="flex items-center gap-2 sm:gap-3">
          <input type="radio" name="trip" className="h-4 w-4 accent-blue-600 sm:h-5 sm:w-5" />
          W jedną stronę
        </label>

        <label className="flex items-center gap-2 sm:gap-3">
          <input type="radio" name="trip" className="h-4 w-4 accent-blue-600 sm:h-5 sm:w-5" />
          Multi-city
        </label>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1.25fr_1.25fr_1fr_1fr_.8fr_.8fr]">
        <Box label="Z" value="Warszawa (WAW)" />

        <div className="relative">
          <Box label="Do" value="Paryż (CDG)" />
          <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#202936] shadow-xl xl:-left-8 xl:top-1/2 xl:h-12 xl:w-12 xl:-translate-y-1/2">
            <ArrowLeftRight className="h-5 w-5 text-white xl:h-6 xl:w-6" />
          </button>
        </div>

        <Box label="Wylot" value="12 maj, 2025" />
        <Box label="Powrót" value="19 maj, 2025" />

        <div className="rounded-lg border border-white/10 bg-[#07101a]/90 px-5 py-4">
          <p className="mb-2 text-[14px] font-semibold text-white/55 sm:text-[15px]">
            Pasażerowie
          </p>
          <select className="w-full bg-transparent text-[17px] font-bold outline-none sm:text-[20px]">
            <option>1 pasażer</option>
            <option>2 pasażerów</option>
            <option>3 pasażerów</option>
          </select>
        </div>

        <Link
          to="/flights"
          className="flex min-h-[64px] items-center justify-center rounded-lg bg-blue-600 text-[18px] font-black shadow-lg shadow-blue-700/40 hover:bg-blue-500 sm:text-[20px]"
        >
          Szukaj lotów
        </Link>
      </div>
    </div>
  );
}

function Box({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#07101a]/90 px-5 py-4">
      <p className="mb-2 text-[14px] font-semibold text-white/55 sm:text-[15px]">
        {label}
      </p>
      <p className="text-[17px] font-black sm:text-[20px]">{value}</p>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:h-16 sm:w-16">
        {icon}
      </div>

      <div>
        <h3 className="text-[17px] font-black sm:text-[18px]">{title}</h3>
        <p className="mt-1 text-[14px] font-medium text-white/60 sm:text-[16px]">
          {text}
        </p>
      </div>
    </div>
  );
 
}
