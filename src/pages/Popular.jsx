import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const popularDestinations = [
  {
    city: "Paryż",
    country: "Francja",
    price: "299 PLN",
    image: "/src/assets/cities/paris.png",
  },
  {
    city: "Rzym",
    country: "Włochy",
    price: "349 PLN",
    image: "/src/assets/cities/rome.png",
  },
  {
    city: "Barcelona",
    country: "Hiszpania",
    price: "329 PLN",
    image: "/src/assets/cities/barcelona.png",
  },
  {
    city: "Nowy Jork",
    country: "USA",
    price: "1599 PLN",
    image: "/src/assets/cities/new-york.png",
  },
  {
    city: "Bali",
    country: "Indonezja",
    price: "2299 PLN",
    image: "/src/assets/cities/bali.png",
  },
];

export default function Popular() {
  return (
    <section className="relative z-10 mx-auto max-w-[1780px] px-4 pb-16 pt-10 font-['Satoshi'] text-white sm:px-6 lg:px-10">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-[28px] font-black tracking-tight sm:text-[34px]">
            Popularne kierunki
          </h2>
          <p className="mt-2 text-[15px] font-medium text-white/55 sm:text-[17px]">
            Zainspiruj się i wybierz swoją następną podróż
          </p>
        </div>

        <Link
          to="/directions"
          className="hidden items-center gap-2 text-[17px] font-bold text-blue-500 transition hover:text-blue-400 sm:flex"
        >
          Zobacz wszystkie
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {popularDestinations.map((item) => (
          <Link
            key={item.city}
            to={`/flights?to=${encodeURIComponent(item.city)}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#07101a]/80 shadow-2xl shadow-black/40 backdrop-blur-xl"
          >
            <div className="relative h-[330px] overflow-hidden">
              <img
                src={item.image}
                alt={item.city}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020812] via-[#020812]/45 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-[24px] font-black leading-none">
                  {item.city}
                </h3>
                <p className="mt-2 text-[15px] font-medium text-white/55">
                  {item.country}
                </p>
                <p className="mt-4 text-[20px] font-bold">
                  <span className="font-medium text-white/60">od </span>
                  {item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/directions"
        className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-6 py-4 text-[16px] font-bold text-blue-400 backdrop-blur sm:hidden"
      >
        Zobacz wszystkie
        <ArrowRight className="h-5 w-5" />
      </Link>
    </section>
  );
}