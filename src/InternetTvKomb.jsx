import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Smartphone, Tv, ChevronDown, ChevronUp, ChevronRight, Phone, Wifi } from "lucide-react";

const CATEGORY_TABS = [
  { id: "mobile", label: "Բջջային կապ", icon: Smartphone, href: "/sakagner/bjjayin-kap" },
  { id: "tv-komp", label: "Ինտերնետ և TV - ԿՈՄՊ", icon: Tv, href: "/sakagner/tvkomp" },
  { id: "tv-komb", label: "Ինտերնետ և TV - ԿՈՄԲ", icon: Tv, href: "/sakagner/internet-tv-komb" },
  { id: "fixed", label: "Ֆիքսված հեռախոսակապ", icon: Phone, href: "/sakagner/fixed-phone" },
];

const PLANS = [
  { id: "komb-2", label: "ԿՈՄԲ 2: Երկուսը մեկում փաթեթ" },
  { id: "komb-3", label: "ԿՈՄԲ 3: Երեքը մեկում փաթեթ" },
  {
    id: "komb-4",
    label: "ԿՈՄԲ 4: Չորսը մեկում փաթեթ",
    subItems: [
      { id: "komb-4900", label: "ԿՈՄԲ 4 9900" },
      { id: "komb-4-marz", label: "ԿՈՄԲ 4 Մարզային 7990" },
    ],
  },
];

export default function InternetTvKomb() {
  const [selectedSubPlan, setSelectedSubPlan] = useState("komb-4900");
  const [activeTab, setActiveTab] = useState("included"); // 'included' | 'teamtv' | 'tariffs' | 'terms' | 'bonus'

  return (
    
    <div className="bg-white min-h-screen">
      {/* Баннер с красным реโทร-телефоном */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-[#dbeceb] overflow-hidden">
        <img
        src="https://www.telecomarmenia.am/images/advanced_slider/1/16509736514207.png"
        alt="Fixed Phone"
        className="w-full h-full object-cover"
        />
        </div>
      {/* Категории сверху */}
      <div className="max-w-6xl mx-auto pt-6 px-4">
        <div className="bg-white shadow-md rounded-lg flex flex-col sm:flex-row border border-slate-100 overflow-hidden">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === "tv-komb";
            return (
              <Link
                key={tab.id}
                to={tab.href}
                className={`flex-1 flex flex-col items-center justify-center gap-2 px-4 py-4 text-xs font-medium border-b sm:border-b-0 sm:border-r last:border-r-0 border-slate-100 ${
                  isActive
                    ? "border-b-2 sm:border-b-2 border-sky-400 text-slate-800 font-semibold"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {Icon && <Icon size={20} />}
                <span className="text-center">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mt-6 text-xs text-slate-400 flex items-center gap-1.5">
        <Link to="/" className="underline hover:text-slate-600">Գլխավոր</Link>
        <ChevronRight size={10} />
        <span className="underline cursor-pointer hover:text-slate-600">Անհատներին</span>
        <ChevronRight size={10} />
        <span className="underline cursor-pointer hover:text-slate-600">Սակագներ</span>
        <ChevronRight size={10} />
        <span className="text-slate-600 font-medium">Ինտերնետ և TV - ԿՈՄԲ</span>
      </div>

      {/* Основной контент */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Левая колонка — Аккордеон выбора пакета */}
        <div className="w-full md:w-64 shrink-0">
          <p className="text-slate-800 font-bold text-sm mb-3">Ընտրիր քո փաթեթը</p>
          <div className="flex flex-col gap-1 text-xs">
            {PLANS.map((plan) => (
              <div key={plan.id} className="bg-slate-50 rounded border border-slate-100 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2.5 text-slate-700 font-medium">
                  <span>{plan.label}</span>
                  <ChevronDown size={14} className="text-slate-400" />
                </div>
                {plan.subItems && (
                  <div className="bg-slate-100/60 py-1">
                    {plan.subItems.map((sub) => {
                      const isSelected = selectedSubPlan === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => setSelectedSubPlan(sub.id)}
                          className={`w-full text-left px-5 py-2 text-xs font-semibold transition-colors ${
                            isSelected
                              ? "bg-sky-300 text-slate-900"
                              : "text-slate-600 hover:bg-slate-200/50"
                          }`}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Правая колонка — Детали тарифа */}
        <div className="flex-1">
          {/* Заголовок и цена */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">ԿՈՄԲՈ 4 9900</h1>
            <div className="mt-3 text-xs text-slate-400 space-y-1">
              <p>Ամսական վճարը 9900 դրամ է:</p>
              <p>Զեղչված արժեք՝ 7425 դրամ: Զեղչը գործում է 16.07.2026թ- 16.10.2026թ. միանալու դեպքում:</p>
            </div>
          </div>

          {/* Բջջային ներառումներ */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-slate-800 mb-5">Բջջային ներառումներ</h2>
            
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <span className="bg-[#e8615a] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Be Free</span>
                  <span className="font-medium text-slate-800">Be Free 5000</span>
                </div>
                <span className="font-bold text-slate-800 text-base">5,000</span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-400" />
                  <span>Րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*</span>
                </div>
                <span className="font-bold text-slate-800 text-base">3,000 <span className="text-xs font-normal text-slate-400">րոպե</span></span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 border border-slate-300 rounded px-1">SMS</span>
                  <span>SMS դեպի ՀՀ բոլոր ցանցեր</span>
                </div>
                <span className="font-bold text-slate-800 text-base">500 <span className="text-xs font-normal text-slate-400">SMS</span></span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold border border-slate-400 rounded px-1 text-slate-600">4G</span>
                  <span>Բջջային ինտերնետ</span>
                </div>
                <span className="font-bold text-slate-800 text-base">Անսահմ.</span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">✈</span>
                  <span>Ինտերնետ ռոումինգում</span>
                </div>
                <span className="font-bold text-slate-800 text-base">200 <span className="text-xs font-normal text-slate-400">ՄԲ</span></span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">📱</span>
                  <span>3 Be Free հատուկ պայմաններով</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ֆիքսված ներառումներ */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 mb-5">Ֆիքսված ներառումներ</h2>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <Wifi size={18} className="text-slate-400" />
                  <span>Ֆիքսված ինտերնետ (մինչև)</span>
                </div>
                <span className="font-bold text-slate-800 text-base">100 <span className="text-xs font-normal text-slate-400">Մբիթ/վրկ</span></span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-sky-500 text-xs">TeamTV</span>
                  <span>TeamTV</span>
                </div>
                <span className="font-bold text-slate-800 text-base">150 <span className="text-xs font-normal text-slate-400">ալիք</span></span>
              </div>

              <div className="flex items-center justify-between py-1 border-t border-slate-50 pt-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-slate-400" />
                  <span>Րոպեներ</span>
                </div>
                <span className="font-bold text-slate-800 text-base">180 <span className="text-xs font-normal text-slate-400">րոպե</span></span>
              </div>
            </div>
          </div>

          {/* Кнопка "Միանալ" */}
          <div className="my-8">
            <button className="bg-[#f1534f] hover:bg-[#e0433f] text-white font-bold py-2.5 px-12 rounded-full text-sm transition-all shadow-md">
              Միանալ
            </button>
          </div>

          {/* Нижние табы */}
          <div className="mt-12 border-b border-slate-200 flex flex-wrap gap-6 text-xs font-semibold text-slate-600">
            <button
              onClick={() => setActiveTab("included")}
              className={`pb-3 ${
                activeTab === "included" ? "text-slate-900 border-b-2 border-sky-400" : "hover:text-slate-900"
              }`}
            >
              Փաթեթում ներառված է
            </button>
            <button
              onClick={() => setActiveTab("teamtv")}
              className={`pb-3 ${
                activeTab === "teamtv" ? "text-slate-900 border-b-2 border-sky-400" : "hover:text-slate-900"
              }`}
            >
              TeamTV
            </button>
            <button
              onClick={() => setActiveTab("tariffs")}
              className={`pb-3 ${
                activeTab === "tariffs" ? "text-slate-900 border-b-2 border-sky-400" : "hover:text-slate-900"
              }`}
            >
              Սակագներ
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`pb-3 ${
                activeTab === "terms" ? "text-slate-900 border-b-2 border-sky-400" : "hover:text-slate-900"
              }`}
            >
              Պայմաններ
            </button>
            <button
              onClick={() => setActiveTab("bonus")}
              className={`pb-3 ${
                activeTab === "bonus" ? "text-slate-900 border-b-2 border-sky-400" : "hover:text-slate-900"
              }`}
            >
              Team Բոնուս
            </button>
          </div>

          {/* Контент нижнего таба */}
          <div className="py-6 space-y-3 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">📶</span>
              <span>Wi-Fi սարք</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">📺</span>
              <span>TV Box</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">📱</span>
              <span>3 Be Free հատուկ պայմաններով</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}