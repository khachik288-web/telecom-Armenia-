import React, { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

const LOCATIONS = [
  {
    address: "Գայի պ. 16, ք. Երևան",
    hours: "Երկուշաբթիից կիրակի՝ 10:00 - 22:00։",
  },
  {
    address: "Վ. Ավանեսովի փող. 8/1-2, Երևան",
    hours: "Երկուշաբթիից ուրբաթ՝ 9:00-ից 18:00, հանգստյան օրեր՝ շաբաթ և կիրակի։",
  },
  {
    address: "Սաֆարյան փող. 5, ք. Երևան",
    hours: "Երկուշաբթիից ուրբաթ՝ 09:00-19:00, շաբաթ՝ 09:00-18:00։; Հանգստյան օր՝ կիրակի։",
  },
  {
    address: "Տիգրան Մեծի պողոտա 71, տարածք 65-66, ք.Երևան",
    hours: "Երկուշաբթիից շաբաթ՝ 09:00-18:00, հանգստյան օր՝ կիրակի։",
  },
  {
    address: "Տիգրան Մեծ պող. 25/27, ք. Երևան",
    hours: "Երկուշաբթիից ուրբաթ՝ 09:00-20:00, շաբաթ՝ 09:00-18:00, կիրակի՝ 10:00-19:00։",
  },
  {
    address: "Խորենացի 26, ք. Երևան",
    hours: "Երկուշաբթիից շաբաթ՝ 9:00-18:00, Հանգստյան օրերը՝ շաբաթ և կիրակի։",
  },
  {
    address: "Բագրատունյաց փող. 18, ք. Երևան",
    hours: "Երկուշաբթիից ուրբաթ՝ 09:00-18:00։",
  },
];

export default function Vacharq() {
  const [search, setSearch] = useState("");

  const filtered = LOCATIONS.filter((loc) =>
    loc.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
        Վաճառքի և սպասարկման կենտրոններ
      </h1>

      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[720px] rounded-lg overflow-hidden border border-slate-200">
        {/* Карта — реальная встройка Яндекс.Карт */}
        <iframe
          title="Yandex Map"
          src="https://yandex.com/map-widget/v1/?um=constructor%3A&z=13&ll=44.5152%2C40.1872&l=map"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
        />

        {/* Панель фильтров + список — поверх карты, справа */}
        <div className="hidden md:flex absolute top-4 right-4 w-[380px] max-h-[calc(100%-2rem)] bg-white rounded-xl shadow-xl flex-col overflow-hidden">
          <div className="p-4 flex flex-col gap-3 border-b border-slate-100">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs text-slate-400 mb-1">Մարզ</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 pr-8">
                    <option>Երևան</option>
                    <option>Արմավիր</option>
                    <option>Գյումրի</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-xs text-slate-400 mb-1">Համայնք</label>
                <div className="relative">
                  <select className="w-full appearance-none border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 pr-8">
                    <option>Ընտրեք համայնքը</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" defaultChecked className="accent-sky-500 w-4 h-4" />
              Աշխատում է միևնշ ուշ
            </label>

            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Որոնել"
                className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:border-sky-400"
              />
            </div>
          </div>

          {/* Список адресов */}
          <div className="flex-1 overflow-y-auto">
            {filtered.map((loc, i) => (
              <div
                key={i}
                className="flex gap-2 px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer"
              >
                <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-slate-800">{loc.address}</p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {loc.hours}
                  </p>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-slate-400 text-sm text-center mt-8">
                Ոչինչ չի գտնվել
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Список адресов на мобильном — отдельным блоком под картой */}
      <div className="md:hidden mt-4 flex flex-col gap-2">
        <div className="relative mb-2">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Որոնել"
            className="w-full border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:border-sky-400"
          />
        </div>

        {filtered.map((loc, i) => (
          <div
            key={i}
            className="flex gap-2 p-3 bg-white border border-slate-100 rounded-lg"
          >
            <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-800">{loc.address}</p>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {loc.hours}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}