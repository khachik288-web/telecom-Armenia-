import React, { useState } from 'react';

// Иконки для трех главных разделов
const BoxesIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1e293b] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1e293b] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" />
  </svg>
);

const PartnersIcon = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1e293b] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

// Конфигурация разделов
const tabsData = [
  {
    id: 'procurement',
    title: 'Գնումներ',
    icon: <BoxesIcon />,
    subItems: [
      { id: 1, label: 'Որակավորում' },
      { id: 2, label: 'Մատակարարի մրցակցային ընտրություն' },
      { id: 3, label: 'Դառնալ գործընկեր' },
    ],
  },
  {
    id: 'sales',
    title: 'Վաճառքներ',
    icon: <MegaphoneIcon />,
    subItems: [],
  },
  {
    id: 'partners',
    title: 'Գործընկերներ',
    icon: <PartnersIcon />,
    subItems: [],
  },
];

export default function Gorcynkerner() {
  const [activeTabId, setActiveTabId] = useState('procurement');
  const [activeSubItemId, setActiveSubItemId] = useState(1);

  const activeTab = tabsData.find((t) => t.id === activeTabId);

  return (
    <div className="w-full bg-white font-sans min-h-screen text-slate-800">
      {/* 1. Hero Banner с фоновым изображением */}
      <div className="relative w-full h-44 sm:h-64 md:h-80 lg:h-96 overflow-hidden bg-slate-200">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
          alt="Handshake Hero"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Легкий градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>

      {/* 2. Навигационные Табы (Наплывающие на баннер) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 -mt-10 sm:-mt-14 md:-mt-16">
        <div className="grid grid-cols-3 bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden">
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex flex-col items-center justify-center py-3 px-2 sm:py-5 sm:px-4 transition-all duration-200 cursor-pointer border-b-4 ${
                  isActive
                    ? 'border-[#73c7cb] bg-slate-50/50 font-bold'
                    : 'border-transparent bg-white hover:bg-slate-50 text-slate-600'
                }`}
              >
                {tab.icon}
                <span className="text-xs sm:text-sm md:text-base font-extrabold text-[#1f2937] tracking-tight text-center">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Основная контентная область */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-16">
        {/* Хлебные крошки (Breadcrumbs) */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 sm:mb-6">
          <span className="hover:underline cursor-pointer">Գլխավոր</span>
          <span>&gt;</span>
          <span className="text-slate-600">{activeTab.title}</span>
        </nav>

        {/* Динамический заголовок страницы */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1f2937] mb-6 sm:mb-8">
          {activeTab.title}
        </h1>

        {/* Боковое/Внутреннее меню (показывается при наличии subItems) */}
        {activeTab.subItems.length > 0 && (
          <div className="w-full sm:w-72 md:w-80 flex flex-col gap-1 rounded-md overflow-hidden bg-[#f5f6f8] p-1">
            {activeTab.subItems.map((item) => {
              const isSelected = item.id === activeSubItemId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSubItemId(item.id)}
                  className={`w-full text-left px-4 py-3 text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center justify-between rounded ${
                    isSelected
                      ? 'bg-[#73c7cb] text-slate-900 font-bold shadow-sm'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {isSelected && (
                    <span className="text-slate-800 text-xs font-bold">►</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}