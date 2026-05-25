import { useState } from "react";
import { Link } from "react-router-dom";
import airports from "../../data/airports.js";

const tripTypes = [
  "Apartamenty",
  "City Break",
  "Kolonie i obozy młodzieżowe",
  "Pielgrzymki",
  "Rejsy",
  "Rejsy pilot PL",
  "Wczasy",
  "Wczasy w dwóch hotelach",
  "Wycieczki objazdowe",
  "Zwiedzanie i Wypoczynek",
];

const operators = [
  "Almatur",
  "Atlas Tours Rejsy",
  "Atur",
  "Best Reisen Group",
  "Coral Travel",
  "Ecco Holiday / Ecco Travel",
  "Euro Pol Tour",
  "Exim Tours",
  "Funclub",
  "Index Polska",
  "Itaka",
];

const attributes = [
  "Animacje dla dorosłych",
  "Basen kryty",
  "Basen odkryty",
  "Bez paszportu",
  "Blisko centrum",
  "Blisko plaży",
  "Dla rodzin z dziećmi",
  "Dla seniorów",
  "Duże miasta",
  "Egzotyka",
  "Fitness/siłownia",
];

const standards = [
  "Standard od ★",
  "Standard od ★★",
  "Standard od ★★★",
  "Standard od ★★★★",
  "Standard od ★★★★★",
];

const transports = ["Samolot", "Dojazd własny", "Autokar"];

const destinations = [
  "Albania",
  "Algieria",
  "Andora",
  "Angola",
  "Antarktyda",
  "Arabia Saudyjska",
  "Argentyna",
  "Arktyka",
  "Armenia",
  "Australia",
  "Austria",
];

const meals = [
  "Bez wyżywienia",
  "Obiad",
  "Pełne wyżywienie",
  "Śniadanie",
  "Śniadanie i obiadokolacje",
  "Według programu",
  "Wszystko w cenie",
];

const nights = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21+",
];

export default function FlightSearch() {
  const [from, setFrom] = useState("Warszawa (WAW)");
  const [to, setTo] = useState("Paryż (CDG)");
  const [departureDate, setDepartureDate] = useState("2025-05-12");
  const [returnDate, setReturnDate] = useState("2025-05-19");
  const [passengers, setPassengers] = useState("1 pasażer");

  const [tripType, setTripType] = useState("");
  const [operator, setOperator] = useState("");
  const [attribute, setAttribute] = useState("");
  const [standard, setStandard] = useState("");
  const [transport, setTransport] = useState("");
  const [destination, setDestination] = useState("");
  const [meal, setMeal] = useState("");
  const [night, setNight] = useState("");

  return (
    <div className="mt-[34px] rounded-[14px] border border-white/10 bg-[#050b12]/92 p-4 shadow-2xl shadow-black/70 backdrop-blur-xl sm:p-[22px]">
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

      {/* GŁÓWNE POLA */}
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5 xl:gap-[8px]">
        <SelectBox label="Z" value={from} onChange={setFrom} />

        <SelectBox label="Do" value={to} onChange={setTo} />

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
      </div>

      {/* FILTRY */}
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <SelectBox
          label="Typ podróży"
          value={tripType}
          onChange={setTripType}
          options={tripTypes}
          placeholder="Wybierz typ podróży"
        />

        <SelectBox
          label="Operator"
          value={operator}
          onChange={setOperator}
          options={operators}
          placeholder="Wybierz operatora"
        />

        <SelectBox
          label="Atrybuty"
          value={attribute}
          onChange={setAttribute}
          options={attributes}
          placeholder="Wybierz atrybut"
        />

        <SelectBox
          label="Standard"
          value={standard}
          onChange={setStandard}
          options={standards}
          placeholder="Wybierz standard"
        />

        <SelectBox
          label="Typ transportu"
          value={transport}
          onChange={setTransport}
          options={transports}
          placeholder="Wybierz transport"
        />

        <SelectBox
          label="Cel podróży"
          value={destination}
          onChange={setDestination}
          options={destinations}
          placeholder="Wybierz kierunek"
        />

        <SelectBox
          label="Wyżywienie"
          value={meal}
          onChange={setMeal}
          options={meals}
          placeholder="Wybierz wyżywienie"
        />

        <SelectBox
          label="Liczba nocy"
          value={night}
          onChange={setNight}
          options={nights}
          placeholder="Wybierz liczbę nocy"
        />
      </div>

      {/* PRZYCISK NA DOLE */}
      <div className="mt-5">
        <Link
          to={`/flights?from=${encodeURIComponent(
            from,
          )}&to=${encodeURIComponent(
            to,
          )}&departure=${departureDate}&return=${returnDate}&passengers=${encodeURIComponent(
            passengers,
          )}&tripType=${encodeURIComponent(
            tripType,
          )}&operator=${encodeURIComponent(
            operator,
          )}&attribute=${encodeURIComponent(
            attribute,
          )}&standard=${encodeURIComponent(
            standard,
          )}&transport=${encodeURIComponent(
            transport,
          )}&destination=${encodeURIComponent(
            destination,
          )}&meal=${encodeURIComponent(
            meal,
          )}&nights=${encodeURIComponent(night)}`}
          className="flex h-[64px] w-full items-center justify-center rounded-[12px] bg-gradient-to-r from-blue-600 to-cyan-500 text-[16px] font-black tracking-wide text-white shadow-2xl shadow-blue-700/40 transition duration-300 hover:scale-[1.01] hover:from-blue-500 hover:to-cyan-400"
        >
          Szukaj lotów
        </Link>
      </div>
    </div>
  );
}

function SelectBox({
  label,
  value,
  onChange,
  options = airports,
  placeholder = null,
}) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-[#07101a]/90 px-4 py-[11px] transition duration-200 focus-within:border-blue-500/70 focus-within:bg-[#0a1624]">
      <label className="mb-[6px] block text-[12px] font-semibold text-white/50">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full cursor-pointer appearance-none rounded-md bg-[#07101a] pr-8 text-[15px] font-black text-white outline-none [color-scheme:dark]"
        >
          {placeholder && (
            <option value="" className="bg-[#07101a] text-white/50">
              {placeholder}
            </option>
          )}

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
    <div className="rounded-[8px] border border-white/10 bg-[#07101a]/90 px-4 py-[11px] transition duration-200 focus-within:border-blue-500/70 focus-within:bg-[#0a1624]">
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
