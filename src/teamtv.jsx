import React, { useState } from "react";
import { Star, Apple, Play, Check } from "lucide-react";

const FEATURES = [
  "Ժամանակակից TV միշտ քեզ հետ",
  "Մինչև 200 ալիք",
  "Ավելի քան 5000 ֆիլմ տեսադարանում",
  "Դիտում 5 սարքավորումներով",
  "Մինչև 7 օր catch-up",
  "Հավելյալ ալիքների և փաթեթների գնում",
  "YouTube հեռուստացույցով",
  "EPG - Հաղորդումների էլեկտրոնային ցանկ",
];

const SCREENSHOTS = {
  ios: [
    "https://www.telecomarmenia.am/images/team_apps/1/17485849137763.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138256.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138582.jpeg",
  ],
  android: [
    "https://www.telecomarmenia.am/images/team_apps/1/17485849138905.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849139164.jpeg",
    "https://www.telecomarmenia.am/images/team_apps/1/17485849139412.jpeg",
  ],
};

function Stars({ value }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          className={n <= Math.round(value) ? "fill-amber-400 text-amber-400" : "text-slate-300"}
        />
      ))}
      <span className="text-sm text-slate-500 ml-1">{value}</span>
    </div>
  );
}

export default function TeamTVPage() {
  const [platform, setPlatform] = useState("ios");

  return (
    <div className="bg-white min-h-screen">

      <div className="bg-[#0b3a5b] text-white text-xs px-8 py-1.5 flex justify-end gap-4">
        <span>Անձնական</span>
        <span>Բիզնես</span>
      </div>
      <header className="flex items-center justify-between px-8 py-3 border-b">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-[#0b3a5b]">team</span>
          <span className="text-[10px] text-slate-400">TELECOM ARMENIA</span>
        </div>
        <nav className="flex gap-6 text-sm text-slate-600">
          <span>Բջջային կապ</span>
          <span>Հեռուստատեսություն</span>
          <span>Ինտերնետ</span>
          <span>Ֆիքսված</span>
          <span>Սարքեր</span>
          <span>Business</span>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-8">

        <div className="text-xs text-slate-400 mb-4">
          Գլխավոր <span className="mx-1">/</span> Team հավելվածներ
        </div>

        <h1 className="text-2xl font-bold text-[#0b3a5b] mb-6">TeamTV</h1>

        <div className="flex items-start gap-6 mb-8">
          <div className="w-28 h-28 rounded-2xl bg-[#0b3a5b] flex flex-col items-center justify-center text-white relative shrink-0">
            <span className="text-xl font-semibold leading-tight">team</span>
            <span className="text-2xl font-bold leading-tight">TV</span>
            <span className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-red-500" />
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 w-fit">
              <Apple size={18} />
              <div className="text-[10px] leading-tight">
                <div>Download on the</div>
                <div className="text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-black text-white rounded-lg px-3 py-1.5 w-fit">
              <Play size={16} />
              <div className="text-[10px] leading-tight">
                <div>GET IT ON</div>
                <div className="text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-3">
            <Stars value={3.5} />
            <Stars value={3.6} />
          </div>
        </div>

        <div className="flex gap-6 border-b mb-6">
          {["ios", "android"].map((p) => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`pb-2 text-sm capitalize border-b-2 -mb-px ${
                platform === p
                  ? "border-sky-400 text-sky-500 font-medium"
                  : "border-transparent text-slate-400"
              }`}
            >
              {p === "ios" ? "iOS" : "Android"}
            </button>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
            {SCREENSHOTS[platform].map((src, i) => (
                <img
                key={src}
                src={src}
                alt={`screenshot ${i + 1}`}
                className="w-40 h-72 rounded-2xl object-cover shrink-0"
                />
            ))}
        </div>

        <div className="mb-10">
          <h2 className="text-base font-semibold text-slate-700 mb-3">
            {FEATURES[0]}
          </h2>
          <ul className="space-y-2">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <Check size={14} className="text-sky-400 mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-lg font-bold text-red-600 mb-4">Այլ հավելվածներ</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="w-full h-32 rounded-xl bg-[#0b3a5b] flex items-center px-4 mb-3">
              <span className="text-white text-2xl font-bold">
                team<span className="align-super text-xs">™</span>
              </span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">My Team</h3>
            <p className="text-sm text-slate-500 mb-3">
              My Team հավելվածի միջոցով Դուք կարող եք՝ ստուգել հաշվեկշիռը,
              ակտիվացնել ավտոմատ վճարումներ, կառավարել սակագնային փաթեթները։
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg">
              Միանալ
            </button>
          </div>

          <div>
            <div className="w-full h-32 rounded-xl bg-teal-500 flex items-center px-4 mb-3">
              <span className="text-white text-2xl font-bold">Team Energy</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Team Energy</h3>
            <p className="text-sm text-slate-500 mb-3">
              Team Energy հավելվածի միջոցով կարող եք գտնել մոտակա էլեկտրական
              լիցքավորման կայանը, հետևելով քայլերի հաջորդականությանը՝
              հեշտությամբ լիցքավորել մեքենան և կատարել վճարումը։
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg">
              Միանալ
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}