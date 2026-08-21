import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function MobiBattle() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const leftFaqs = [
    {
      id: 'mb-1',
      q: 'Ակտիվացում',
      a: 'Ծառայությունը կարող եք ակտիվացնել այցելելով mobibattle.am կայք կամ My Team հավելվածի միջոցով:'
    },
    {
      id: 'mb-2',
      q: 'Ապաակտիվացում',
      a: 'Ապաակտիվացնելու համար կարող եք ուղարկել Stop հրամանը համապատասխան կարճ համարին կամ անջատել «Անձնական գրասենյակում»:'
    },
    {
      id: 'mb-3',
      q: 'Ծառայության արժեք',
      a: 'Օրական բաժանորդագրության արժեքն է 100 դրամ/օր: Առաջին 7 օրը նոր օգտատերերի համար անվճար է:'
    }
  ];

  const rightFaqs = [
    {
      id: 'mb-4',
      q: 'Մրցանակներ',
      a: 'Լավագույն խաղացողները ստանում են սմարթֆոններ, սմարթ ժամացույցներ, ականջակալներ, power bank-եր և էլեկտրական ինքնագլորներ:'
    },
    {
      id: 'mb-5',
      q: 'Խաղերի տեսակներ',
      a: 'Հարթակում հասանելի են Casual, Single Player և Battle Arena կիբերսպորտային խաղեր:'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#00293c]">
      
      {/* 1. HERO BANNER */}
      <div className="bg-[#001f31] relative overflow-hidden py-16 md:py-24 border-b border-cyan-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(#00d4ff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        
        <Container className="max-w-6xl relative z-10">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <div className="bg-[#00293c]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-cyan-500/20 max-w-lg shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                  MobiBattle
                </h1>
                <p className="text-gray-200 text-lg md:text-xl font-medium mb-8">
                  Միացի՛ր, Զվարճացիր, Հաղթիր
                </p>
                <button className="bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-lg hover:shadow-red-500/30 active:scale-95">
                  Մանրամասն
                </button>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <div className="relative inline-block group">
                <img
                  src="https://www.telecomarmenia.am/images/sliders_block_slides/1/16796405948273.png"
                  alt="MobiBattle Phone"
                  className="max-h-[380px] md:max-h-[460px] w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_0_30px_rgba(0,180,216,0.3)]"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. WHAT IS MOBIBATTLE */}
      <div className="bg-[#ece7df] py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Ի՞նչ է MobiBattle-ը
              </h2>
              <p className="text-gray-700 text-sm md:text-base mb-8 leading-relaxed font-medium max-w-lg">
                MobiBattle մոբայլ զվարճալի խաղերի հարթակ է: Ոչինչ մի ներբեռնիր հեռախոսի մեջ, պարզապես մուտք գործի՛ր կայք և մրցիր իրական խաղացողների հետ:
              </p>
              <button className="bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 active:scale-95">
                Խաղալ
              </button>
            </Col>

            <Col lg={6} className="text-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/16796406291844.png"
                  alt="MobiBattle Games Banner"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. GAMES SECTION (DARK BLUE) */}
      <div className="bg-[#003853] text-white py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="order-2 order-lg-1 text-center">
              <div className="overflow-hidden rounded-2xl shadow-2xl group border border-cyan-500/20">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17211525172837.jpeg"
                  alt="MobiBattle Games"
                  className="w-full max-h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Խաղեր
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-slate-200 leading-relaxed font-light">
                <p>
                  <strong className="text-white font-bold">1. Casual Games.</strong> Խաղա և հասիր աղյուսակի առաջին հորիզոնականին: Casual Games-ը ներառված է առաջատարների աղյուսակում (առավելագույն միավորներով 1-59 տեղի մասնակիցները):
                </p>
                <p>
                  <strong className="text-white font-bold">2. Single Player Games.</strong> Խաղա ցանկացած ժամանակ և ցանկացած վայրում: Single Player Games-ը ներառված չէ առաջատարների աղյուսակում:
                </p>
                <p>
                  <strong className="text-white font-bold">3. Battle Arena.</strong> Մասնակցիր կիբեր սպորտային խաղերին և շահիր մրցանակներ: Battle Arena-ն ներառված է առաջատարների աղյուսակում, որտեղ երևում է խաղացողների վարկանիշները՝ հիմնված նրանց խաղի արդյունքների վրա:
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. PRIZES SECTION */}
      <div className="bg-[#ece7df] py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6}>
              <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Մրցանակներ
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                Հայտնվի՛ր առաջատարների աղյուսակում, որտեղ լավագույն խաղացողները պարգևատրվում են մրցանակներով` սմարթֆոններ, սմարթ ժամացույցներ, անլար ականջակալներ և power bank-եր և այլն:
              </p>
            </Col>

            <Col lg={6} className="text-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/16796406610393.png"
                  alt="MobiBattle Prizes"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. FAQ SECTION */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-[#edf3f8] to-[#f4f7fa]">
        <Container className="max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-[#00293c] tracking-wide">
            Հաճախ տրվող հարցեր
          </h2>

          <Row className="g-4">
            <Col md={6}>
              <div className="space-y-4">
                {leftFaqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className="border border-gray-200/80 rounded-lg overflow-hidden transition-all bg-white shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
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
                {rightFaqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className="border border-gray-200/80 rounded-lg overflow-hidden transition-all bg-white shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
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