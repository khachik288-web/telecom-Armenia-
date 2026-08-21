import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
  FaMobileAlt, 
  FaWifi, 
  FaSimCard, 
  FaPercent, 
  FaChevronDown, 
  FaChevronUp 
} from 'react-icons/fa';

export default function TeamBonus() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const leftFaqs = [
    {
      q: "Ո՞վ կարող է օգտվել MobiBattle պրոմոկոդերից:",
      a: "MobiBattle պրոմոկոդերից կարող են օգտվել Team-ի բոլոր այն բաժանորդները, ովքեր ունեն կուտակված բոնուսային միավորներ:"
    },
    {
      q: "Քայլեր MobiBattle-ի պրոմոկոդ ակտիվացնելու համար",
      a: "1. Փոխանակեք 1000 բոնուսային միավոր պրոմոկոդի հետ: 2. Այցելեք MobiBattle պորտալ: 3. Մուտքագրեք պրոմոկոդը «Մուտքագրեք պրոմոկոդը» դաշտում և ակտիվացրեք:"
    }
  ];

  const rightFaqs = [
    {
      q: "Որտե՞ղ կարող եմ ծանոթանալ Հաճախ Տրվող Հարցերին:",
      a: "Հաճախ տրվող հարցերի ամբողջական ցանկին կարող եք ծանոթանալ My Team հավելվածի Օգնություն բաժնում կամ կայքի համապատասխան էջում:"
    },
    {
      q: "Որտե՞ղ կարող եմ ծանոթանալ «Team Բոնուս» ծրագրի պայմաններին:",
      a: "Ծրագրի մանրամասն պայմաններին կարող եք ծանոթանալ «Team Բոնուս» էջում կամ զանգահարելով 100 աջակցման կենտրոն:"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#00293c]">

      {/* 1. HERO BANNER */}
      <div className="bg-[#003853] relative overflow-hidden py-16 md:py-24">
        {/* Subtle arrow pattern background styling */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <Container className="max-w-6xl relative z-10">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <div className="bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 max-w-lg shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-wide">
                  «Team Բոնուս»
                </h1>
                <p className="text-gray-200 text-lg md:text-xl font-light mb-8">
                  Միացիր և կուտակիր միավորներ
                </p>
                <a
                  href="/reg"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-lg hover:shadow-red-500/30 no-underline active:scale-95"
                >
                  Ավելին
                </a>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <div className="relative inline-block group">
                <img
                  src="https://www.telecomarmenia.am/images/sliders_block_slides/1/16534822128047.png"
                  alt="Team Bonus Mobile"
                  className="max-h-[380px] md:max-h-[460px] w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_0_35px_rgba(0,212,255,0.4)]"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. WHAT IS TEAM BONUS */}
      <div className="py-16 md:py-24 bg-white">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0 text-center">
              <div className="bg-[#003853] p-8 md:p-12 rounded-3xl inline-block shadow-xl group overflow-hidden">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/1653482242093.png"
                  alt="Ինչ է Team Bonus-ը"
                  className="max-h-[300px] md:max-h-[380px] w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6}>
              <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Ի՞նչ է «Team Բոնուս»-ը
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                «Team Բոնուս»-ը խրախուսական ծրագիր է, որը հնարավորություն է տալիս կուտակել բոնուսային միավորներ կատարված ծախսերի դիմաց և փոխանակել մի շարք ծառայություններով: Օգտվե՛ք Team ծառայություններից և կուտակեք բոնուսային միավորներ, փոխանակեք դրանք զանազան ծառայությունների՝ ինտերնետ փաթեթների, րոպեների և հատուկ առաջարկների հետ:
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. HOW TO JOIN (STEPPER) */}
      <div className="bg-[#003853] text-white py-16 md:py-24">
        <Container className="max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white tracking-wide">
            Ինչպե՞ս միանալ
          </h2>

          {/* Stepper Bar */}
          <div className="relative max-w-3xl mx-auto mb-16 px-4">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-cyan-500/40 -translate-y-1/2 z-0" />
            <div className="relative z-10 flex justify-between items-center">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-400 text-[#003853] font-black text-xl md:text-2xl flex items-center justify-center border-4 border-[#003853] shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Step Cards Grid */}
          <Row className="g-6 text-center">
            <Col md={4}>
              <div className="flex flex-col items-center h-full group">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-md border border-white/10">
                  <img
                    src="https://www.telecomarmenia.am/images/slider_block_with_steps_slides/1/1649664611896.jpeg"
                    alt="Ինչպե՞ս դառնալ մասնակից"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Ինչպե՞ս դառնալ մասնակից
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                  Ծրագրին կարող եք միանալ ներբեռնելով «My Team» հավելվածը և այցելելով Բոնուս բաժինը կամ գրանցվելով «Անձնական գրասենյակում»։ Ծրագրին կարող եք նաև միանալ հավաքելով *555# :
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="flex flex-col items-center h-full group">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-md border border-white/10">
                  <img
                    src="https://www.telecomarmenia.am/images/slider_block_with_steps_slides/1/16496646119184.png"
                    alt="Ինչպե՞ս կուտակել միավորներ"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Ինչպե՞ս կուտակել միավորներ
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                  Team Բոնուս ծրագրից օգտվելու համար պարզապես պետք է լինել Team բաժանորդ, օգտվել ծառայություններից և կուտակել միավորներ։
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="flex flex-col items-center h-full group">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-md border border-white/10">
                  <img
                    src="https://www.telecomarmenia.am/images/slider_block_with_steps_slides/1/16496646119398.jpeg"
                    alt="Ինչպե՞ս օգտագործել միավորները"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  Ինչպե՞ս օգտագործել միավորները
                </h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                  Կուտակած միավորները կարող եք փոխանակել րոպեների, ԳԲ/ՄԲ-ների, SMS-ների, ձայնային փաթեթների և հատուկ առաջարկների հետ:
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. WHAT CAN I GET FOR POINTS */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-[#edf3f8] to-[#f4f7fa]">
        <Container className="max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-12 leading-tight">
            Ի՞նչ կարող եմ ստանալ <br /> կուտակած միավորների փոխարեն
          </h2>

          <Row className="g-6 justify-center">
            <Col xs={6} sm={3}>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <FaMobileAlt className="text-4xl text-[#00293c] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base font-semibold text-[#00293c]">
                  Րոպեներ
                </span>
              </div>
            </Col>

            <Col xs={6} sm={3}>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <FaWifi className="text-4xl text-[#00293c] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base font-semibold text-[#00293c]">
                  Ինտերնետ
                </span>
              </div>
            </Col>

            <Col xs={6} sm={3}>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <FaSimCard className="text-4xl text-[#00293c] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base font-semibold text-[#00293c]">
                  Գեղեցիկ համարներ
                </span>
              </div>
            </Col>

            <Col xs={6} sm={3}>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <FaPercent className="text-4xl text-[#00293c] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm md:text-base font-semibold text-[#00293c]">
                  Պրոմոկոդեր
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. PROMO CARDS (ROAMING & MOBIBATTLE) */}
      <div className="py-12 bg-white">
        <Container className="max-w-6xl space-y-12">
          
          {/* Promo 1: Roaming */}
          <div className="bg-[#ece7df] rounded-3xl p-8 md:p-12 overflow-hidden">
            <Row className="align-items-center g-8">
              <Col lg={6} className="text-center order-2 order-lg-1">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17636361813873.png"
                  alt="Ռոումինգ փաթեթ Team Բոնուսում"
                  className="max-h-[280px] md:max-h-[340px] w-auto mx-auto object-contain filter drop-shadow-lg"
                />
              </Col>
              <Col lg={6} className="order-1 order-lg-2">
                <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                  Ռոումինգ փաթեթ Team Բոնուսում
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed font-medium">
                  Կուտակե՛ք բոնուսային միավորներ և դարձրե՛ք Ձեր ճամփորդությունները առավել հեշտ Team Բոնուսի հետ: Բաց մի թողեք հնարավորությունը ` ձեռք բերելու Ռոումինգ փաթեթ 1ԳԲ+ 12000 միավորի և 100 դրամի դիմաց:
                </p>
                <button className="bg-[#f1534f] text-white font-bold px-9 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 active:scale-95">
                  Ավելին
                </button>
              </Col>
            </Row>
          </div>

          {/* Promo 2: MobiBattle */}
          <div className="bg-[#003853] text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            <Row className="align-items-center g-8">
              <Col lg={6}>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  MobiBattle պրոմոկոդեր:
                </h2>
                <p className="text-slate-200 text-xs md:text-sm mb-8 leading-relaxed font-light">
                  Գործընկերների առաջարկներ բաժնում ակտիվացրե՛ք MobiBattle-ի 7 օրյա անվճար բաժանորդագրության պրոմոկոդը 1000 Team Բոնուս միավորի դիմաց: Այցելե՛ք MobiBattle խաղային պորտալ: Մուտքագրե՛ք պրոմոկոդը «Մուտքագրեք պրոմոկոդը» դաշտում: Ակտիվացրե՛ք և ստացե՛ք 7-օրյա անվճար բաժանորդագրություն: Ակտիվացրած բաժանորդագրությամբ սկսե՛ք խաղալ Casual, Singleplayer և Battle Arena (PUBG) զվարճալի խաղերը MobiBattle պորտալից` 7 օր ԱՆՎՃԱՐ:
                </p>
                <button className="bg-[#f1534f] text-white font-bold px-9 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 active:scale-95">
                  Ավելին
                </button>
              </Col>
              <Col lg={6} className="text-center">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17213689791654.jpeg"
                  alt="MobiBattle պրոմոկոդեր"
                  className="max-h-[280px] md:max-h-[340px] w-auto mx-auto object-contain rounded-2xl filter drop-shadow-2xl"
                />
              </Col>
            </Row>
          </div>

        </Container>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-[#edf3f8] to-[#f4f7fa]">
        <Container className="max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-[#00293c] tracking-wide">
            Օգտակար տեղեկատվություն
          </h2>

          <Row className="g-4">
            <Col md={6}>
              <div className="space-y-4">
                {leftFaqs.map((faq, idx) => {
                  const id = `tb-left-${idx}`;
                  const isOpen = openFaq === id;
                  return (
                    <div 
                      key={id} 
                      className="border border-gray-200/80 rounded-lg overflow-hidden transition-all bg-white shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full text-left p-4 md:p-5 text-xs md:text-sm font-semibold flex justify-between items-center text-[#00293c] hover:bg-slate-50 transition-colors"
                      >
                        <span className="pr-3 leading-snug">{faq.q}</span>
                        {isOpen ? (
                          <FaChevronUp className="text-[#f1534f] text-xs flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-red-500/80 text-xs flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 md:p-5 bg-slate-50/50 text-xs md:text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Col>

            <Col md={6}>
              <div className="space-y-4">
                {rightFaqs.map((faq, idx) => {
                  const id = `tb-right-${idx}`;
                  const isOpen = openFaq === id;
                  return (
                    <div 
                      key={id} 
                      className="border border-gray-200/80 rounded-lg overflow-hidden transition-all bg-white shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full text-left p-4 md:p-5 text-xs md:text-sm font-semibold flex justify-between items-center text-[#00293c] hover:bg-slate-50 transition-colors"
                      >
                        <span className="pr-3 leading-snug">{faq.q}</span>
                        {isOpen ? (
                          <FaChevronUp className="text-[#f1534f] text-xs flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-red-500/80 text-xs flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 md:p-5 bg-slate-50/50 text-xs md:text-sm text-gray-600 border-t border-gray-100 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}