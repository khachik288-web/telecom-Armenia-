import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
  FaPlane, 
  FaGlobe, 
  FaInfoCircle, 
  FaMobileAlt, 
  FaChevronDown, 
  FaChevronUp, 
  FaPhoneAlt, 
  FaQuestionCircle 
} from 'react-icons/fa';

export default function UsefulInfo() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: "Ինչպե՞ս ակտիվացնել ռոումինգը մեկնելուց առաջ",
      a: "Ռոումինգը ակտիվացնելու համար ուղարկեք *121# հրահանգը կամ ակտիվացրեք My Team հավելվածի միջոցով մինչ Հայաստանի տարածքը լքելը:"
    },
    {
      q: "Ինչպե՞ս լիցքավորել հաշիվը արտերկրում գտնվելիս",
      a: "Հաշիվը կարող եք լիցքավորել My Team հավելվածով, օնլայն բանկինգով կամ telecomarmenia.am կայքի միջոցով՝ բանկային քարտով:"
    },
    {
      q: "Ինչպե՞ս կապ հաստատել աջակցման կենտրոնի հետ արտերկրից",
      a: "Արտերկրից Team-ի հաճախորդների աջակցման կենտրոն զանգահարելու համար հավաքեք +374 8000 0100 համարը (զանգն անվճար է ռոումինգում):"
    },
    {
      q: "Ի՞նչ անել, եթե ռոումինգում ինտերնետը չի աշխատում",
      a: "Ստուգեք, որ հեռախոսի կարգավորումներում ակտիվացված է «Data Roaming» (Տվյալների ռոումինգ) ֆունկցիան, և APN-ը սահմանված է inet.telecom.am:"
    }
  ];

  return (
    
    <div className="w-full bg-white text-[#00293c] min-h-screen">

      <div className="w-full overflow-hidden bg-slate-100 border-b border-gray-200 mb-8">
        <img 
          src="https://www.telecomarmenia.am/images/menu/1/16509766128636.png" 
          alt="Օգտակար տեղեկատվություն" 
          className="w-full h-auto max-h-[420px] object-cover object-center block"
        />
      </div>
      {/* 1. Навигационные табы */}
      <div className="bg-white shadow-sm border-b">
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
            className="p-4 flex flex-col items-center gap-2 text-gray-600 hover:text-[#00293c] border-b-2 border-transparent hover:border-gray-300 transition-all"
          >
            <FaGlobe className="text-xl" />
            <span>Միջազգային կապ</span>
          </a>
          <a
            href="/useful-info"
            className="p-4 flex flex-col items-center gap-2 text-[#00293c] font-bold border-b-2 border-[#00293c] bg-gray-50/50"
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
          <span className="text-gray-800 font-semibold">Օգտակար տեղեկատվություն</span>
        </nav>

        {/* Заголовок */}
        <h1 className="text-3xl font-bold text-[#00293c] mb-8">Օգտակար տեղեկատվություն</h1>

        {/* USSD команды */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#00293c] mb-6">
            Օգտակար USSD հրահանգներ
          </h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#00293c] transition-all group">
                <p className="text-sm text-gray-500 mb-2">Ռոումինգի ակտիվացում</p>
                <p className="text-2xl font-bold text-[#f1534f] group-hover:scale-105 transition-transform">*121#</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#00293c] transition-all group">
                <p className="text-sm text-gray-500 mb-2">Հաշվեկշռի ստուգում</p>
                <p className="text-2xl font-bold text-[#f1534f] group-hover:scale-105 transition-transform">*102#</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#00293c] transition-all group">
                <p className="text-sm text-gray-500 mb-2">Փաթեթների մնացորդ</p>
                <p className="text-2xl font-bold text-[#f1534f] group-hover:scale-105 transition-transform">*113#</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Интерактивный FAQ список */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#00293c] mb-6 flex items-center gap-2">
            <FaQuestionCircle className="text-[#f1534f]" />
            <span>Հաճախ տրվող հարցեր</span>
          </h2>
          <div className="space-y-4">
            {faqList.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:border-gray-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 md:p-5 font-semibold text-[#00293c] flex justify-between items-center bg-gray-50/50 hover:bg-gray-100/60 transition-colors"
                >
                  <span>{item.q}</span>
                  {openFaq === index ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
                </button>
                {openFaq === index && (
                  <div className="p-4 md:p-5 text-sm text-gray-600 border-t border-gray-100 bg-white leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Блок поддержки */}
        <div className="bg-[#003B5C] text-white rounded-2xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-full text-2xl text-cyan-300">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="text-xl font-bold">Աջակցություն ռոումինգում</h3>
              <p className="text-xs text-gray-300 mt-1">
                Զանգահարեք մեզ աշխարհի ցանկացած կետից
              </p>
            </div>
          </div>
          <a 
            href="tel:+37480000100" 
            className="bg-[#f1534f] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#d9433f] transition-all duration-200 no-underline shadow-md hover:shadow-lg active:scale-95 text-center whitespace-nowrap"
          >
            +374 8000 0100
          </a>
        </div>
      </Container>
    </div>
  );
}