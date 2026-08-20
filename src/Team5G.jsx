import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Team5G() {
  const [openFaq, setOpenFaq] = useState(null);

  // Вопросы для блока FAQ (как на 4.PNG)
  const faqs = [
    { q: "Ի՞նչ է 5G-ն", a: "5G-ն բջջային կապի 5-րդ սերունդն է, որն ապահովում է աննախադեպ արագություն և ցածր հապաղում:" },
    { q: "Որտե՞ղ է հասանելի Team-ի 5G ցանցը:", a: "Ցանցը հասանելի է Երևանի կենտրոնում և ընդլայնվում է դեպի այլ հատվածներ:" },
    { q: "Ի՞նչ առավելություններ ունի 5G ցանցը:", a: "Ապահովում է մինչև 10 անգամ ավելի արագ ինտերնետ, քան 4G-ն, և կայուն կապ բազմաթիվ սարքերի համար:" },
    { q: "Ո՞ր սակագնային փաթեթներով է այն հասանելի:", a: "Այն հասանելի է մեր հիմնական անսահմանափակ և Mega/Giga փաթեթներով:" },
    { q: "Ո՞ր սարքերում է հասանելի 5G-ն:", a: "Այն հասանելի է 5G մոդուլով ապահովված ժամանակակից սմարթֆոններում և պլանշետներում:" },
    { q: "Ո՞ր սմարթֆոններն ունեն 5G-ի համատեղելիություն:", a: "iPhone 12 և բարձր, Samsung Galaxy S21 և բարձր, ինչպես նաև Xiaomi, Օppo և այլ նոր մոդելներ:" }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* ============ СЕКЦИЯ 1 (как на 1.jpg) ============ */}
      <div className="bg-[#00293c] relative overflow-hidden py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white z-10 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-[white]">
              Խաղից դուրս<br />արագություն
            </h1>
            <button className="bg-[#f1534f] text-white px-8 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-[#f1534f] shadow-lg">
              Մանրամասն
            </button>
          </div>
          
          <div className="z-10 w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17543822344519.png" 
              alt="5G Speed" 
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Имитация светящихся кругов на фоне */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-96 h-96 border-[4px] border-[#00d2ff] rounded-full opacity-30 shadow-[0_0_60px_rgba(0,210,255,0.4)] pointer-events-none"></div>
          <div className="absolute right-[-25%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[2px] border-[#00d2ff] rounded-full opacity-20 shadow-[0_0_40px_rgba(0,210,255,0.2)] pointer-events-none"></div>
        </div>
      </div>

      {/* ============ СЕКЦИЯ 2 (как на 2.jpg) ============ */}
      <div className="bg-[#f8f9fa] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[#00293c] mb-6 leading-tight">
              Ավելի որակյալ և<br />արագ
            </h2>
            <p className="text-[#546e7a] mb-8 text-lg leading-relaxed">
              Վայելի՛ր սմարթֆոնիցդ ինտերնետը նոր մակարդակով՝ մինչև 500 Մբիթ/վ հսկայական արագությամբ: Գերարագ ինտերնետ, կայծակնային ներբեռնումներ և բարձրորակ կապ՝ առանց դադարի: Դարձի՛ր 5G բաժանորդ քո հեռախոսահամարով:
            </p>
            <button className="bg-[#f1534f] text-white px-10 py-3 rounded-full font-bold transition-all duration-300 hover:bg-[#d94440] hover:shadow-lg hover:-translate-y-1">
              Միանալ
            </button>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <img 
              src="https://www.telecomarmenia.am/images/block_with_text/1/17542939431443.png" 
              alt="5G Billboard" 
              className="w-full rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* ============ СЕКЦИЯ 3 (как на 3.PNG) ============ */}
      <div className="bg-[#003851] py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Верхняя часть (Телефон) */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-24 bg-[#002d42] rounded-2xl p-6 md:p-10 shadow-2xl">
            <div className="flex-1">
              <img 
                src="https://www.telecomarmenia.am/images/block_with_text/1/17542947088875.png" 
                alt="5G Phone 12:01" 
                className="w-full max-w-lg mx-auto rounded-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
                Ձեռք բեր նոր սերնդի սմարթֆոն, որը թույլ է տալիս միանալ 5G ցանցին և բացահայտի՛ր գերարագ հզորությունը հենց այսօր:
              </p>
              <button className="bg-[#f1534f] text-white px-10 py-3 rounded-full font-bold transition-all duration-300 hover:bg-white hover:text-[#f1534f]">
                Գնել հիմա
              </button>
            </div>
          </div>

          {/* Нижняя часть (Предложения) */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">5G առաջարկներ</h2>
            <p className="text-[#8bc4d9] text-lg">Փորձարկի՛ր 5G ինտերնետի առավելությունները ակտիվացնելով «Mega» և «Giga» փաթեթները:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Карточка Mega */}
            <div className="flex flex-col h-full group cursor-pointer">
              <img 
                src="https://www.telecomarmenia.am/images/block_with_news_slides/1/16510603620938.png" 
                alt="Mega" 
                className="w-full rounded-xl mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl" 
              />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f1534f] transition-colors">«Mega 300+/500+» ծառայությունները</h3>
              <p className="text-[#a0b2b9] flex-grow">Ակտիվացրո՛ւ «Mega 300+» և «Mega 500+» ծառայությունները My Team հավելվածի միջոցով և ստացի՛ր երկու անգամ շատ ինտերնետ նույն արժեքի դիմաց:</p>
            </div>

            {/* Карточка Giga */}
            <div className="flex flex-col h-full group cursor-pointer">
              <img 
                src="https://www.telecomarmenia.am/images/block_with_news_slides/1/16510603621462.png" 
                alt="Giga" 
                className="w-full rounded-xl mb-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl" 
              />
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f1534f] transition-colors">«Giga+» փաթեթներ</h3>
              <p className="text-[#a0b2b9] flex-grow">Ակտիվացրո՛ւ «Giga+» փաթեթներ My Team հավելվածի միջոցով և ստացի՛ր հավելյալ 10ԳԲ ինտերնետ նույն արժեքի դիմաց:</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ СЕКЦИЯ 4 (FAQ как на 4.PNG) ============ */}
      <div className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-[#00293c] mb-12">
            Հաճախ տրվող հարցեր
          </h2>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-200 py-3">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left text-[#546e7a] font-medium hover:text-[#f1534f] transition-colors py-2"
                >
                  {faq.q}
                  <span className="text-[#f1534f] text-xs ml-4">
                    {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {/* Анимация раскрытия ответа */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm text-slate-500 pb-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}