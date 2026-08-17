import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Smartphone, Tv, ChevronDown, ChevronUp, ChevronRight, Phone } from "lucide-react";

const CATEGORY_TABS = [
  { id: "mobile", label: "Բջջային կապ", icon: Smartphone, href: "/sakagner/bjjayin-kap" },
  { id: "tv-komp", label: "Ինտերնետ և TV - ԿՈՄՊ", icon: Tv, href: "/sakagner/tvkomp" },
  { id: "tv-komb", label: "Ինտերնետ և TV - ԿՈՄԲ", icon: Tv, href: "/sakagner/internet-tv-komb" },
  { id: "fixed", label: "Ֆիքսված հեռախոսակապ", icon: Phone, href: "/sakagner/fixed-phone" },
];

const PLANS = [
  { id: "be-free-unlimit", label: "Be Free Unlimit" },
  { id: "be-free", label: "Be Free" },
  { id: "be-free-marz", label: "Be Free Մարզային" },
  { id: "be-free-komp-komb", label: "Be Free ԿՈՄՊ/ԿՈՄԲ-ի համար" },
];

const PLAN_DETAILS = {
  "be-free-unlimit": {
    price: "3 500",
    features: ["Անսահմանափակ ինտերնետ", "Անսահմանափակ ելք զանգեր Team-ի ցանցում"],
  },
  "be-free": {
    price: "2 500",
    features: ["30 ԳԲ ինտերնետ", "500 րոպե զանգեր"],
  },
  "be-free-marz": {
    price: "2 000",
    features: ["20 ԳԲ ինտերնետ", "300 րոպե զանգեր"],
  },
  "be-free-komp-komb": {
    price: "1 800",
    features: ["10 ԳԲ ինտերնետ", "200 րոպե զանգեր"],
  },
};

export default function BjjayinKap() {
  const [payType, setPayType] = useState("postpaid"); // prepaid | postpaid
  const [activePlan, setActivePlan] = useState("be-free-unlimit");
  const [openPlan, setOpenPlan] = useState("be-free-unlimit");

  return (
    <div>
      {/* Баннер */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-[#dbeceb] overflow-hidden">
        <img
        src="https://www.telecomarmenia.am/images/advanced_slider/1/16509736514207.png"
        alt="Fixed Phone"
        className="w-full h-full object-cover"
    />
    </div>

      {/* Полоска категорий — поверх баннера, наплывает вниз */}
      <div className="max-w-5xl mx-auto -mt-12 relative z-10 px-4">
        <div className="bg-white shadow-lg rounded-md flex flex-col sm:flex-row">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === "mobile";
            return (
              <Link
                key={tab.id}
                to={tab.href}
                className={`flex-1 flex flex-col items-center gap-2 px-4 py-5 text-sm border-b sm:border-b-0 sm:border-r last:border-r-0 border-slate-100 ${
                  isActive ? "border-b-2 sm:border-b-2 border-sky-400 text-slate-800 font-medium" : "text-slate-500"
                }`}
              >
                {Icon && <Icon size={22} />}
                <span className="text-center">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 mt-6 text-sm text-slate-500 flex items-center gap-2">
        <Link to="/" className="underline">Գլխավոր</Link>
        <ChevronRight size={12} />
        <span className="underline">Անհատներին</span>
        <ChevronRight size={12} />
        <span className="underline">Սակագներ</span>
        <ChevronRight size={12} />
        <span className="text-slate-700 font-medium">Բջջային կապ</span>
      </div>

      {/* Кանխավճարային / Հետվճարային */}
      <div className="max-w-5xl mx-auto px-4 mt-4 flex gap-6 border-b border-slate-200">
        <button
          onClick={() => setPayType("prepaid")}
          className={`pb-3 text-sm font-medium relative ${
            payType === "prepaid" ? "text-slate-800" : "text-slate-400"
          }`}
        >
          Կանխավճարային
          {payType === "prepaid" && (
            <span className="absolute left-0 -bottom-px w-full h-0.5 bg-sky-400" />
          )}
        </button>
        <button
          onClick={() => setPayType("postpaid")}
          className={`pb-3 text-sm font-medium relative ${
            payType === "postpaid" ? "text-slate-800" : "text-slate-400"
          }`}
        >
          Հետվճարային
          {payType === "postpaid" && (
            <span className="absolute left-0 -bottom-px w-full h-0.5 bg-sky-400" />
          )}
        </button>
      </div>

      {/* Основной контент — список слева + аккордеон справа */}
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Список тарифов */}
        <div className="w-full md:w-64 shrink-0">
          <p className="text-slate-800 font-semibold mb-3">Ընտրիր քո փաթեթը</p>
          <div className="flex flex-col gap-1">
            {PLANS.map((plan) => {
              const isActive = plan.id === activePlan;
              return (
                <button
                  key={plan.id}
                  onClick={() => {
                    setActivePlan(plan.id);
                    setOpenPlan(plan.id);
                  }}
                  className={`flex items-center justify-between text-left px-4 py-3 text-sm rounded-md ${
                    isActive
                      ? "bg-sky-400 text-slate-900 font-medium"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span>{plan.label}</span>
                  {isActive && <ChevronRight size={14} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Аккордеон с деталями тарифов */}
        <div className="flex-1">
          {PLANS.map((plan) => {
            const isOpen = plan.id === openPlan;
            const details = PLAN_DETAILS[plan.id];
            return (
              <div key={plan.id} className="border-b border-slate-200 py-4">
                <button
                  onClick={() => setOpenPlan(isOpen ? null : plan.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-xl sm:text-2xl font-bold text-slate-800">
                    {plan.label}
                  </span>
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {isOpen && (
                  <div className="pt-4">
                    <p className="text-3xl font-bold text-[#e8615a] mb-3">
                      {details.price} <span className="text-sm text-slate-400 font-normal">դրամ/ամիս</span>
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {details.features.map((f, i) => (
                        <li key={i} className="text-sm text-slate-600">
                          • {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}

          <p className="text-sm text-slate-500 mt-4">
            Արխիվային սակագնային և ինտերնետ{" "}
            <a href="#" className="text-sky-600 underline">փաթեթներ</a>
          </p>
        </div>
      </div>
    </div>
  );
}