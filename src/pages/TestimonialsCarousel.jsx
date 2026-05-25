export const testimonials = [
  {
    name: "Anna Kowalska",
    city: "Wrocław",
    text: "Świetna obsługa i bardzo szybka rezerwacja. Wszystko było jasne od początku do końca.",
    avatar: "/avatar-1.png",
  },
  {
    name: "Katarzyna Zielińska",
    city: "Kraków",
    text: "Profesjonalne podejście, szybki kontakt i wygodny system rezerwacji.",
    avatar: "/avatar-2.png",
  },
  {
    name: "Michał Nowak",
    city: "Warszawa",
    text: "Znaleźliśmy lot do Paryża w super cenie. Na pewno wrócę przy kolejnej podróży.",
    avatar: "/avatar-3.png",
  },
  {
    name: "Tomasz Wiśniewski",
    city: "Poznań",
    text: "Bardzo estetyczna strona, łatwo znalazłem najlepszy kierunek i termin.",
    avatar: "/avatar-4.png",
  },
];

export default function TestimonialsCarousel() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="relative z-10 mx-auto mt-14 max-w-[1780px] overflow-hidden px-4 ">
      <div className="mb-7">
        <h2 className="text-[26px] font-black tracking-tight sm:text-[32px]">
          Opinie klientów
        </h2>
        <p className="mt-2 text-[15px] font-medium text-white/55 sm:text-[17px]">
          Podróżni, którzy wybrali Remedium
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-0 bg-gradient-to-r from-[#020812] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-0 bg-gradient-to-l from-[#020812] to-transparent" />

        <div className="flex w-max animate-testimonials gap-5">
          {items.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="w-[330px] rounded-2xl border border-white/10 bg-[#07101a]/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:w-[420px]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-16 w-16 rounded-full border border-white/20 object-cover"
                />

                <div>
                  <h3 className="text-[18px] font-black">{item.name}</h3>
                  <p className="text-[14px] font-medium text-blue-400">
                    {item.city}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[16px] leading-7 text-white/70">
                “{item.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
