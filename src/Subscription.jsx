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

export default function Subscription() {
  const [openFaq, setOpenFaq] = useState(null);

  const calendarImg = "https://www.telecomarmenia.am/images/block_with_text/1/16832074487761.png";
  const simCardsImg = "https://www.telecomarmenia.am/images/block_with_text/1/16832074143841.png";

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const leftFaqs = [
    {
      q: "Ի՞նչ է նշանակում բաժանորդագրությամբ գնել հեռախոսահամար:",
      a: "Բաժանորդագրությամբ հեռախոսահամար գնելը հնարավորություն է տալիս ձեռք բերել գեղեցիկ համար՝ պարտավորվելով օգտվել մեր ծառայություններից որոշակի ժամանակահատվածում:"
    },
    {
      q: "Ստորև կարող եք ավելի մանրամասն ծանոթանալ բաժանորդագրությամբ հեռախոսահամարի ձեռք բերման պայմաններին:",
      a: "Մանրամասն պայմաններին կարող եք ծանոթանալ յուրաքանչյուր փաթեթի ձևակերպման էջում կամ կապ հաստատելով մեր սպասարկման կենտրոնի հետ:"
    }
  ];

  const rightFaqs = [
    {
      q: "Ի՞նչպես ձեռք բերել հեռախոսահամար բաժանորդագրությամբ:",
      a: "Ընտրեք ցանկալի համարը e-Shop-ում, պատվերի ձևակերպման ժամանակ ընտրեք բաժանորդագրության տարբերակը և հետևեք հրահանգներին:"
    },
    {
      q: "Ի՞նչ է պատահում, եթե բաժանորդային պայմանագիրը դադարեցվի մինչև նշված ժամկետը:",
      a: "Պայմանագրի վաղաժամկետ լուծման դեպքում կարող են կիրառվել տույժեր կամ վճարման հատուկ պայմաններ համաձայն պայմանագրի:"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f4f6f9] text-[#00293c]">
      
      {/* 1. HERO SECTION (Light Theme) */}
      <div className="bg-[#f4f6f9] py-12 md:py-20 border-b border-gray-200">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="text-center mb-8 mb-lg-0">
              <div className="relative inline-block group">
                <img 
                  src={calendarImg} 
                  alt="Գնի՛ր համար բաժանորդագրությամբ" 
                  className="max-h-[350px] md:max-h-[420px] w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-lg"
                />
              </div>
            </Col>
            <Col lg={6} className="text-left">
              <h1 className="text-4xl md:text-5xl font-black text-[#00293c] mb-6 leading-tight">
                Գնի՛ր համար <br /> բաժանորդա-<br />գրությամբ
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-8 max-w-xl leading-relaxed font-medium">
                Գնի՛ր գեղեցիկ համար ընդամենը բաժանորդագրվելով մեր ծառայություններին
              </p>
              <a 
                href="/eshop" 
                className="inline-block bg-[#f1534f] text-white font-bold px-10 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 no-underline active:scale-95"
              >
                e-Shop
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. SECTION: HOW TO BUY BY SUBSCRIPTION (Dark Theme) */}
      <div className="bg-[#00293c] text-white py-16 md:py-20">
        <Container className="max-w-6xl">
          
          <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-16 tracking-wide">
            Ինչպես գնել համար բաժանորդագրությամբ
          </h2>

          <Row className="g-4 text-center mb-20">
            <Col xs={12} sm={6} md={3}>
              <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-6 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                  <FaShoppingCart />
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  Ընտրեք գեղեցիկ համար eShop-ից, ծանոթացեք բաժանորդագրության պայմաններին և ավելացրեք զամբյուղ:
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                  <FaUserCircle />
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  Պատվեր ձևակերպման ժամանակ ընտրեք "Բաժանորդագրություն" դաշտը և հաստատեք պատվերը:
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-6 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                  <FaCommentDots />
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  Մեր մասնագետները կապ կհաստատեն ձեզ հետ պատվերի հաստատման և համարի գրանցման վերաբերյալ:
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={3}>
              <div className="flex flex-col items-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 h-full">
                <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-6 text-2xl text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                  <FaShoppingBag />
                </div>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  Սպասեք ձեր նոր համարի առաքմանը և ակտիվացմանը:
                </p>
              </div>
            </Col>
          </Row>

          {/* SIM CARDS PROMO */}
          <div className="pt-8">
            <Row className="align-items-center g-8">
              <Col lg={6} className="text-center mb-8 mb-lg-0">
                <div className="relative inline-block group">
                  <img 
                    src={simCardsImg} 
                    alt="Գեղեցիկ համարներ" 
                    className="max-h-[320px] md:max-h-[380px] w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-2xl"
                  />
                </div>
              </Col>
              <Col lg={6} className="text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Գեղեցիկ <br /> համարներ
                </h2>
                <p className="text-slate-300 text-sm md:text-base mb-8 max-w-lg leading-relaxed font-light">
                  Գեղեցիկ համարները հասանելի են ապառիկ տարբերակով` VTB բանկի միջոցով
                </p>
                <a 
                  href="/eshop" 
                  className="inline-block bg-[#f1534f] text-white font-bold px-8 py-3 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-lg hover:shadow-red-500/30 no-underline active:scale-95"
                >
                  Գնել հիմա
                </a>
              </Col>
            </Row>
          </div>

        </Container>
      </div>

      {/* 3. SECTION: FAQ (Light Gradient Background) */}
      <div className="bg-gradient-to-b from-[#edf3f8] to-[#f4f7fa] text-[#00293c] py-16 md:py-20">
        <Container className="max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-[#00293c] tracking-wide">
            Հաճախ տրվող հարցեր
          </h2>

          <Row className="g-4">
            {/* Left Column FAQs */}
            <Col md={6}>
              <div className="space-y-4">
                {leftFaqs.map((faq, idx) => {
                  const id = `left-${idx}`;
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

            {/* Right Column FAQs */}
            <Col md={6}>
              <div className="space-y-4">
                {rightFaqs.map((faq, idx) => {
                  const id = `right-${idx}`;
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