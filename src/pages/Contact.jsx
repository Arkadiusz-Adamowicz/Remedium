import { useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const newMessage = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "contactMessages",
      JSON.stringify([...messages, newMessage]),
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Wiadomość została wysłana!");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020812] font-['Satoshi'] text-white">
      <img
        src="/contact-hero.png"
        alt="Remedium contact background"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[65%_center]
          sm:object-[62%_center]
          md:object-[58%_center]
          lg:object-[55%_center]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020812]/95 via-[#020812]/58 to-[#020812]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020812]/95 via-[#020812]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1370px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
        <Navbar />

        <section className="relative z-10 pt-8 sm:pt-12 lg:pt-[58px]">
          <h1 className="text-[42px] font-black leading-[1.08] tracking-[-0.055em] drop-shadow-xl sm:text-[52px] md:text-[58px]">
            Kontakt
          </h1>

          <p className="mt-4 max-w-[620px] text-[15px] font-medium leading-[1.6] text-white/70 sm:text-[16px]">
            Skontaktuj się z nami. Jesteśmy tutaj, aby pomóc.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
            <div className="rounded-2xl border border-white/10 bg-[#07111f]/80 p-6 shadow-2xl backdrop-blur-xl">
              <ContactItem
                icon={<MapPin />}
                title="Adres"
                text={<>ul. Piłsudskiego 2, 50-001 Wrocław</>}
              />

              <ContactItem
                icon={<Phone />}
                title="Telefon"
                text="+48 71 344 33 49"
              />

              <ContactItem
                icon={<Mail />}
                title="Email"
                text={
                  <a
                    href="mailto:kontakt@remedium.pl"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    kontakt@remedium.pl
                  </a>
                }
              />

              <ContactItem
                icon={<Clock />}
                title="Godziny otwarcia"
                text="Pon - Pt: 9:00 - 17:00"
                last
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-[#07111f]/80 p-6 shadow-2xl backdrop-blur-xl"
            >
              <label className="block">
                <span className="text-[13px] font-bold text-white/70">
                  Imię i nazwisko
                </span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 h-[52px] w-full rounded-md border border-white/10 bg-[#020812]/80 px-4 text-[14px] font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-blue-500"
                  placeholder="Jan Kowalski"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-[13px] font-bold text-white/70">
                  Email
                </span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2 h-[52px] w-full rounded-md border border-white/10 bg-[#020812]/80 px-4 text-[14px] font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-blue-500"
                  placeholder="jan.kowalski@example.com"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-[13px] font-bold text-white/70">
                  Wiadomość
                </span>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-2 min-h-[96px] w-full resize-none rounded-md border border-white/10 bg-[#020812]/80 px-4 py-4 text-[14px] font-semibold text-white outline-none transition placeholder:text-white/45 focus:border-blue-500"
                  placeholder="Treść wiadomości..."
                />
              </label>

              <button
                type="submit"
                className="mt-6 flex h-[56px] w-full items-center justify-center gap-2 rounded-md bg-blue-600 text-[15px] font-black text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 active:scale-[0.99]"
              >
                <Send className="h-4 w-4" />
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

function ContactItem({ icon, title, text, last }) {
  return (
    <div className={`flex gap-5 ${last ? "" : "mb-8"}`}>
      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-blue-200">
        <div className="h-6 w-6">{icon}</div>
      </div>

      <div>
        <h3 className="text-[14px] font-black text-white/85">{title}</h3>
        <p className="mt-2 text-[14px] font-semibold leading-[1.6] text-white/70">
          {text}
        </p>
      </div>
    </div>
  );
}
