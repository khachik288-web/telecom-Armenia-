import React from 'react';

// SVG-иконка документа с бейджем формата
const DocumentIcon = ({ type }) => {
  return (
    <div className="relative w-10 h-12 sm:w-12 sm:h-14 flex-shrink-0">
      <svg
        className="w-full h-full text-slate-500"
        viewBox="0 0 48 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8C4 5.79086 5.79086 4 8 4H32L44 16V48C44 50.2091 42.2091 52 40 52H8C5.79086 52 4 50.2091 4 48V8Z"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M32 4V16H44"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="7"
          y="30"
          width="28"
          height="14"
          rx="3"
          fill="currentColor"
        />
        <text
          x="21"
          y="40"
          fill="white"
          fontSize="9"
          fontWeight="bold"
          textAnchor="middle"
          className="select-none"
        >
          {type}
        </text>
      </svg>
    </div>
  );
};

const documentsData = [
  {
    id: 1,
    type: 'PDF',
    title: 'Շարժական Ֆիքսված ծառայությունների մատուցման դիմում հայտ',
    fileUrl: '#',
  },
  {
    id: 2,
    type: 'PDF',
    title: '«ԿՈՄԲՈ»(«COMBO») «ԿՈՍՄՈ»(«COSMO») ծառայությունների մատուցման դիմում հայտ',
    fileUrl: '#',
  },
  {
    id: 3,
    type: 'PDF',
    title: '«ԿՈՄԲՈ»(«COMBO») «ԿՈՍՄՈ»(«COSMO») սառեցման դիմում-հայտ',
    fileUrl: '#',
  },
  {
    id: 4,
    type: 'PDF',
    title: 'Ամրակցված հեռախոսահամարի կասեցման դիմում-հայտ',
    fileUrl: '#',
  },
  {
    id: 5,
    type: 'PDF',
    title: 'Ֆիքսված Ինտերնետ ծառայության ժամանակավոր կասեցման դիմում-հայտ',
    fileUrl: '#',
  },
  {
    id: 6,
    type: 'DOCX',
    title: '«ՏԵԼԵԿՈՄ ԱՐՄԵՆԻԱ» ԲԲԸ Ֆիքսված կապի ծառայությունների մատուցման դիմում-հայտ',
    fileUrl: '#',
  },
  {
    id: 7,
    type: 'DOCX',
    title: '«My Team» Հավելվածի տրամադրման պայմաններ',
    fileUrl: '#',
  },
  {
    id: 8,
    type: 'PDF',
    title: 'Լիազորագիր',
    fileUrl: '#',
  },
];

export default function Ogtakar() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6 sm:px-6 md:py-10 font-sans">
      {/* Заголовок с медиазапросами для размера шрифта и отступов */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1f2937] mb-5 sm:mb-8 text-left">
        Օգտակար փաստաթղթեր
      </h2>

      {/* 
        Сетка элементов с медиазапросами:
        - 1 колонка на мобильных (до 640px)
        - 2 колонки начиная с `sm:` (640px и выше)
        - 2 колонки с большим зазором на `lg:` (1024px)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
        {documentsData.map((doc) => (
          <a
            key={doc.id}
            href={doc.fileUrl}
            className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-[#f6f7f9] hover:bg-slate-200/70 rounded-xl transition-all duration-200 group cursor-pointer active:scale-[0.99]"
            download
          >
            <DocumentIcon type={doc.type} />
            <span className="text-xs sm:text-sm font-extrabold text-slate-700 group-hover:text-red-500 transition-colors leading-tight sm:leading-snug">
              {doc.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}