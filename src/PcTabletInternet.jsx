import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaMobileAlt, FaTv, FaLaptop, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function PcTabletInternet() {
  const navigate = useNavigate();
  // Управляем табами подменю (Предоплата / Постоплата)
  const [paymentType, setPaymentType] = useState('postpaid'); // По умолчанию как на скрине
  // Управляем раскрытием секции Drive
  const [isDriveOpen, setIsDriveOpen] = useState(true);

  // Вкладки верхнего меню (как в других твоих компонентах)
  const TABS = [
    { key: 'smartphone', label: 'Սմարթֆոնի համար', icon: <FaMobileAlt />, path: '/internet/smartphone' },
    { key: 'home-komp', label: 'Տան համար - ԿՈՄՊ', icon: <FaTv />, path: '/sakagner/tvkomp' },
    { key: 'home-komb', label: 'Տան համար - ԿՈՄԲ', icon: <FaTv />, path: '/sakagner/internet-tv-komb' },
    { key: 'pc-tablet', label: 'Համակարգչի/պլանշետի համար', icon: <FaLaptop />, path: '/internet/pc-tablet' },
    { key: 'team-5g', label: 'Team 5G', icon: <div className="font-bold text-lg leading-none">5G</div>, path: '#team-5g' },
  ];

  const driveCards = [
    { title: 'Drive Maxi+ (200 ԳԲ)', desc: 'Գերարագ ինտերնետ նոութբուքերի, WiFi/USB...' },
    { title: 'Drive Maxi (140 ԳԲ)', desc: 'Գերարագ ինտերնետ նոութբուքերի, WiFi/USB...' },
    { title: 'Drive Midi (80 ԳԲ)', desc: 'Գերարագ ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար' },
    { title: 'Drive Mini (30 ԳԲ)', desc: 'Գերարագ ինտերնետ նոութբուքերի, WiFi/USB մոդեմների համար' },
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Верхний баннер (имитация того, что под хедером) */}
      <div className="w-full h-32 bg-[#e8e6e1] relative overflow-hidden">
         {/* Сюда можешь вставить свои красные/синие круги на фон, если нужно */}
         <div className="absolute top-[-50px] left-[-20px] w-64 h-64 border-[40px] border-[#f1534f] rounded-full opacity-90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ ВКЛАДКИ (TABS) ============ */}
        <div className="relative -mt-16 z-10 bg-white rounded-xl shadow-md border border-slate-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-slate-100">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center justify-center gap-2 px-2 py-5 text-sm font-medium border-b-4 transition-all duration-200 hover:text-[#f1534f] hover:bg-slate-50 cursor-pointer ${
                tab.key === 'pc-tablet'
                  ? 'border-[#f1534f] text-[#f1534f]'
                  : 'border-transparent text-slate-500'
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="text-center leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ============ ХЛЕБНЫЕ КРОШКИ ============ */}
        <div className="mt-6 text-sm text-slate-500 flex gap-2 items-center">
          <Link to="/" className="hover:text-[#f1534f] transition-colors">Գլխավոր</Link> &gt;
          <span>Անհատներին</span> &gt;
          <Link to="/internet/smartphone" className="hover:text-[#f1534f] transition-colors">Ինտերնետ</Link> &gt;
          <span className="text-slate-400">Համակարգչի/պլանշետի համար</span>
        </div>

        {/* ============ ПОДМЕНЮ (Тип оплаты) ============ */}
        <div className="flex gap-8 mt-6 border-b border-slate-200">
          <button 
            onClick={() => setPaymentType('prepaid')}
            className={`pb-3 font-semibold transition-colors ${paymentType === 'prepaid' ? 'border-b-2 border-[#00293c] text-[#00293c]' : 'text-slate-500 hover:text-[#00293c]'}`}
          >
            Կանխավճարային
          </button>
          <button 
            onClick={() => setPaymentType('postpaid')}
            className={`pb-3 font-semibold transition-colors ${paymentType === 'postpaid' ? 'border-b-2 border-[#00293c] text-[#00293c]' : 'text-slate-500 hover:text-[#00293c]'}`}
          >
            Հետվճարային
          </button>
        </div>

        {/* ============ ЗАГОЛОВОК ============ */}
        <h1 className="text-4xl font-bold text-[#00293c] mt-8 mb-10">
          Համակարգչի/պլանշետի համար
        </h1>

        {/* ============ СЕКЦИЯ DRIVE ============ */}
        <div className="border-t border-slate-200 pt-6">
          <button 
            onClick={() => setIsDriveOpen(!isDriveOpen)}
            className="w-full flex justify-between items-center text-2xl font-bold text-[#00293c] hover:text-[#f1534f] transition-colors"
          >
            Drive
            {isDriveOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </button>

          {isDriveOpen && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {driveCards.map((card, index) => (
                <div 
                  key={index} 
                  // Адаптив и Hover эффекты для карточки
                  className="bg-[#f2f4f5] rounded-2xl p-8 flex flex-col min-h-[320px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-slate-200"
                >
                  <h3 className="text-2xl font-bold text-[#62727b] mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#8b99a0] text-sm flex-grow">
                    {card.desc}
                  </p>
                  
                  {/* Кнопка с Hover эффектом */}
                  <button className="mt-6 px-6 py-2 border-2 border-[#f1534f] text-[#f1534f] font-bold rounded-full w-fit transition-colors duration-300 hover:bg-[#f1534f] hover:text-white">
                    Մանրամասն
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}