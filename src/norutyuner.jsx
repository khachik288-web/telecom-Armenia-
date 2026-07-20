import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './norutyuner.css';

// ==== КАРТОЧКА НОВОСТИ (через пропсы) ====
function NewsCard({ img, date, title, bgColor,text }) {
  return (
    <a href="#news-item" className="news-card">
      <div
        className="news-card__img-wrap"
        style={{ backgroundColor: bgColor || '#f0f0f0' }}
      >
        {img && <img src={img} alt={title} className="news-card__img" />}
      </div>
      <div className="news-card__body">
        <div className="news-card__date">{date}</div>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__p">{text}</p>
      </div>
    </a>
  );
}

// ==== ДАННЫЕ ДЛЯ КАЖДОЙ ВКЛАДКИ ====
const newsData = [
  {
    img: "https://www.telecomarmenia.am/images/news/1/17821169098857/450x250c-center.jpeg",
    date: "22 June",
    title: "«Տելեկոմ Արմենիա» և «Ազերտելեկոմ» ընկերությունները ստորագրել են ինտերնետ տրաֆիկի փոխանցման վերաբերյալ համաձայնագիր",
    bgColor: "#e5dfd3"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17812511752024/450x250c-center.jpeg",
    date: "12 June",
    title: "Team Telecom Armenia-ն ճանաչվել է «Ցուցակված բաժնետոմսերի շուկայում առաջատար ոչ ֆինանսական թողարկող»",
    bgColor: "#111"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17810797188807/450x250c-center.jpeg",
    date: "05 June",
    title: "Team-ը շարունակում է աջակցել բնապահպանական նախագծերին Հայաստանի ողջ տարածքում",
    bgColor: "#4a5d3a"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17787646383268/450x250c-center.png",
    date: "14 May",
    title: "Տելեգրաֆից մինչև 5G. Կապի թանգարանը միանում է «Թանգարանների գիշերվան»",
    bgColor: "#4a5d3a"
  },
];

const announcementsData = [
  {
    img: "https://www.telecomarmenia.am/images/news/1/17756529131443/450x250c-center.png",
    date: "8 April",
    title: "MOBILE ID ծառայություն",
    bgColor: "#dbe9f0"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17749645247553/450x250c-center.jpeg",
    date: "31 March",
    title: "Հատուկ առաջարկ ԿՈՍՄՈ և ԿՈՄԲՈ բաժանորդների համար",
    bgColor: "#f0e0d3"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17726087357015/450x250c-center.jpeg",
    date: "04 March",
    title: "Անվճար ինտերնետ ռոումինգում Team-ի՝ Մերձավոր Արևելքում գտնվող բաժանորդներին",
    bgColor: "#f0e0d3"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17708176923493/450x250c-center.png",
    date: "11 February",
    title: "Team-ի բաժանորդները ծառայությունների դիմաց կարող են վճարել նաև IDBank-ի հավելվածով",
    bgColor: "#f0e0d3"
  }
];

const blogData = [
  {
    img: "https://www.telecomarmenia.am/images/news/1/17821169098857/450x250c-center.jpeg",
    date: "22 June",
    title: "«Տելեկոմ Արմենիա» և «Ազերտելեկոմ» ընկերությունները ստորագրել են ինտերնետ տրաֆիկի փոխանցման վերաբերյալ համաձայնագիր",
    bgColor: "#e5dfd3"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17812511752024/450x250c-center.jpeg",
    date: "12 June",
    title: "Team Telecom Armenia-ն ճանաչվել է «Ցուցակված բաժնետոմսերի շուկայում առաջատար ոչ ֆինանսական թողարկող»",
    bgColor: "#111"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17756529131443/450x250c-center.png",
    date: "8 April",
    title: "MOBILE ID ծառայություն",
    bgColor: "#dbe9f0"
  },
  {
    img: "https://www.telecomarmenia.am/images/news/1/17749645247553/450x250c-center.jpeg",
    date: "31 March",
    title: "Հատուկ առաջարկ ԿՈՍՄՈ և ԿՈՄԲՈ բաժանորդների համար",
    bgColor: "#f0e0d3"
  }
];

// ==== СПИСОК ВКЛАДОК ====
const tabs = [
  { id: 'news', label: 'Նորություններ', data: newsData },
  { id: 'announcements', label: 'Հայտարարություններ', data: announcementsData },
  { id: 'blog', label: 'Բլոգը', data: blogData },
];

export default function Norutyuner() {
  const [activeTab, setActiveTab] = useState('news');

  const currentData = tabs.find((tab) => tab.id === activeTab)?.data || [];

  return (
    <div className="max-w-[1200px] p-[40px_20px]">
      <h1 className="norutyuner__title">Նորություններ</h1>

      {/* Вкладки */}
      <div className="norutyuner__tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`norutyuner__tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Фильтр по дате */}
      <div className="norutyuner__filter">
        <div className="norutyuner__date-range">
          <span>2026.07.10</span>
          <span className="norutyuner__date-dash">-</span>
          <span>2026.07.10</span>
          <FaCalendarAlt className="norutyuner__calendar-icon" />
        </div>
        <button className="norutyuner__search-btn">Որոնում</button>
      </div>

      {/* Лента карточек */}
      <div className="norutyuner__grid">
        {currentData.map((item, i) => (
          <NewsCard
            key={i}
            img={item.img}
            date={item.date}
            title={item.title}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
}