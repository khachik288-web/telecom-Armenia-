import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function GeforceGames() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const leftFaqs = [
    {
      id: 'gf-1',
      q: 'Performance բաժանորդագրություն:',
      a: 'Performance բաժանորդագրությունը տրամադրում է մուտք դեպի NVIDIA RTX տեխնոլոգիայով աշխատող ամպային սերվերներ, Full HD որակով և 60 FPS հաճախականությամբ:'
    },
    {
      id: 'gf-2',
      q: 'Ի՞նչ արժե բաժանորդագրությունը:',
      a: 'Բաժանորդագրության արժեքը կախված է ընտրված սակագնային պլանից: Team-ի հատուկ փաթեթների համար գործում են эксклюзив պայմաններ:'
    },
    {
      id: 'gf-3',
      q: 'Ո՞ւմ է հասանելի:',
      a: 'Ծառայությունը հասանելի է Team Telecom Armenia-ի ակտիվ բաժանորդներին:'
    },
    {
      id: 'gf-4',
      q: 'Ինչպե՞ս սկսել խաղալ:',
      a: 'Ակտիվացրեք ծառայությունը *321# հրահանգով, գրանցվեք GFN.AM կայքում և ներբեռնեք հավելվածը:'
    }
  ];

  const rightFaqs = [
    {
      id: 'gf-5',
      q: 'Ակտիվացում և ապաակտիվացում:',
      a: 'Ծառայությունը կարող եք ակտիվացնել *321# հրահանգով կամ My Team հավելվածում, ինչպես նաև անջատել անձնական էջում:'
    },
    {
      id: 'gf-6',
      q: 'Ո՞ր սարքավորումներով կարող եմ խաղալ:',
      a: 'Խաղալ կարող եք PC, Mac, TV (Android TV / Cosmo Box) և սմարթֆոնների (Android / iOS) վրա:'
    },
    {
      id: 'gf-7',
      q: 'Համակարգային պահանջները:',
      a: 'Պահանջվում է կայուն ինտերնետ կապ (սկսած 15-25 Մբ/վ-ից Full HD 60 FPS-ի համար) և GFN հավելվածի աջակցություն:'
    },
    {
      id: 'gf-8',
      q: 'Cosmo Box',
      a: 'Cosmo Box TV приставкаյի միջոցով կարող եք խաղալ GeForce NOW-ի խաղերը անմիջապես Ձեր հեռուստացույցի էկրանին:'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#00293c]">
      
      {/* 1. HERO BANNER */}
      <div className="bg-[#001c2b] text-white py-16 md:py-24 relative overflow-hidden">
        <Container className="max-w-6xl relative z-10">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <div className="bg-[#1b2631]/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-cyan-500/20 max-w-lg shadow-2xl">
                <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Վերջապես
                </h1>
                <p className="text-gray-300 text-sm md:text-base font-medium mb-8">
                  Խաղային համակարգիչը այլևս անհրաժեշտ չէ:
                </p>
                <button className="bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-lg hover:shadow-red-500/30 active:scale-95">
                  Խաղալ
                </button>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <img
                src="https://www.telecomarmenia.am/images/sliders_block_slides/1/16902169870757.png"
                alt="GeForce Games Collage"
                className="max-h-[380px] md:max-h-[460px] w-auto mx-auto object-contain filter drop-shadow-[0_0_30px_rgba(0,180,216,0.2)]"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. CLOUD GAMING PC */}
      <div className="bg-[#003853] text-white py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0 text-center">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-cyan-500/20 group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/16902170036083.jpeg"
                  alt="Cloud Servers"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Խաղային համակարգիչ ամպային սերվերում
              </h2>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-8 font-light">
                Ամենապահանջված խաղերը խաղալու համար այլևս կարիք չկա գնել թանկարժեք խաղային համակարգիչ: Բոլոր խաղերը հեռակա աշխատում են հզոր սերվերների վրա, և պատկերը փոխանցվում է Ձեր սարքավորմանը՝ առանց հապաղելու:
              </p>
              <button className="bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 active:scale-95">
                Խաղալ
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. FAST INTERNET */}
      <div className="bg-[#ece7df] py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Արագ ինտերնետ
              </h2>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium">
                ԿՈՍՄՈ և ԿՈՄԲՈ սակագներով դուք կստանաք Full HD որակ 60 FPS հաճախականությամբ ինչպես նաև NVIDIA RTX և DLSS տեխնոլոգիայի հնարավորությամբ: Դարձի՛ր TEAM-ի բաժանորդ, ակտիվացրո՛ւ բաժանորդագրություն GeForce Games-ի սերվիսում:
              </p>
            </Col>

            <Col lg={6} className="text-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17477397496471.png"
                  alt="Cosmo Kombo Internet"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. COSMO BOX */}
      <div className="bg-[#003853] text-white py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="order-2 order-lg-1 text-center">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-cyan-500/20 group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17309633263175.jpeg"
                  alt="Cosmo Box Gaming"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Cosmo Box` դիտիր, խաղա, վայելիր
              </h2>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed mb-8 font-light">
                Բացահայտի՛ր խաղային փորձի նոր հորիզոնները և սուզվիր զվարճանքի աշխարհ մեր Cosmo Box սարքի միջոցով:
              </p>
              <button className="bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 active:scale-95">
                Մանրամասն
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. ANY DEVICE */}
      <div className="bg-[#ece7df] py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Ցանկացած սարք կարող է լինել խաղային
              </h2>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium">
                Բոլոր խաղերը արդեն տեղադրված են և ակտիվանում են GFN.AM-ի ամպային սերվերում , որը թույլ է տալիս միացնել պահանջկոտ խաղեր գրեթե ցանկացած սարքի վրա՝ PC, Mac, TV և smartphone
              </p>
            </Col>

            <Col lg={6} className="text-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/16902170400405.jpeg"
                  alt="Supported Devices OS"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 6. START PLAYING NOW */}
      <div className="bg-[#003853] text-white py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="order-2 order-lg-1 text-center">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-cyan-500/20 group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/16902170677644.jpeg"
                  alt="Apex Legends GFN"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Սկսի՛ր խաղալ հենց հիմա
              </h2>
              <p className="text-gray-200 text-xs md:text-sm leading-relaxed font-light">
                Ակտիվացրեք բաժանորդագրությունը և ստացեք Performance հնարավորություն խաղալու ավելի քան 2000 խաղ GFN.AM կատալոգից
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 7. CONNECT IN 3 STEPS */}
      <div className="bg-[#ece7df] py-16 md:py-24">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <h2 className="text-3xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Միացեք 3 քայլով
              </h2>
              <div className="space-y-4 text-xs md:text-sm text-gray-800 leading-relaxed font-medium">
                <p>
                  <strong className="text-[#00293c]">1.</strong> Միացրեք GeForce Games ծառայությունը, օգտագործեք *321# հրահանգը ☺
                </p>
                <p>
                  <strong className="text-[#00293c]">2.</strong> Գրանցվեք և մուտք գործեք GFN.AM կայք Թիմի կոճակի միջոցով ձեր հեռախոսահամարով 😎
                </p>
                <p>
                  <strong className="text-[#00293c]">3.</strong> GFN.AM կայքից ներբեռնեք հավելվածը
                </p>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <div className="overflow-hidden rounded-2xl shadow-xl group border border-stone-200">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17010843790026.png"
                  alt="GFN Authorization Login"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 8. FAQ SECTION */}
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