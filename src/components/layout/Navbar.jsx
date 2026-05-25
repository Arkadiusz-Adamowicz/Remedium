import { useState } from "react";
import { Link } from "react-router-dom";
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
            <MobileMenuLink to="/flights" setMobileMenuOpen={setMobileMenuOpen}>
              Loty
            </MobileMenuLink>
            <MobileMenuLink
              to="/reservations"
              setMobileMenuOpen={setMobileMenuOpen}
            >
              Moje rezerwacje
            </MobileMenuLink>
            <MobileMenuLink to="/contact" setMobileMenuOpen={setMobileMenuOpen}>
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
