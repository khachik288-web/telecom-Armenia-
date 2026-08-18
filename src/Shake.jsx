import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { FaChevronDown } from 'react-icons/fa';

export default function Shake() {
  const faqData = [
    {
      q: 'Ո՞վ կարող է օգտվել գովազդային վիճակախաղից',
      a: 'Գովազդային վիճակախաղին կարող են մասնակցել Team-ի բոլոր ֆիզիկական անձ հանդիսացող բաժանորդները:'
    },
    {
      q: 'Որտե՞ղ կարող եմ ծանոթանալ գովազդային վիճակախաղի պայմաններին:',
      a: 'Պայմաններին կարող եք ծանոթանալ My Team հավելվածի Shake բաժնում:'
    },
    {
      q: 'Պրոմոկոդեր` Karapp',
      a: 'Karapp հավելվածի պրոմոկոդերը ակտիվացվում են համապատասխան հարթակում:'
    },
    {
      q: 'Ի՞նչ պարբերականությամբ կարող եմ մասնակցել գովազդային վիճակախաղին:',
      a: 'Մասնակցել կարող եք օրական 1 անգամ:'
    },
    {
      q: 'Ի՞նչ է անհրաժեշտ գովազդային վիճակախաղին միանալու համար:',
      a: 'Անհրաժեշտ է ներբեռնել My Team հավելվածը:'
    },
    {
      q: 'Ինչպե՞ս մասնակցել գովազդային վիճակախաղին:',
      a: 'Մուտք գործեք Shake բաժին և թափահարեք հեռախոսը:'
    },
    {
      q: 'Ի՞նչ անակնկալներ կարող եմ ստանալ:',
      a: 'Կարող եք շահել սմարթֆոններ, ականջակալներ, ինտերնետ փաթեթներ և այլն:'
    },
    {
      q: 'Ինչպե՞ս ստանամ իմ անակնկալը:',
      a: 'Մրցանակը ակտիվանում է ավտոմատ կամ ստացված հրահանգի համաձայն:'
    },
    {
      q: 'Ինչպե՞ս ներբեռնեմ My Team հավելվածը, որպեսզի միանամ Շեյքին:',
      a: 'Հավելվածը հասանելի է App Store-ում և Google Play-ում:'
    },
    {
      q: 'Հեռախոսահամարի անվանափոխության դեպքում ՄԲ-երը պահպանվո՞ւմ են:',
      a: 'Այո, կուտակված ՄԲ-երը պահպանվում են:'
    },
    {
      q: 'buy.am պրոմոկոդ',
      a: 'Պրոմոկոդը կիրառելի է buy.am առցանց հարթակում:'
    }
  ];

  return (
    <div className="bg-white text-[#00293c]">
      {/* 1. HERO SECTION BANNER */}
      <div 
        className="relative w-full min-h-[480px] bg-[#00425a] flex items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: `url('https://www.telecomarmenia.am/images/sliders_block_slides/1/17399730277817.png')` }}
      >
        <Container>
          <div className="max-w-md bg-[#00293c]/80 p-8 rounded-2xl text-white backdrop-blur-sm">
            <h1 className="text-3xl font-bold mb-3 text-[white]">Շեյքի՛ր և Շահի՛ր</h1>
            <p className="text-slate-200 mb-6 text-lg">Բազմաթիվ նվերներ</p>
            <button className="bg-[#f1534f] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#d9433f] transition-all">
              Միանալ
            </button>
          </div>
        </Container>
      </div>

      {/* 2. GIFTS SECTION */}
      <div className="py-16 bg-[#f8f9fa]">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="text-4xl font-extrabold mb-6 leading-tight text-[#00293c]">
                Ստացի՛ր բազմաթիվ այլ նվերներ
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Շեյքիր սմարթֆոնդ ամեն օր և ստացիր հնարավորություն շահելու՝ iPhone 15, Apple AirPods Max, 
                Սթայլեր Dyson, smart watch, powerbank, ականջակալ և շատ այլ նվերներ:
              </p>
            </Col>
            <Col lg={6}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://www.telecomarmenia.am/images/block_with_text/1/1785733079117.png" 
                  alt="Shake Gifts" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. HOW TO PARTICIPATE SECTION */}
      <div className="py-16 bg-white text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-[#00293c] mb-12">
            Ինչպե՞ս մասնակցել
          </h2>
          <Row className="g-4 justify-content-center">
            <Col md={4} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img 
                  src="https://www.telecomarmenia.am/file_manager/new_shake/am.png" 
                  alt="Step 1" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-slate-700 font-medium px-4 mb-4">
                Գրանցվի՛ր My Team հավելվածում
              </p>
              <button className="bg-[#f1534f] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#d9433f] transition-all">
                ՆԵՐԲԵՌՆԵԼ
              </button>
            </Col>

            <Col md={4} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img 
                  src="https://www.telecomarmenia.am/file_manager/icons/logo_icon%20(2).png" 
                  alt="Step 2" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-slate-700 font-medium px-4">
                Մուտք գործի՛ր Shake բաժին
              </p>
            </Col>

            <Col md={4} className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img 
                  src="https://www.telecomarmenia.am/file_manager/new_shake/logoshake_icon.png" 
                  alt="Step 3" 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="text-slate-700 font-medium px-4">
                Շեյքի՛ր ու ստացի՛ր անակնկալներ ամեն օր
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. OTHER OPERATOR USERS SECTION */}
      <div className="py-16 bg-[#f8f9fa]">
        <Container>
          <h2 className="text-3xl font-extrabold text-[#00293c] mb-12 text-center">
            Եթե այլ օպերատորի բաժանորդ ես
          </h2>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <ul className="space-y-4 text-slate-700 font-medium list-disc pl-5">
                <li className="leading-relaxed">
                  Շեյքիր ամեն օր, կուտակիր ՄԲ-եր և Team Բոնուս միավորներ
                </li>
                <li className="leading-relaxed">
                  Դարձիր Team բաժանորդ Շեյք ակցիայի շրջանակում, ակտիվացրու կուտակած Բոնուս միավորներդ 3 օր ժամկետով` վճարելով ընդամենը 1 դրամ յուրաքանչյուր շահած ՄԲ փաթեթի դիմաց
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <div className="rounded-2xl p-4 bg-white shadow-sm border border-slate-100 flex justify-center">
                <img 
                  src="https://www.telecomarmenia.am/file_manager/new_shake/shake%20lending-07.png" 
                  alt="Other operator info" 
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. BECOME TEAM SUBSCRIBER BANNER */}
      <div className="py-14 bg-[#00425a] text-white text-center">
        <Container>
          <h2 className="text-3xl font-extrabold mb-3">
            Դարձի՛ր Team բաժանորդ
          </h2>
          <p className="text-slate-200 text-lg mb-6">
            Ձեռք բեր նոր համար կամ միացիր մեզ քո համարով և օգտվիր Team-ի բոլոր առավելություններից
          </p>
          <button className="bg-[#f1534f] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#d9433f] transition-all">
            Միանալ
          </button>
        </Container>
      </div>

      {/* 6. FAQ SECTION */}
      <div className="py-16 bg-white">
        <Container className="max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#00293c]">
            Հաճախ տրվող հարցեր
          </h2>
          <Accordion defaultActiveKey="0" flush className="shake-faq-accordion">
            <Row>
              <Col md={6}>
                {faqData.slice(0, 6).map((item, idx) => (
                  <Accordion.Item eventKey={String(idx)} key={idx} className="mb-3 border rounded-lg overflow-hidden">
                    <Accordion.Header>{item.q}</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      {item.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Col>
              <Col md={6}>
                {faqData.slice(6).map((item, idx) => (
                  <Accordion.Item eventKey={String(idx + 6)} key={idx + 6} className="mb-3 border rounded-lg overflow-hidden">
                    <Accordion.Header>{item.q}</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      {item.a}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Col>
            </Row>
          </Accordion>
        </Container>
      </div>
    </div>
  );
}