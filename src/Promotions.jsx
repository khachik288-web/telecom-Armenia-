import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegCalendarAlt, FaSearch } from 'react-icons/fa';

export default function Promotions() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'news', 'announcements'
  const [fromDate, setFromDate] = useState('2026-08-21');
  const [toDate, setToDate] = useState('2026-08-21');
  const [searchQuery, setSearchQuery] = useState('');

  // Список всех акций
  const promotionsData = [
    {
      id: 1,
      category: 'all', // подходит для "Բոլորը"
      date: '23 July',
      title: 'Խոսե՛ք միասին` ԿՈՍՄՈ/ԿՈՄԲՈ ընտանիքով',
      type: 'image',
      bgCard: 'bg-[#f5f1eb]',
      customContent: (
        <div className="bg-[#f5f1eb] p-6 rounded-2xl flex items-center justify-between mb-4 h-48 border border-stone-200/50">
          <div className="flex flex-col max-w-[55%]">
            <span className="text-xl md:text-2xl font-black text-[#00293c] leading-tight">
              Միայն <br />
              <span className="text-[#00293c]">ԿՈՍՄՈ/ԿՈՄԲՈ</span>
            </span>
            <span className="text-xs text-gray-500 font-medium mt-1">
              բաժանորդների համար
            </span>
            <div className="mt-3 flex items-center gap-1 text-xs font-bold bg-stone-200/70 text-gray-700 px-3 py-1.5 rounded-full w-fit">
              <span>Բի Ֆրի 5000</span>
              <span>→</span>
              <span className="bg-[#f1534f] text-white px-2 py-0.5 rounded-md text-[11px]">
                72 500
              </span>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            {/* Иконка / Изображение SIM-карты */}
            <div className="w-20 h-28 border-4 border-cyan-400 rounded-xl flex items-center justify-center bg-cyan-50/50 shadow-inner">
              <div className="w-8 h-10 bg-[#f1534f] rounded-md flex items-center justify-center text-white font-mono text-xs font-bold">
                SIM
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: 'all',
      date: '15 July',
      title: 'Հատուկ առաջարկի պայմաններ',
      type: 'text',
      bgCard: 'bg-[#f4f6f8]',
      description:
        '«Տելեկոմ Արմենիա» ՓԲԸ-ի կանխավճարային բաժանորդներին կարող են ուղարկվել անհատական հատուկ առաջարկներ` SMS հաղորդագրությունների միջոցով: Առաջարկները հասանելի են միայն հաղորդագրություններ ստացած բաժանորդներին: Առաջարկից օգտվելու համար բաժանորդը պետք է կատարի հաղորդագրության մեջ նշված պայմանը, որից հետո տրամադրվում է բոնուս` գումարի կամ ինտերնետ ՄԲ/ԳԲ-ի տեսքով: Բոնուսի գործողության ժամկետը...'
    },
    {
      id: 3,
      category: 'all',
      date: '08 July',
      title: 'Հատուկ առաջարկ ՀՀ ամբողջ տարածքում',
      type: 'image',
      bgCard: 'bg-[#f5f1eb]',
      customContent: (
        <div className="relative bg-[#f5f1eb] p-4 rounded-2xl mb-4 h-48 overflow-hidden flex items-center justify-center border border-stone-200/50">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
              alt="Family"
              className="w-full h-full object-cover"
            />
            {/* 25% Badge */}
            <div className="absolute top-2 left-2 bg-[#f1534f] text-white p-2 rounded-full font-black text-xs text-center shadow-lg transform -rotate-12">
              ԿՈՍՄՈ 4 <br />
              <span className="text-base font-extrabold">25%</span>
              <br />
              զեղչ
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      category: 'all',
      date: '17 June',
      title: 'Գնիր TCL հեռուստացույց և օգտվիր ԿՈՍՄՈ 4-ից հատուկ պայմանով',
      type: 'image',
      bgCard: 'bg-[#eef5f8]',
      customContent: (
        <div className="relative bg-[#eef5f8] p-4 rounded-2xl mb-4 h-48 overflow-hidden flex items-center justify-between border border-cyan-100">
          <div className="flex flex-col justify-between h-full">
            <div className="text-[11px] font-bold tracking-widest text-cyan-900 uppercase">
              team <span className="text-[#f1534f]">::</span> TCL
            </div>
            <div className="w-28 h-20 bg-slate-900 rounded-md border-2 border-slate-700 shadow-md flex items-center justify-center relative">
              <span className="text-[10px] text-cyan-400 font-mono">TCL TV</span>
            </div>
            <div className="h-2" />
          </div>

          <div className="bg-[#f1534f] text-white rounded-full w-24 h-24 flex flex-col items-center justify-center text-center p-2 shadow-xl border-2 border-white">
            <span className="text-xl font-black leading-none">6</span>
            <span className="text-[10px] uppercase font-bold leading-tight mt-0.5">
              ամիս <br /> ԱՆՎՃԱՐ
            </span>
          </div>
        </div>
      )
    }
  ];

  // Фильтрация данных по активной вкладке и поисковому запросу
  const filteredPromotions = promotionsData.filter((item) => {
    const matchesTab =
      activeTab === 'all'
        ? true
        : activeTab === 'news'
        ? item.category === 'news'
        : item.category === 'announcements';

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-white text-[#00293c] py-10 md:py-16">
      <Container className="max-w-6xl">
        {/* Заголовок */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#00293c] mb-8 tracking-wide">
          Ակցիաներ
        </h1>

        {/* Табы (Նորություններ / Հայտարարություններ / Բոլորը) */}
        <div className="flex border-b border-gray-200 mb-8 gap-8 text-sm md:text-base font-semibold">
          <button
            onClick={() => setActiveTab('news')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'news'
                ? 'text-[#00293c] font-bold'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Նորություններ
            {activeTab === 'news' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00d4ff] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('announcements')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'announcements'
                ? 'text-[#00293c] font-bold'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Հայտարարություններ
            {activeTab === 'announcements' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00d4ff] rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`pb-3 transition-colors relative ${
              activeTab === 'all'
                ? 'text-[#00293c] font-bold'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Բոլորը
            {activeTab === 'all' && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00d4ff] rounded-full" />
            )}
          </button>
        </div>

        {/* Панель фильтрации с датами и кнопкой Поиска */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center bg-[#f4f6f8] px-4 py-2.5 rounded-full text-xs md:text-sm text-gray-600 font-medium border border-gray-100 shadow-inner">
            <input
              type="text"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="bg-transparent border-none outline-none w-24 text-center"
            />
            <span className="mx-2 text-gray-400">-</span>
            <input
              type="text"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="bg-transparent border-none outline-none w-24 text-center"
            />
            <FaRegCalendarAlt className="text-gray-500 ml-2 text-base cursor-pointer hover:text-[#00293c] transition-colors" />
          </div>

          <button
            onClick={() => {}}
            className="bg-[#f1534f] text-white font-bold px-8 py-2.5 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/20 active:scale-95"
          >
            Որոնում
          </button>
        </div>

        {/* Сетка карточек или экран "Ничего не найдено" */}
        {filteredPromotions.length > 0 ? (
          <Row className="g-6">
            {filteredPromotions.map((item) => (
              <Col md={6} key={item.id}>
                <div className="bg-[#f8fafc] rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300 border border-slate-100 group cursor-pointer">
                  <div>
                    {item.customContent}

                    <div className="text-xs text-gray-400 font-medium mb-2">
                      {item.date}
                    </div>

                    <h3 className="text-base md:text-lg font-bold text-[#00293c] group-hover:text-[#f1534f] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-xs md:text-sm text-gray-500 mt-3 leading-relaxed font-light line-clamp-6">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          /* Экран состояния "Ничего не найдено" (как на 3-м скриншоте) */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="relative mb-6">
              {/* Иконка Лупы */}
              <div className="w-24 h-24 rounded-full border-4 border-slate-700 flex items-center justify-center relative shadow-sm">
                <FaSearch className="text-4xl text-slate-700" />
                <div className="absolute top-1 right-2 w-2 h-2 bg-slate-300 rounded-full" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-slate-300 rounded-full" />
              </div>
            </div>
            <p className="text-lg md:text-xl font-bold text-[#00293c]">
              Արդյունք չի գտնվել
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}