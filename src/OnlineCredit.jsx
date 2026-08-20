import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
  FaShoppingCart, 
  FaUserCircle, 
  FaCommentDots, 
  FaShoppingBag, 
  FaChevronDown, 
  FaChevronUp 
} from 'react-icons/fa';

export default function OnlineCredit() {
  const [openFaq, setOpenFaq] = useState(null);

  const phoneImg = "https://www.telecomarmenia.am/images/block_with_text/1/16510468752809.png";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const leftFaqs = [
    {
      q: "Ինչպե՞ս ստանալ օնլայն ապառիկ (ACBA Bank)",
      a: "Ընտրեք ապրանքը Team e-Shop-ում, ձևակերպման էջում ընտրեք ACBA Bank ապառիկ տարբերակը և հետևեք համակարգի հրահանգներին:"
    },
    {
      q: "Ինչպե՞ս ստանալ օնլայն ապառիկ (EVOCABANK)",
      a: "Պատվերը ձևակերպելիս ընտրեք EVOCABANK, լրացրեք անհրաժեշտ տվյալները և ստացեք հաստատումը րոպեների ընթացքում:"
    },
    {
      q: "Ինչպե՞ս ստանալ օնլայն ապառիկ (ՎՏԲ)",
      a: "ՎՏԲ Բանկի միջոցով ապառիկ ձևակերպելու համար ընտրեք ՎՏԲ տարբերակը վճարման էջում և մուտքագրեք պահանջվող տվյալները:"
    },
    {
      q: "Ի՞նչ անել, եթե ես այլևս չեմ ցանկանում օգտագործել տրամադրված վարկը:",
      a: "Դուք կարող եք չեղարկել պատվերը մինչև ապրանքի ստացումը՝ կապ հաստատելով մեր աջակցման կենտրոնի հետ:"
    },
    {
      q: "Ի՞նչ անել, եթե հաստատված վարկային սահմանաչափը մասամբ է ծածկում պատվերի ամբողջական արժեքը:",
      a: "Տարբերությունը կարող եք վճարել կանխիկ կամ բանկային քարտով պատվերը ստանալու պահին:"
    }
  ];

  const rightFaqs = [
    {
      q: "Ինչպե՞ս օգտագործել ստացված վարկը:",
      a: "Վարկի հաստատումից հետո գումարն ավտոմատ կերպով ուղղվում է Ձեր ընտրած ապրանքի վճարմանը:"
    },
    {
      q: "Ի՞նչպես տեղեկանամ հայտի ընթացքի և կարգավիճակի մասին:",
      a: "Հայտի կարգավիճակի մասին ծանուցումը կստանաք SMS-ի կամ էլեկտրոնային փոստի միջոցով:"
    },
    {
      q: "ՎՏԲ հարթակում գրանցման ձեռնարկ",
      a: "Մանրամասն ձեռնարկը հասանելի է ՎՏԲ Բանկի պաշտոնական կայքում կամ պատվերի ձևակերպման էջում:"
    },
    {
      q: "Ի՞նչ ապրանքներ է հնարավոր գնել առցանց ապառիկ միջոցով:",
      a: "Առցանց ապառիկով կարող եք գնել սմարթֆոններ, պլանշետներ, աքսեսուարներ և գեղեցիկ համարներ:"
    },
    {
      q: "Ի՞նչ պայմաններով է տրամադրվում առցանց ապառիկը:",
      a: "Ապառիկի պայմանները (տոկոսադրույք, ժամկետ) կախված են ընտրված բանկի գործող սակագներից:"
    }
  ];

  return (
    <div className="w-full bg-[#00293c] text-white min-h-screen">
      
      {/* 1. HERO BANNER SECTION (Dark Theme) */}
      <div className="bg-[#00293c] py-12 md:py-16 border-b border-cyan-900/40">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="text-center mb-8 mb-lg-0">
              <div className="relative inline-block group">
                <img 
                  src={phoneImg} 
                  alt="Առցանց ապառիկ" 
                  className="max-h-[380px] md:max-h-[440px] w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-2xl"
                />
              </div>
            </Col>
            <Col lg={6} className="text-left">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Առցանց <br /> ապառիկ
              </h1>
              <p className="text-slate-300 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
                Առցանց ապառիկի ձևակերպումը թույլ է տալիս գնել ապրանքներ առցանց խանութից (e-shop), վճարելով ապրանքի արժեքը մասերով` սահմանված ժամկետի ընթացքում:
              </p>
              <a 
                href="/eshop" 
                className="inline-block bg-[#f1534f] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-lg hover:shadow-red-500/30 no-underline active:scale-95"
              >
                Առցանց խանութ
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. SECTION: ԳԵՂԵՑԻԿ ՀԱՄԱՐՆԵՐ (White Theme) */}
      <div className="bg-white text-[#00293c] py-16">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="text-center mb-8 mb-lg-0">
              <img 
                src={phoneImg} 
                alt="Գեղեցիկ համարներ" 
                className="max-h-[350px] md:max-h-[400px] w-auto mx-auto object-contain transition-transform duration-500 hover:scale-105 filter drop-shadow-xl"
              />
            </Col>
            <Col lg={6} className="text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#00293c]">
                Գեղեցիկ <br /> համարներ
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                Գեղեցիկ համարները հասանելի են ապառիկ տարբերակով` VTB բանկի միջոցով
              </p>
              <a 
                href="/eshop" 
                className="inline-block bg-[#f1534f] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md no-underline active:scale-95"
              >
                Գնել հիմա
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. SECTION: ՍՄԱՐԹՖՈՆՆԵՐ (Dark Theme) */}
      <div className="bg-[#00293c] py-16 border-t border-cyan-900/30">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="text-left order-2 order-lg-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Սմարթֆոններ
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-8 max-w-lg leading-relaxed">
                Գնիր ցանկացած սմարթֆոնն ապառիկի միջոցով` թողնելով օնլայն հայտ
              </p>
              <a 
                href="/eshop" 
                className="inline-block bg-[#f1534f] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-lg hover:shadow-red-500/30 no-underline active:scale-95"
              >
                Գնել հիմա
              </a>
            </Col>
            <Col lg={6} className="text-center order-1 order-lg-2 mb-8 mb-lg-0">
              <img 
                src={phoneImg} 
                alt="Սմարթֆոններ" 
                className="max-h-[350px] md:max-h-[400px] w-auto mx-auto object-contain transition-transform duration-500 hover:scale-105 filter drop-shadow-2xl"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. SECTION: INSTRUCTIONS / HOW TO GET CREDIT (BANKS) */}
      <div className="bg-[#00293c] py-16 border-t border-cyan-900/30">
        <Container className="max-w-6xl">
          
          {/* EVOCABANK */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-12 tracking-wide">
              Ինչպես ստանալ առցանց ապառիկ ( EVOCABANK )
            </h2>
            <Row className="g-4 text-center">
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaShoppingCart />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Այցելի՛ր Team e-Shop, ընտրի՛ր ցանկացած սմարթֆոն/ սմարթֆոններ և ավելացրու զամբյուղում:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaUserCircle />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Պատվերի ձևակերպման փուլում վճարման եղանակը ընտրի՛ր "Գնել ապառիկ" և վերբեռնիր անհրաժեշտ փաստաթղթերը:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaCommentDots />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Մեր մասնագետը կապ կհաստատի Ձեզ հետ հայտի մշակման համար:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaShoppingBag />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Ապառիկի հաստատումից հետո սպասեկ Ձեր ապրանքներին:
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          {/* ACBA BANK */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-12 tracking-wide">
              Ինչպես ստանալ առցանց ապառիկ (Acba bank)
            </h2>
            <Row className="g-4 text-center">
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaShoppingCart />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Այցելի՛ր Team e-Shop, ընտրի՛ր ցանկացած սմարթֆոն/ սմարթֆոններ և ավելացրու զամբյուղում:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaUserCircle />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Պատվերի ձևակերպման փուլում վճարման եղանակը ընտրի՛ր "Գնել ապառիկ" և վերբեռնիր անհրաժեշտ փաստաթղթերը:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaCommentDots />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Մեր մասնագետը կապ կհաստատի Ձեզ հետ հայտի մշակման համար:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaShoppingBag />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Ապառիկի հաստատումից հետո սպասեկ Ձեր ապրանքներին:
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          {/* VTB BANK */}
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-12 tracking-wide uppercase">
              Ինչպես ստանալ առցանց ապառիկ (ՎՏԲ ԲԱՆԿ)
            </h2>
            <Row className="g-4 text-center">
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaShoppingCart />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Այցելի՛ր Team e-Shop, ընտրի՛ր սմարթֆոն և/կամ հեռախոսահամար և ավելացրու զամբյուղում:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaUserCircle />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Պատվերի ձևակերպման էջում ընտրիր Ապառիկը որպես վճարման եղանակ և դիմիր ապառիկի, լրացնելով անհրաժեշտ դաշտերը:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaCommentDots />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Ստացիր` հաստատման ծածկագիրը ու ապառիկի սահմանաչափը քո հեռախոսահամարին:
                  </p>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-4 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <FaShoppingBag />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    Պատվերի ձևակերպման էջում, լրացրու ստացված ծածկագիրը "ՎՏԲ Կոդ" դաշտում:
                  </p>
                </div>
              </Col>
            </Row>
          </div>

        </Container>
      </div>

      {/* 5. SECTION: FAQ (White Background) */}
      <div className="bg-white text-[#00293c] py-16">
        <Container className="max-w-6xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-[#00293c]">
            Հաճախ տրվող հարցեր
          </h2>

          <Row className="g-4">
            {/* Left Column FAQs */}
            <Col md={6}>
              <div className="space-y-3">
                {leftFaqs.map((faq, idx) => {
                  const id = `left-${idx}`;
                  const isOpen = openFaq === id;
                  return (
                    <div key={id} className="border border-gray-200 rounded-lg overflow-hidden transition-all bg-gray-50/60 hover:border-gray-300">
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full text-left p-4 text-xs md:text-sm font-semibold flex justify-between items-center text-[#00293c] hover:bg-gray-100 transition-colors"
                      >
                        <span className="pr-2">{faq.q}</span>
                        {isOpen ? <FaChevronUp className="text-[#f1534f] text-xs flex-shrink-0" /> : <FaChevronDown className="text-gray-400 text-xs flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs text-gray-600 border-t border-gray-100 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Col>

            {/* Right Column FAQs */}
            <Col md={6}>
              <div className="space-y-3">
                {rightFaqs.map((faq, idx) => {
                  const id = `right-${idx}`;
                  const isOpen = openFaq === id;
                  return (
                    <div key={id} className="border border-gray-200 rounded-lg overflow-hidden transition-all bg-gray-50/60 hover:border-gray-300">
                      <button
                        onClick={() => toggleFaq(id)}
                        className="w-full text-left p-4 text-xs md:text-sm font-semibold flex justify-between items-center text-[#00293c] hover:bg-gray-100 transition-colors"
                      >
                        <span className="pr-2">{faq.q}</span>
                        {isOpen ? <FaChevronUp className="text-[#f1534f] text-xs flex-shrink-0" /> : <FaChevronDown className="text-gray-400 text-xs flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs text-gray-600 border-t border-gray-100 leading-relaxed">
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