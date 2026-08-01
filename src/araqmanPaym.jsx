import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const DELIVERY_ROWS = [
  {
    region: "Երևան",
    location: <>բոլոր հասցեներ՝ <span className="font-bold">անվճար</span></>,
    time: "1 աշխատանքային օրվա ընթացքում",
  },
  {
    region: "Մարզեր",
    location: <span className="font-bold">1500 դրամ</span>,
    time: "3 աշխատանքային օրվա ընթացքում",
  },
];

export default function AraqmanPaym() {
  return (
    <div className="w-[92%] mx-auto md:w-[75%] md:mx-0 md:ml-[15%] lg:w-[65%] lg:ml-[350px] mt-10 sm:mt-16 md:mt-20 pb-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#00293c] mb-8">
        Առաքման պայմաններ
      </h1>

      <div className="border border-slate-200 rounded-sm overflow-hidden">
        {/* verev — только на sm и выше, на мобильном шапка не нужна */}
        <div className="hidden sm:grid sm:grid-cols-3 bg-[#0b3a5b] text-white">
          <div className="px-4 sm:px-6 py-5 sm:py-6 font-bold text-center text-sm sm:text-lg">
            Մարզ
          </div>
          <div className="px-4 sm:px-6 py-5 sm:py-6 font-bold text-center text-sm sm:text-lg">
            Բնակավայր/արժեք
          </div>
          <div className="px-4 sm:px-6 py-5 sm:py-6 font-bold text-center text-sm sm:text-lg">
            Ժամկետ
          </div>
        </div>

        {/* toxer */}
        {DELIVERY_ROWS.map((row) => (
          <div
            key={row.region}
            className="border-t border-slate-200 bg-white sm:grid sm:grid-cols-3 first:border-t-0 sm:first:border-t"
          >
            {/* Мобильная карточка */}
            <div className="sm:hidden p-5 flex flex-col gap-3 bg-[#0b3a5b] text-white">
              <span className="font-bold text-base">{row.region}</span>
            </div>
            <div className="sm:hidden px-5 py-4 flex justify-between items-center border-b border-slate-100 bg-slate-50">
              <span className="text-xs text-[#666E75] font-semibold">Բնակավայր/արժեք</span>
              <span className="text-sm text-[#3a4550] text-right">{row.location}</span>
            </div>
            <div className="sm:hidden px-5 py-4 flex justify-between items-center">
              <span className="text-xs text-[#666E75] font-semibold">Ժամկետ</span>
              <span className="text-sm text-[#3a4550] text-right">{row.time}</span>
            </div>

            {/* Десктоп/планшет — обычная таблица */}
            <div className="hidden sm:flex px-4 sm:px-6 py-6 sm:py-8 items-center justify-center text-center font-bold text-[#00293c] text-sm sm:text-base">
              {row.region}
            </div>
            <div className="hidden sm:flex px-4 sm:px-6 py-6 sm:py-8 items-center justify-center text-center bg-slate-50 text-[#3a4550] text-sm sm:text-base">
              {row.location}
            </div>
            <div className="hidden sm:flex px-4 sm:px-6 py-6 sm:py-8 items-center justify-center text-center text-[#3a4550] text-sm sm:text-base">
              {row.time}
            </div>
          </div>
        ))}
      </div>

      {/* kisvel */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-4">
        <a href="#" className="text-slate-700 hover:text-[#1877f2] transition-colors">
          <FaFacebook size={18} />
        </a>
        <a href="#" className="text-slate-700 hover:text-[#1da1f2] transition-colors">
          <FaTwitter size={18} />
        </a>
      </div>
    </div>
  );
}