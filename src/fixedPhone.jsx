import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Tv, Phone, ChevronRight } from "lucide-react";

const CATEGORY_TABS = [
  { id: "mobile", label: "Բջջային կապ", icon: Smartphone, href: "/sakagner/bjjayin-kap" },
  { id: "tv-komp", label: "Ինտերնետ և TV - ԿՈՄՊ", icon: Tv, href: "/sakagner/tvkomp" },
  { id: "tv-komb", label: "Ինտերնետ և TV - ԿՈՄԲ", icon: Tv, href: "/sakagner/internet-tv-komb" },
  { id: "fixed", label: "Ֆիքսված հեռախոսակապ", icon: Phone, href: "/sakagner/fixed-phone" },
];

const FIXED_PLANS = [
  {
    id: "nakhyntreli",
    title: "Նախընտրելի",
    subtitle: "Ֆիքսված հեռախոսակապ տան համար",
  },
  {
    id: "bazayin-1",
    title: "Բազային 1",
    subtitle: "Ֆիքսված հեռախոսակապ տան համար",
  },
  {
    id: "bazayin-2",
    title: "Բազային 2",
    subtitle: "Ֆիքսված հեռախոսակապ տան համար",
  },
  {
    id: "aylyntranqayin-1",
    title: "Այլընտրանքային 1",
    subtitle: "Ֆիքսված հեռախոսակապ տան համար",
  },
  {
    id: "aylyntranqayin-2",
    title: "Այլընտրանքային 2",
    subtitle: "Ֆիքսված հեռախոսակապ տան համար",
  },
  {
    id: "payphone",
    title: "Քարտֆոնային կապ",
    subtitle: "Հեռախոսային քարտեր քարտֆոնների",
  },
];

export default function FixedPhone() {
  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Баннер с красным реโทร-телефоном */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-[#dbeceb] overflow-hidden">
        <img
        src="https://www.telecomarmenia.am/images/advanced_slider/1/16509736514207.png"
        alt="Fixed Phone"
        className="w-full h-full object-cover"
    />
    </div>

      {/* Полоска категорий (Табы) */}
      <div className="max-w-5xl mx-auto -mt-10 relative z-10 px-4">
        <div className="bg-white shadow-md rounded-md flex flex-col sm:flex-row border border-slate-100">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === "fixed";
            return (
              <Link
                key={tab.id}
                to={tab.href}
                className={`flex-1 flex flex-col items-center justify-center gap-2 px-3 py-4 text-xs sm:text-sm border-b sm:border-b-0 sm:border-r last:border-r-0 border-slate-100 transition-colors ${
                  isActive
                    ? "border-b-2 sm:border-b-2 border-sky-400 text-slate-800 font-semibold"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {Icon && <Icon size={20} className={isActive ? "text-sky-500" : "text-slate-400"} />}
                <span className="text-center leading-tight">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-5xl mx-auto px-4 mt-6 text-xs sm:text-sm text-slate-400 flex items-center gap-2">
        <Link to="/" className="underline hover:text-slate-600">Գլխավոր</Link>
        <ChevronRight size={12} />
        <span className="underline hover:text-slate-600">Անհատներին</span>
        <ChevronRight size={12} />
        <span className="underline hover:text-slate-600">Սակագներ</span>
        <ChevronRight size={12} />
        <span className="text-slate-600 font-medium">Ֆիքսված հեռախոսակապ</span>
      </div>

      {/* Заголовок страницы */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#002d3f]">
          Ֆիքսված հեռախոսակապ
        </h1>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {FIXED_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-[#f4f6f8] rounded-xl p-6 flex flex-col justify-between min-h-[210px] transition-all hover:shadow-sm"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-700 mb-4 leading-tight">
                  {plan.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mt-6">
                <button className="border border-[#f1534f] text-[#f1534f] hover:bg-[#f1534f] hover:text-white transition-colors rounded-full px-5 py-1.5 text-xs font-semibold">
                  Մանրամասն
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}