import { Link } from "react-router-dom";
import Popular from "./Popular.jsx";
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
    <main className="relative overflow-hidden bg-[#020812] font-['Satoshi'] text-white">
      {/* HERO BG */}
      <img
        src="/home-hero.png"
        alt="Remedium travel hero"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-center
          scale-[1.02]
        "
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020812]/98 via-[#020812]/72 to-[#020812]/18" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-[#020812]/20 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 lg:px-10">
        {/* NAVBAR */}
        <header className="flex h-[88px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Plane className="h-7 w-7 rotate-45 fill-blue-500 stroke-blue-500" />

            <span className="text-[18px] font-black tracking-tight lg:text-[20px]">
              REMEDIUM
            </span>
          </Link>

          <nav className="hidden items-center gap-14 text-[15px] font-semibold text-white/90 lg:flex">
            <Link to="/">Strona główna</Link>
            <Link to="/flights">Loty</Link>
            <Link to="/reservations">Moje rezerwacje</Link>
            <Link to="/contact">Kontakt</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="
                rounded-xl
                border border-white/30
                bg-white/10
                px-6 py-3
                text-[14px]
                font-bold
                backdrop-blur-md
                transition
                hover:bg-white/20
              "
            >
              Zaloguj się
            </Link>

            <Link
              to="/register"
              className="
                rounded-xl
                bg-blue-600
                px-6 py-3
                text-[14px]
                font-bold
                shadow-lg shadow-blue-700/30
                transition
                hover:bg-blue-500
              "
            >
              Zarejestruj się
            </Link>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </header>

        {/* HERO */}
        <section className="relative pt-8 pb-14 lg:pt-10 lg:pb-24">
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-white/10
              bg-white/10
              px-5 py-3
              text-[14px]
              font-semibold
              backdrop-blur-md
            "
          >
            <Plane className="h-4 w-4 rotate-45 fill-cyan-400 stroke-cyan-400" />
            Odkrywaj świat z Remedium
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              max-w-[760px]
              text-[58px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              drop-shadow-2xl
              sm:text-[72px]
              lg:text-[92px]
            "
          >
            Podróże, które
            <br />
            pozostają <span className="text-blue-500">w pamięci</span>
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              mt-7
              max-w-[620px]
              text-[18px]
              leading-[1.6]
              text-white/75
              lg:text-[22px]
            "
          >
            Znajdź najlepsze loty w najatrakcyjniejszych cenach i wyrusz w swoją
            następną przygodę.
          </p>

          {/* SEARCH */}
          <div className="mt-10">
            <FlightSearch />
          </div>

          {/* FEATURES */}
          <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-4">
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

        {/* POPULAR */}
        <Popular />
      </div>
    </main>
  );
}
