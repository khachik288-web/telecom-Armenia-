import React, { useState } from "react";
import { FileText, ChevronUp, ChevronDown } from "lucide-react";

// Карточка PDF — принимает только размер и текст, сама рисует иконку + hover
function PdfCard({ title, size = "md" }) {
  const sizeStyles = {
    sm: "p-4 gap-3",
    md: "p-6 gap-4",
    lg: "p-8 gap-5",
  };

  return (
    <a
      href="#"
      className={`flex items-start bg-slate-50 rounded-md border border-transparent hover:border-sky-200 hover:bg-sky-50/50 hover:shadow-md transition-all duration-200 cursor-pointer ${sizeStyles[size]}`}
    >
      <div className="shrink-0 relative">
        <FileText size={44} className="text-slate-300" strokeWidth={1.5} />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-slate-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
          PDF
        </span>
      </div>
      <p className="text-sm text-[#00293c] font-semibold leading-relaxed mt-1">
        {title}
      </p>
    </a>
  );
}

const YEARS = [
  {
    year: 2026,
    files: [
      {
        title:
          "Տեղեկատվություն «Տելեկոմ Արմենիա» ԲԲԸ շարժական բջջային կապի ծառայությունների 2026թ. 1-ին եռամսյակի հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ",
      },
      {
        title:
          "Տեղեկատվություն «Տելեկոմ Արմենիա» ԲԲԸ ամրակցված կապի ծառայությունների 2026թ. 1-ին եռամսյակի հիմնական տեխնիկատնտեսական ցուցանիշների վերաբերյալ",
      },
    ],
  },
  { year: 2025, files: [] },
  { year: 2024, files: [] },
  { year: 2023, files: [] },
  { year: 2022, files: [] },
  { year: 2021, files: [] },
  { year: 2020, files: [] },
  { year: 2019, files: [] },
  { year: 2018, files: [] },
  { year: 2017, files: [] },
  { year: 2016, files: [] },
  { year: 2015, files: [] },
  { year: 2014, files: [] },
];

export default function Ardyunq() {
  const [openYear, setOpenYear] = useState(2026);
  const [activeTab, setActiveTab] = useState("financial");

  return (
    <div className="max-w-5xl mx-auto mt-16 mb-20 px-6">
      <h1 className="text-3xl font-bold text-[#00293c] mb-8">
        Արդյունքներ և հաշվետվություններ
      </h1>

      <div className="flex gap-6 items-start">
        {/* Левая колонка вкладок */}
        <nav className="flex flex-col w-64 shrink-0 gap-1">
          <button
            onClick={() => setActiveTab("financial")}
            className={`flex items-center justify-between text-left rounded-md px-4 py-3 text-sm font-semibold ${
              activeTab === "financial"
                ? "bg-sky-400 text-[#00293c]"
                : "bg-white text-slate-500"
            }`}
          >
            <span>«Տելեկոմ Արմենիա» ԲԲԸ տարեկան հաշվետվություններ</span>
          </button>
        </nav>

        {/* Правая часть — аккордеон по годам */}
        <div className="flex-1 flex flex-col">
          {YEARS.map(({ year, files }) => {
            const isOpen = openYear === year;
            return (
              <div key={year} className="border-b border-slate-200">
                <button
                  onClick={() => setOpenYear(isOpen ? null : year)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-xl font-bold text-[#00293c]">
                    {year} թ.
                  </span>
                  {isOpen ? (
                    <ChevronUp size={20} className="text-slate-500" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-500" />
                  )}
                </button>

                {isOpen && (
                  <div className="pb-8">
                    {files.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {files.map((file, i) => (
                          <PdfCard key={i} title={file.title} size="md" />
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-400 text-sm">
                        Տվյալներ առայժմ չկան
                      </p>
                    )}
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