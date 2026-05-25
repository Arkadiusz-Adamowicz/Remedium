import { useState } from "react";
import { Link } from "react-router-dom";
import airports from "../../data/airports.js";
import tripTypes from "../../data/tripTypes.js";
import operators from "../../data/operators.js";
import attributes from "../../data/attributes.js";
import meals from "../../data/meals.js";
import nights from "../../data/nights.js";
import standards from "../../data/standards.js";
import destinations from "../../data/destinations.js";

const transports = ["Samolot", "Dojazd własny", "Autokar"];

export default function FlightSearch() {
  const [from, setFrom] = useState("Warszawa (WAW)");
  const [to, setTo] = useState("Paryż (CDG)");
  const [departureDate, setDepartureDate] = useState("2025-05-12");
  const [returnDate, setReturnDate] = useState("2025-05-19");
  const [passengers, setPassengers] = useState("2 Dorosłych");

  const [tripType, setTripType] = useState("");
  const [operator, setOperator] = useState("");
  const [attribute, setAttribute] = useState("");
  const [standard, setStandard] = useState("");
  const [transport, setTransport] = useState("");
  const [destination, setDestination] = useState("");
  const [meal, setMeal] = useState("");
  const [night, setNight] = useState("");

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  return (
    <div className="mt-[34px] rounded-[14px] border border-white/10 bg-[#050b12]/92 p-4 shadow-2xl shadow-black/70 backdrop-blur-xl sm:p-[22px]">
      <div className="grid gap-3 lg:grid-cols-3">
        {/* MOBILE: 1 */}
        <div className="order-1 lg:order-1">
          <SelectBox
            label="Typ transportu"
            value={transport}
            onChange={setTransport}
            options={transports}
            placeholder="Typ transportu"
          />
        </div>

        {/* MOBILE: 2 */}
        <div className="order-2 lg:order-2">
          <SelectBox
            label="Cel podróży"
            value={destination}
            onChange={setDestination}
            options={destinations}
            placeholder="Cel podróży"
          />
        </div>

        {/* MOBILE: 3 */}
        <div className="order-3 lg:order-3">
          <SelectBox
            label="Podróż z"
            value={from}
            onChange={setFrom}
            options={airports}
            placeholder="Podróż z"
          />
        </div>

        {/* MOBILE: 4 */}
        <div className="order-4 grid grid-cols-2 gap-3 lg:order-4">
          <DateBox
            label="Data wyjazdu"
            value={departureDate}
            onChange={setDepartureDate}
          />

          <DateBox
            label="Data powrotu"
            value={returnDate}
            onChange={setReturnDate}
          />
        </div>

        {/* MOBILE: 5 */}
        <div className="order-5 lg:order-5">
          <SelectBox
            label="Pasażerowie"
            value={passengers}
            onChange={setPassengers}
            options={["1 Dorosły", "2 Dorosłych", "3 Dorosłych", "4 Dorosłych"]}
          />
        </div>

        {/* MOBILE: 6 */}
        <div className="order-6 lg:order-6">
          <SelectBox
            label="Wyżywienie"
            value={meal}
            onChange={setMeal}
            options={meals}
            placeholder="Wyżywienie"
          />
        </div>

        {/* MOBILE: 7 */}
        <div className="order-7 lg:order-7">
          <SelectBox
            label="Liczba nocy"
            value={night}
            onChange={setNight}
            options={nights}
            placeholder="Liczba nocy"
          />
        </div>

        {/* MOBILE: 8 */}
        <button
          type="button"
          onClick={() => setShowMoreFilters((prev) => !prev)}
          className="
            order-8
            flex h-[64px] items-center gap-3
            rounded-[12px]
            border border-cyan-300/10
            bg-cyan-300/10
            px-5
            text-[16px]
            font-black
            tracking-wide
            text-cyan-100
            transition duration-300
            hover:bg-cyan-300/20
            lg:order-8
          "
        >
          <span
            className={`transition duration-300 ${
              showMoreFilters ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>

          {showMoreFilters ? "Pokaż mniej" : "Więcej opcji"}
        </button>

        {/* MOBILE: 9 */}
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
          className="
            order-9
            flex h-[64px] items-center justify-center gap-3
            rounded-[12px]
            bg-gradient-to-r from-blue-600 to-cyan-500
            text-[16px]
            font-black
            tracking-wide
            text-white
            shadow-2xl shadow-blue-700/40
            transition duration-300
            hover:scale-[1.01]
            hover:from-blue-500
            hover:to-cyan-400
            lg:order-9
          "
        >
          Szukaj
        </Link>
      </div>

      {showMoreFilters && (
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
        </div>
      )}
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
          className="
            w-full cursor-pointer appearance-none
            rounded-md bg-[#07101a]
            pr-8
            text-[15px]
            font-black
            text-white
            outline-none
            [color-scheme:dark]
          "
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
        className="
          w-full cursor-pointer
          rounded-md bg-[#07101a]
          text-[15px]
          font-black
          text-white
          outline-none
          accent-blue-600
          [color-scheme:dark]
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
          [&::-webkit-calendar-picker-indicator]:rounded-md
          [&::-webkit-calendar-picker-indicator]:bg-blue-500
          [&::-webkit-calendar-picker-indicator]:p-[3px]
        "
      />
    </div>
  );
}
