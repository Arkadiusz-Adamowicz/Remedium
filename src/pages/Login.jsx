import { useState } from "react";
import Navbar from "../components/layout/Navbar.jsx";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "Jan Kowalski",
    email: "jan.kowalski@example.com",
    password: "************",
  });

  const isRegister = mode === "register";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      const users = JSON.parse(localStorage.getItem("remediumUsers")) || [];

      const userExists = users.some((user) => user.email === formData.email);

      if (userExists) {
        alert("Użytkownik z tym adresem email już istnieje.");
        return;
      }

      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "remediumUsers",
        JSON.stringify([...users, newUser]),
      );
      localStorage.setItem(
        "remediumUser",
        JSON.stringify({
          name: newUser.name,
          email: newUser.email,
          loggedIn: true,
          loginAt: new Date().toISOString(),
        }),
      );

      alert("Konto zostało utworzone!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("remediumUsers")) || [];

    const foundUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password,
    );

    if (!foundUser && formData.email !== "jan.kowalski@example.com") {
      alert("Nieprawidłowy email lub hasło.");
      return;
    }

    localStorage.setItem(
      "remediumUser",
      JSON.stringify({
        name: foundUser?.name || "Jan Kowalski",
        email: formData.email,
        loggedIn: true,
        loginAt: new Date().toISOString(),
      }),
    );

    alert("Zalogowano pomyślnie!");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020812] font-['Satoshi'] text-white">
      <img
        src="/login-hero.png"
        alt="Remedium login hero"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          object-[72%_center]
          sm:object-[68%_center]
          md:object-[65%_center]
          lg:object-[62%_center]
        "
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020812]/95 via-[#020812]/62 to-[#020812]/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020812]/80 via-[#020812]/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1370px] px-4 sm:px-6 lg:px-10 xl:px-[60px]">
        <Navbar />

        <section className="grid min-h-[calc(100vh-82px)] items-center gap-10 pb-16 pt-10 lg:grid-cols-[420px_1fr]">
          <div>
            <h1 className="text-[42px] font-black leading-[1.08] tracking-[-0.055em] drop-shadow-xl sm:text-[52px]">
              {isRegister ? "Rejestracja" : "Logowanie"}
            </h1>

            <p className="mt-5 max-w-[380px] text-[15px] font-bold leading-[1.6] text-white/65 sm:text-[16px]">
              {isRegister
                ? "Utwórz konto, aby rezerwować loty i zarządzać podróżami"
                : "Zaloguj się, aby zarządzać rezerwacjami"}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#07111f]/82 p-6 shadow-2xl backdrop-blur-xl lg:ml-[20px]"
          >
            {isRegister && (
              <label className="block">
                <span className="text-[13px] font-black text-white/70">
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
            )}

            <label className={isRegister ? "mt-6 block" : "block"}>
              <span className="text-[13px] font-black text-white/70">
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

            <label className="mt-6 block">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-black text-white/70">
                  Hasło
                </span>

                {!isRegister && (
                  <a
                    href="/forgot-password"
                    className="text-[13px] font-black text-blue-500 transition hover:text-blue-400"
                  >
                    Zapomniałeś hasła?
                  </a>
                )}
              </div>

              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="h-[52px] w-full rounded-md border border-white/10 bg-[#020812]/80 px-4 pr-12 text-[14px] font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-blue-500"
                  placeholder="Wpisz hasło"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/55 transition hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </label>

            <button
              type="submit"
              className="mt-7 h-[56px] w-full rounded-md bg-blue-600 text-[15px] font-black text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 active:scale-[0.99]"
            >
              {isRegister ? "Zarejestruj się" : "Zaloguj się"}
            </button>

            <p className="mt-7 text-center text-[14px] font-bold text-white/58">
              {isRegister ? "Masz już konto?" : "Nie masz konta?"}{" "}
              <button
                type="button"
                onClick={() => setMode(isRegister ? "login" : "register")}
                className="font-black text-blue-500 transition hover:text-blue-400"
              >
                {isRegister ? "Zaloguj się" : "Zarejestruj się"}
              </button>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
