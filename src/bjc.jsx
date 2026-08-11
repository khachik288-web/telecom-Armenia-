import React, { useState } from "react";

const NETWORKS = ["5G", "4G", "3G"];

const LEGEND = [
  { label: "Գերազանց ծածկույթ", color: "bg-red-600" },
  { label: "Լավ ծածկույթ", color: "bg-red-500" },
  { label: "Թույլ ծածկույթ", color: "bg-red-300" },
];

export default function Bjc() {
  const [activeNetwork, setActiveNetwork] = useState("5G");
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 px-4 sm:px-8 pt-6 mb-4">
        Բջջային ցանցի ծածկույթ
      </h1>

      {/* Табы 5G / 4G / 3G */}
      <div className="flex gap-8 px-4 sm:px-8 border-b border-slate-200">
        {NETWORKS.map((net) => {
          const isActive = net === activeNetwork;
          return (
            <button
              key={net}
              onClick={() => setActiveNetwork(net)}
              className={`pb-3 text-sm sm:text-base font-medium relative ${
                isActive ? "text-slate-800" : "text-slate-400"
              }`}
            >
              {net}
              {isActive && (
                <span className="absolute left-0 -bottom-px w-full h-0.5 bg-sky-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Карта */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[720px]">
        <iframe
          title="Coverage Map"
          src="https://yandex.com/map-widget/v1/?um=constructor%3A&z=7&ll=45.0382%2C40.2891&l=map"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
        />

        {/* Поиск — поверх карты, слева сверху */}
        <div className="absolute top-4 left-4 flex gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Հասցե կամ օբյեկտ"
            className="w-56 sm:w-64 bg-white border border-slate-200 rounded-md px-3 py-2 text-sm outline-none shadow-sm"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-800 text-sm font-medium px-4 py-2 rounded-md shadow-sm">
            Գտնել
          </button>
        </div>

        {/* Легенда — поверх карты, справа сверху */}
        <div className="hidden sm:flex absolute top-4 right-4 flex-col gap-3 bg-white rounded-lg shadow-lg px-5 py-4">
          {LEGEND.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.color}`} />
              <span className="text-sm text-slate-700 leading-tight max-w-[140px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}