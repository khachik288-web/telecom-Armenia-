import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaMobileAlt, FaTv, FaLaptop,
  FaChevronDown, FaChevronUp,
} from 'react-icons/fa';

/* ================= ДАННЫЕ ПАКЕТОВ ================= */

const TABS = [
  { key: 'smartphone', label: 'Սմարթֆոնի համար', icon: <FaMobileAlt /> },
  { key: 'home-komp', label: 'Տան համար - ԿՈՄՊ', icon: <FaTv /> },
  { key: 'home-komb', label: 'Տան համար - ԿՈՄԲ', icon: <FaTv /> },
  { key: 'pc-tablet', label: 'Համակարգչի/պլանշետի համար', icon: <FaLaptop /> },
  { key: 'team5g', label: 'Team 5G', icon: <span className="text-[10px] font-black border border-current rounded px-1 leading-tight">5G</span> },
];

const UNLIMITED_APPS = [
  { title: 'Video Unlimit', desc: 'Միացրու և վայելիր անսահմանափակ տեսանյութերի ժամանցը' },
  { title: 'Music Unlimit', desc: 'Միացրու և վայելիր անսահմանափակ երաժշտության հեռարձակումը' },
  { title: 'Social Unlimit', desc: 'Միացրու և վայելիր անսահմանափակ սոցիալական ցանցերը' },
  { title: 'Messenger Unlimit', desc: 'Միացրու և վայելիր անսահմանափակ մեսենջերները' },
];

const GIGA_PACKAGES = [
  { title: 'Giga 1+19 ԳԲ', desc: 'Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար' },
  { title: 'Giga 2+19 ԳԲ', desc: 'Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար' },
  { title: 'Giga 5+19 ԳԲ', desc: 'Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար' },
  { title: 'Giga 10 ԳԲ', desc: 'Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար' },
  { title: 'Giga 15 ԳԲ', desc: 'Գերարագ ինտերնետ փաթեթ սմարթֆոնի համար' },
];

const MEGA_PACKAGES = [
  { title: 'Mega 300+', desc: 'Օրական Ինտերնետ սմարթֆոնի համար. մնացորդն այլևս չի գործածում' },
  { title: 'Mega 500+', desc: 'Օրական Ինտերնետ սմարթֆոնի համար. մնացորդն այլևս չի գործածում' },
  { title: 'Mega 300', desc: 'Օրական Ինտերնետ սմարթֆոնի համար' },
  { title: 'Mega 500', desc: 'Օրական Ինտերնետ սմարթֆոնի համար' },
];

const ZGB_PACKAGES = [
  { title: '«ЗГБ»', desc: 'Ինտերնետ փաթեթ «ՄՆԾ» և «Be Free» կանխավճարային սակագնային փաթեթների...' },
];

/* ================= МЕЛКИЕ КОМПОНЕНТЫ ================= */

function Section({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-slate-200 pb-8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
      >
        <h2 className="text-lg sm:text-2xl font-bold text-[#00293c] group-hover:text-[#f1534f] transition-colors duration-200">
          {title}
        </h2>
        <span className="shrink-0 text-slate-400 group-hover:text-[#f1534f] transition-colors duration-200">
          {isOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </span>
      </button>

      {isOpen && <div className="mt-6">{children}</div>}
    </div>
  );
}

function PackageCard({ title, desc }) {
  return (
    <div className="bg-[#f5f7f8] rounded-lg p-6 flex flex-col justify-between min-h-[220px] hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div>
        <h3 className="font-bold text-[#00293c] text-base mb-3">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
      <button className="mt-6 self-start border border-[#f1534f] text-[#f1534f] rounded-full px-6 py-2 text-xs sm:text-sm font-semibold hover:bg-[#f1534f] hover:text-white transition-colors duration-200 cursor-pointer">
        Մանրամասն
      </button>
    </div>
  );
}

/* ================= СТРАНИЦА ================= */

export default function InternetSmartphone() {
  const [activeTab, setActiveTab] = useState('smartphone');
  const [billingType, setBillingType] = useState('prepaid');
  const [openSections, setOpenSections] = useState({
    unlimited: true,
    giga: true,
    mega: true,
    zgb: true,
  });

  const navigate = useNavigate();

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-white min-h-screen">
      {/* ============ HERO БАННЕР СВЕРХУ ============ */}
      <div className="relative w-full h-[260px] sm:h-[320px] bg-[#001d2a] overflow-hidden flex items-center justify-center">
        <img
          src="https://www.telecomarmenia.am/images/advanced_slider/2/16843232049811.jpeg"
          alt="Banner"
          className="w-full h-full object-cover opacity-90"
          onError={(e) => {
            // Если ссылка сменится, останется красивый тёмный фон сайта
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001d2a]/50 to-transparent pointer-events-none" />
      </div>

      {/* ============ ОГРАНИЧИВАЮЩИЙ КОНТЕЙНЕР ДЛЯ ЦЕНТРИРОВАНИЯ ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* ============ ВКЛАДКИ (TABS) ============ */}
        <div className="relative -mt-12 sm:-mt-16 z-20 bg-white rounded-xl shadow-md border border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-slate-100">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                if (tab.key === 'home-komp') {
                  navigate('/sakagner/tvkomp');
                } else if (tab.key === 'home-komb') {
                  navigate('/sakagner/internet-tv-komb');
                } else {
                  setActiveTab(tab.key);
                }
              }}
              className={`flex flex-col items-center justify-center gap-2 px-2 sm:px-3 py-4 sm:py-5 text-[11px] sm:text-sm font-medium transition-colors duration-200 hover:text-[#f1534f] hover:bg-slate-50 cursor-pointer ${
                activeTab === tab.key
                  ? 'border-b-4 border-[#f1534f] text-[#f1534f]'
                  : 'border-b-4 border-transparent text-slate-500'
              }`}
            >
              <span className="text-lg sm:text-xl">{tab.icon}</span>
              <span className="text-center leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ============ BREADCRUMB ============ */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mt-6">
          <a href="/" className="hover:text-[#f1534f] transition-colors duration-200">Գլխավոր</a>
          <span>&rsaquo;</span>
          <span className="hover:text-[#f1534f] transition-colors duration-200">Ինտերնետ</span>
          <span>&rsaquo;</span>
          <span>Ինտերնետ</span>
          <span>&rsaquo;</span>
          <span className="text-[#00293c] font-semibold">Սմարթֆոնի համար</span>
        </div>

        {/* ============ ЗАГОЛОВОК ============ */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#00293c] mt-6 mb-2">
          Սմարթֆոնի համար
        </h1>

        {activeTab !== 'smartphone' ? (
          <div className="py-24 text-center text-slate-400 text-sm sm:text-base">
            Այս բաժինը շուտով հասանելի կլինի
          </div>
        ) : (
          <>
            {/* ============ РЕЖИМ ОПЛАТЫ ============ */}
            <div className="flex gap-6 sm:gap-8 border-b border-slate-200 mt-4">
              <button
                onClick={() => setBillingType('prepaid')}
                className={`pb-3 text-sm sm:text-base border-b-2 transition-colors duration-200 hover:text-[#00293c] cursor-pointer ${
                  billingType === 'prepaid'
                    ? 'border-[#00293c] text-[#00293c] font-semibold'
                    : 'border-transparent text-slate-400 font-medium'
                }`}
              >
                Կանխավճարային
              </button>
              <button
                onClick={() => setBillingType('postpaid')}
                className={`pb-3 text-sm sm:text-base border-b-2 transition-colors duration-200 hover:text-[#00293c] cursor-pointer ${
                  billingType === 'postpaid'
                    ? 'border-[#00293c] text-[#00293c] font-semibold'
                    : 'border-transparent text-slate-400 font-medium'
                }`}
              >
                Հետվճարային
              </button>
            </div>

            {/* ============ СПИСОК ПАКЕТОВ ============ */}
            <div className="py-8 sm:py-10 space-y-8 sm:space-y-10">
              <Section
                title="Անսահմանափակ հավելվածներ"
                isOpen={openSections.unlimited}
                onToggle={() => toggleSection('unlimited')}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {UNLIMITED_APPS.map((pkg) => (
                    <PackageCard key={pkg.title} {...pkg} />
                  ))}
                </div>
              </Section>

              <Section
                title="Giga"
                isOpen={openSections.giga}
                onToggle={() => toggleSection('giga')}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {GIGA_PACKAGES.map((pkg) => (
                    <PackageCard key={pkg.title} {...pkg} />
                  ))}
                </div>
              </Section>

              <Section
                title="Mega"
                isOpen={openSections.mega}
                onToggle={() => toggleSection('mega')}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {MEGA_PACKAGES.map((pkg) => (
                    <PackageCard key={pkg.title} {...pkg} />
                  ))}
                </div>
              </Section>

              <Section
                title="Փաթեթ «ЗГБ» = 500Ֆ"
                isOpen={openSections.zgb}
                onToggle={() => toggleSection('zgb')}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ZGB_PACKAGES.map((pkg) => (
                    <PackageCard key={pkg.title} {...pkg} />
                  ))}
                </div>
              </Section>
            </div>
          </>
        )}
      </div>
    </div>
  );
}