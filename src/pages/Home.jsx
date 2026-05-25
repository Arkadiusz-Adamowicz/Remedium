import { useState } from "react";
import Popular from "./Popular.jsx";
import FlightSearch from "../components/booking/FlightSearch.jsx";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Navbar from "../components/layout/Navbar.jsx";
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
        <Navbar />

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
