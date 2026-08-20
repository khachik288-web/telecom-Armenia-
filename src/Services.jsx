import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPlane, FaGlobe, FaInfoCircle, FaMobileAlt } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="w-full bg-white text-[#00293c] min-h-screen pb-20">
      {/* 1. Главный баннер во всю ширину экрана в самом верху */}
      <div className="w-full overflow-hidden bg-slate-100 border-b border-gray-200">
        <img
          src="https://www.telecomarmenia.am/images/menu/1/17857571349765.png"
          alt="Ծառայություններ Banner"
          className="w-full h-auto max-h-[380px] object-cover object-center block"
        />
      </div>

      {/* 2. Верхние табы навигации */}
      <div className="bg-white shadow-sm border-b mb-8">
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
            className="p-4 flex flex-col items-center gap-2 text-gray-600 hover:text-[#00293c] border-b-2 border-transparent hover:border-gray-300 transition-all"
          >
            <FaInfoCircle className="text-xl" />
            <span>Օգտակար տեղեկատվություն</span>
          </a>
          <a
            href="/services"
            className="p-4 flex flex-col items-center gap-2 text-[#00293c] font-bold border-b-2 border-[#00293c] bg-gray-50/50"
          >
            <FaMobileAlt className="text-xl" />
            <span>Ծառայություններ</span>
          </a>
        </div>
      </div>

      <Container className="max-w-5xl">
        {/* Хлебные крошки */}
        <nav className="text-xs text-gray-500 mb-8 flex flex-wrap gap-1">
          <a href="/" className="hover:underline">Գլխավոր</a>
          <span>›</span>
          <a href="#" className="hover:underline">Անհատներին</a>
          <span>›</span>
          <a href="/roaming" className="hover:underline">Ռոումինգ</a>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Ծառայություններ</span>
        </nav>

        {/* СЕКЦИЯ 1: ՌՈՈՒՄԻՆԳ ՌՈՒՍԱՍՏԱՆՈՒՄ, ՎՐԱՍՏԱՆՈՒՄ */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-[#00293c] mb-6 tracking-wide">
            ՌՈՈՒՄԻՆԳ ՌՈՒՍԱՍՏԱՆՈՒՄ, ՎՐԱՍՏԱՆՈՒՄ
          </h2>

          <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between w-[370px]">
            <h3 className="text-lg font-bold text-[#00293c] mb-4">
              Ռոումինգ փաթեթ 1GB
            </h3>
            <p className="text-xs text-gray-600 mb-8 leading-relaxed min-h-[40px]">
              Ինտերնետ փաթեթ Ռուսաստանում, Վրաստանում գտնվող բաժանորդների համար:
            </p>
            <button className="border border-[#f1534f] text-[#f1534f] font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95 w-fit">
              Ավելին
            </button>
          </div>
        </section>

        {/* СЕКЦИЯ 2: ԻՆՏԵՐՆԵՏ ՌՈՈՒՄԻՆԳՈՒՄ 100 ԵՐԿՐՈՒՄ */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-[#00293c] mb-6 tracking-wide">
            ԻՆՏԵՐՆԵՏ ՌՈՈՒՄԻՆԳՈՒՄ 100 ԵՐԿՐՈՒՄ
          </h2>

          <Row className="g-4 mb-6">
            <Col md={4}>
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between w-[370px]">
                <div>
                  <h3 className="text-lg font-bold text-[#00293c] mb-4">
                    Ռոումինգ փաթեթ 1 ԳԲ +
                  </h3>
                  <p className="text-xs text-gray-600 mb-8 leading-relaxed">
                    Հարմար է 2–5 օր տևողությամբ ճանապարհորդությունների համար: Թույլ է տալիս շփվել սոցիալական հավելվածներով, օգտվել Google...
                  </p>
                </div>
                <button className="border border-[#f1534f] text-[#f1534f] font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95 w-fit">
                  Ավելին
                </button>
              </div>
            </Col>

            <Col md={4}>
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#00293c] mb-4">
                    Ռոումինգ փաթեթ 4 ԳԲ
                  </h3>
                  <p className="text-xs text-gray-600 mb-8 leading-relaxed">
                    Հարմար է 5–10 օր տևողությամբ ճանապարհորդությունների համար: Թույլ է տալիս ակտիվ օգտվել սոցիալական հարթակներից...
                  </p>
                </div>
                <button className="border border-[#f1534f] text-[#f1534f] font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95 w-fit">
                  Ավելին
                </button>
              </div>
            </Col>

            <Col md={4}>
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#00293c] mb-4">
                    Ռոումինգ փաթեթ 10 ԳԲ
                  </h3>
                  <p className="text-xs text-gray-600 mb-8 leading-relaxed">
                    Թույլ է տալիս ակտիվ օգտագործել բոլոր սոցիալական ցանցերը, դիտել տեսանյութեր, կատարել երկար տեսազանգեր, ազատ օգտվել...
                  </p>
                </div>
                <button className="border border-[#f1534f] text-[#f1534f] font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95 w-fit">
                  Ավելին
                </button>
              </div>
            </Col>
          </Row>

          {/* Карточка 20 ГБ */}
          <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between w-[370px]">
            <h3 className="text-lg font-bold text-[#00293c] mb-4">
              Ռոումինգ փաթեթ 20 ԳԲ
            </h3>
            <p className="text-xs text-gray-600 mb-8 leading-relaxed">
              Գերազանց ընտրություն նրանց համար, ովքեր ցանկանում են մշտապես կապի մեջ լինել՝ առանց տվյալների սպառման մասին մտածելու:
            </p>
            <button className="border border-[#f1534f] text-[#f1534f] font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95">
              Ավելին
            </button>
          </div>
        </section>

        {/* СЕКЦИЯ 3: ՄԻՋԱԶԳԱՅԻՆ ԿԱՊ */}
        <section className="">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-[#00293c] mb-6 tracking-wide">
            ՄԻՋԱԶԳԱՅԻՆ ԿԱՊ
          </h2>

          <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between w-[370px]">
            <h3 className="text-lg font-bold text-[#00293c] mb-4">
              Հայերի աշխարհ
            </h3>
            <p className="text-xs text-gray-600 mb-8 leading-relaxed">
              Միջազգային զանգեր ավելի ցածր սակագնով
            </p>
            <button className="border border-[#f1534f] text-[#f1534f] font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-[#f1534f] hover:text-white transition-all duration-200 shadow-sm active:scale-95">
              Ավելին
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}