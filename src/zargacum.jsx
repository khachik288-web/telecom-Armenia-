import React, { useState } from "react";
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";

const TABS = [
  { id: "guarantee", label: "Կայուն գարգացման հանձնառություն" },
  { id: "report", label: "Ազգագիր" },
  { id: "requirements", label: "Կայուն գարգացման պարտատոմսերի հայեցակարգ" },
  { id: "evaluation", label: "Անկախ գնահատողի կարծիք" },
  { id: "model", label: "Ֆինանսական մոդել" },
  { id: "terms", label: "Թողարկման վերջնական պայմաններ" },
];

const SECTIONS = {
  guarantee: [
    { id: "commitment", title: "Հանձնառություն", links: ["Հանձնառություն"] },
  ],
  report: [
    { id: "report", title: "Ազգագիր", links: ["Ազգագիր"] },
  ],
  requirements: [
    {
      id: "requirements",
      title: "Կայուն զարգացման պարտատոմսերի հայեցակարգ",
      links: [
        "Կայուն զարգացման պարտատոմսերի հայեցակարգ",
        "Արտաքին Վերահսկող Ընկերության Եզրակացություն 2025",
      ],
    },
  ],
};

export default function Zargacum() {
  const [activeTab, setActiveTab] = useState("guarantee");
  const [openSection, setOpenSection] = useState("commitment");

  const currentSections = SECTIONS[activeTab] || [];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const sections = SECTIONS[tabId] || [];
    setOpenSection(sections[0]?.id ?? null);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6">
        Կայուն գարգացում
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-start">
        {/* Левая колонка с вкладками */}
        <nav className="flex flex-col w-full md:w-64 shrink-0 gap-1">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center justify-between text-left rounded-xl px-4 py-3 text-sm transition-colors ${
                  isActive
                    ? "bg-sky-400 text-slate-900 font-medium"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && <ChevronRight size={16} className="shrink-0 ml-2" />}
              </button>
            );
          })}
        </nav>

        {/* Правая часть с содержимым */}
        <div className="flex-1">
          {currentSections.length === 0 && (
            <p className="text-slate-400 text-sm">Բովանդակություն դեռ չկա</p>
          )}

          {currentSections.map((section) => {
            const isOpen = section.id === openSection;
            return (
              <div key={section.id} className="border-b border-slate-300 py-3">
                <button
                  onClick={() => setOpenSection(isOpen ? null : section.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg sm:text-xl font-semibold text-slate-800">
                    {section.title}
                  </span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isOpen && (
                  <div className="pt-4 flex flex-col gap-2">
                    {section.links.map((linkText, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-sky-600 underline hover:text-sky-700 text-sm sm:text-base"
                      >
                        {linkText}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}