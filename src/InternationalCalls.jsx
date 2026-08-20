import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaPlane, FaGlobe, FaInfoCircle, FaMobileAlt, FaClock, FaTag } from 'react-icons/fa';

// Список стран в алфавитном порядке
const COUNTRIES = [
  { id: 'alb', name: 'Ալբանիա', dayPrice: '320', nightPrice: '280' },
  { id: 'usa', name: 'ԱՄՆ', dayPrice: '100', nightPrice: '80' },
  { id: 'arg', name: 'Արգենտինա', dayPrice: '344', nightPrice: '301' },
  { id: 'aus', name: 'Ավստրալիա', dayPrice: '350', nightPrice: '300' },
  { id: 'aut', name: 'Ավստրիա', dayPrice: '250', nightPrice: '200' },
  { id: 'bel', name: 'Բելգիա', dayPrice: '280', nightPrice: '220' },
  { id: 'bgr', name: 'Բուլղարիա', dayPrice: '240', nightPrice: '190' },
  { id: 'deu', name: 'Գերմանիա', dayPrice: '190', nightPrice: '150' },
  { id: 'egy', name: 'Եգիպտոս', dayPrice: '400', nightPrice: '350' },
  { id: 'esp', name: 'Իսպանիա', dayPrice: '220', nightPrice: '180' },
  { id: 'ita', name: 'Իտալիա', dayPrice: '220', nightPrice: '180' },
  { id: 'pol', name: 'Լեհաստան', dayPrice: '210', nightPrice: '170' },
  { id: 'can', name: 'Կանադա', dayPrice: '110', nightPrice: '90' },
  { id: 'grc', name: 'Հունաստան', dayPrice: '230', nightPrice: '190' },
  { id: 'gbr', name: 'Մեծ Բրիտանիա', dayPrice: '200', nightPrice: '160' },
  { id: 'chn', name: 'Չինաստան', dayPrice: '150', nightPrice: '120' },
  { id: 'rus', name: 'Ռուսաստան', dayPrice: '110', nightPrice: '90' },
  { id: 'fra', name: 'Ֆրանսիա', dayPrice: '210', nightPrice: '170' },
  { id: 'geo', name: 'Վրաստան', dayPrice: '120', nightPrice: '100' },
];

export default function InternationalCalls() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (e) => {
    const country = COUNTRIES.find((c) => c.id === e.target.value);
    setSelectedCountry(country || null);
  };

  return (
    <div className="w-full bg-white text-[#00293c] min-h-screen">
      {/* Верхние табы навигации */}
      <div className="bg-white shadow-sm border-b mb-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center font-medium text-sm">
          <a
            href="/roaming"
            className="p-4 flex flex-col items-center gap-2 text-gray-600 hover:text-[#00293c] border-b-2 border-transparent hover:border-gray-300 transition-all"
          >
            <FaPlane className="text-xl" />
            <span>Ռոումինգ</span>
          </a>
          <a
            href="/international"
            className="p-4 flex flex-col items-center gap-2 text-[#00293c] font-bold border-b-2 border-[#00293c] bg-gray-50/50"
          >
            <FaGlobe className="text-xl" />
            <span>Միջազգային կապ</span>
          </a>
          <a
            href="/useful-info"
            className="p-4 flex flex-col items-center gap-2 text-gray-600 hover:text-[#00293c] border-b-2 border-transparent hover:border-gray-300 transition-all"
          >
            <FaInfoCircle className="text-xl" />
            <span>Օգտակար տեղեկատվություն</span>
          </a>
          <a
            href="/services"
            className="p-4 flex flex-col items-center gap-2 text-gray-600 hover:text-[#00293c] border-b-2 border-transparent hover:border-gray-300 transition-all"
          >
            <FaMobileAlt className="text-xl" />
            <span>Ծառայություններ</span>
          </a>
        </div>
      </div>

      <Container className="max-w-5xl">
        {/* Хлебные крошки */}
        <nav className="text-xs text-gray-500 mb-6 flex flex-wrap gap-1">
          <a href="/" className="hover:underline">Գլխավոր</a>
          <span>›</span>
          <a href="#" className="hover:underline">Անհատներին</a>
          <span>›</span>
          <a href="/roaming" className="hover:underline">Ռոումինգ</a>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Միջազգային կապ</span>
        </nav>

        {/* Заголовок */}
        <h1 className="text-3xl font-bold mb-8 text-[#00293c]">Միջազգային կապ</h1>

        {/* Выбор страны */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <label className="text-xl font-bold text-[#00293c]">Ընտրեք երկիրը</label>
          <select
            value={selectedCountry?.id || ''}
            onChange={handleCountryChange}
            className="p-3 px-5 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 min-w-[240px] focus:outline-none focus:ring-2 focus:ring-[#00293c] hover:border-[#00293c] transition-all cursor-pointer shadow-sm"
          >
            <option value="">Ընտրեք երկիրը</option>
            {COUNTRIES.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* Контент: Карта ИЛИ Информационный экран */}
        {!selectedCountry ? (
          /* Экран по умолчанию - Карта */
          <div className="flex justify-center items-center py-8 my-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              className="w-full max-w-3xl opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        ) : (
          /* Экран выбранной страны */
          <div className="animate-fadeIn">
            {/* Название страны */}
            <h2 className="text-3xl font-bold text-center text-[#00293c] mb-8">
              {selectedCountry.name}
            </h2>

            {/* Тарифы по времени */}
            <div className="flex justify-center items-center gap-8 md:gap-16 border-t border-b border-gray-100 py-6 mb-12">
              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-2">
                  <FaClock className="text-gray-400 group-hover:text-[#00293c] transition-colors" />
                  <span>07:00 - 23:00</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-[#00293c]">
                  <FaTag className="text-base text-gray-400" />
                  <span>{selectedCountry.dayPrice}</span>
                  <span className="text-sm font-normal text-gray-500">դրամ</span>
                </div>
              </div>

              <div className="h-12 w-px bg-gray-200"></div>

              <div className="text-center group">
                <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-2">
                  <FaClock className="text-gray-400 group-hover:text-[#00293c] transition-colors" />
                  <span>23:00 - 07:00</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-[#00293c]">
                  <FaTag className="text-base text-gray-400" />
                  <span>{selectedCountry.nightPrice}</span>
                  <span className="text-sm font-normal text-gray-500">դրամ</span>
                </div>
              </div>
            </div>

            {/* Блок Специальные предложения */}
            <div className="bg-[#003B5C] text-white p-4 font-bold text-xl rounded-t-lg mb-6">
              Հատուկ առաջարկներ
            </div>

            {/* Карточка акции */}
            <div className="bg-gray-50/70 p-6 rounded-2xl border border-gray-100 max-w-sm mb-16 shadow-sm hover:shadow-md transition-all group">
              <h3 className="font-bold text-lg text-[#00293c] mb-4">
                Հայերի աշխարհ
              </h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Միջազգային զանգեր ավելի ցածր սակագնով
              </p>
              <button className="border-2 border-[#f1534f] text-[#f1534f] font-semibold px-6 py-1.5 rounded-full text-sm hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95">
                Մանրամասն
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}