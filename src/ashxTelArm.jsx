import React, { useState } from "react";

// Отдельный компонент карточки, принимающий пропсы
function JobCard({ date, title, description }) {
  return (
    <div className="bg-[#f2f4f7] p-6 rounded-2xl flex flex-col gap-3 transition-all hover:shadow-md">
      <span className="text-xs font-medium text-gray-500">{date}</span>
      <h3 className="text-lg font-bold text-gray-900 leading-snug">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-6">
        {description}
      </p>
    </div>
  );
}

export default function AshxTelArm() {
  // Состояние для активной вкладки ("announcements", "news", "all")
  const [activeTab, setActiveTab] = useState("announcements");

  // Тестовые данные (можно добавлять поле category для фильтрации)
  const cardsData = [
    {
      id: 1,
      category: "announcements",
      date: "05 August",
      title: "Copywriter",
      description:
        "Team Telecom Armenia ընկերությունը փնտրում է Copywriter, ով պատասխանատու կլինի Ընկերության գովազդային և տեղեկատվական նյութերի գրավիչ կոնտենտը ստեղծելու համար: Պաշտոնի անվանում՝ Copywriter Թափուր հաստիքի տեսակ՝ ժամանակավոր...",
    },
    {
      id: 2,
      category: "announcements",
      date: "29 July",
      title: "Վաճառքի և սպասարկման մասնագետ, ք. Վեդի",
      description:
        "Team Telecom Armenia ընկերությունը փնտրում է Վաճառքի և սպասարկման մասնագետներ Վեդի քաղաքում: Պաշտոնի անվանում՝ Վաճառքի և սպասարկման մասնագետ: Ստորաբաժանում՝ Կոմերցիոն տնօրինություն...",
    },
    {
      id: 3,
      category: "announcements",
      date: "29 July",
      title: "Վաճառքի և սպասարկման մասնագետ Հոմպլեքս Մոլ",
      description:
        "Team Telecom Armenia ընկերությունը փնտրում է Վաճառքի և սպասարկման մասնագետներ Հոմպլեքս մոլում: Պաշտոնի անվանում՝ Վաճառքի և սպասարկման մասնագետ...",
    },
    {
      id: 4,
      category: "announcements",
      date: "29 July",
      title: "Վաճառքի և սպասարկման մասնագետ, ք. Երևան",
      description:
        "Team Telecom Armenia ընկերությունը փնտրում է Վաճառքի և սպասարկման մասնագետներ Երևան քաղաքում: Պաշտոնի անվանում՝ Վաճառքի և սպասարկման մասնագետ...",
    },
  ];

  // Фильтрация элементов в зависимости от выбранной вкладки
  const filteredCards = cardsData.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Баннер */}
      <img
        src="https://www.telecomarmenia.am/images/menu/1/15789192063747.jpeg"
        alt="Telecom Banner"
        className="w-full object-cover"
      />

      {/* Основной контейнер с отступами */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Заголовок */}
        <h1 className="text-3xl font-extrabold text-[#1d2939] mb-8">
          Աշխատանք Տելեկոմ Արմենիայում
        </h1>

        {/* Навигация Вкладок (Tabs) */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab("news")}
              className={`pb-3 text-sm font-semibold transition-colors relative ${
                activeTab === "news"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Նորություններ
            </button>

            <button
              onClick={() => setActiveTab("announcements")}
              className={`pb-3 text-sm font-semibold transition-colors relative ${
                activeTab === "announcements"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Հայտարարություններ
            </button>

            <button
              onClick={() => setActiveTab("all")}
              className={`pb-3 text-sm font-semibold transition-colors relative ${
                activeTab === "all"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Բոլորը
            </button>
          </nav>
        </div>

        {/* Блок фильтра по дате и кнопка "Որոնում" */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-[#f2f4f7] px-4 py-2 rounded-xl text-sm font-medium text-gray-700">
            <span>2026.08.05</span>
            <span>-</span>
            <span>2026.08.05</span>
            <button className="ml-2 text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white font-semibold px-6 py-2 rounded-xl transition-colors">
            Որոնում
          </button>
        </div>

        {/* Сетка карточек (2 колонки) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCards.map((card) => (
            <JobCard
              key={card.id}
              date={card.date}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}