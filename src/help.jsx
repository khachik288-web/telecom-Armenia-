import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Form, Button } from 'react-bootstrap';
import { 
  FaQuestionCircle, 
  FaMobileAlt, 
  FaUser, 
  FaListAlt, 
  FaSearch, 
  FaChevronRight,
  FaCog
} from 'react-icons/fa';

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('faq'); // faq, devices, service, ussd
  const [activeCategory, setActiveCategory] = useState('mobile');

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16">
      {/* 1. HERO BANNER */}
      <div className="bg-[#8ecae6] h-48 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00293c_2px,transparent_2px)] [background-size:16px_16px]"></div>
      </div>

      <Container className="relative -mt-20 z-10">
        {/* 2. TOP TABS NAVIGATION */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 grid grid-cols-1 md:grid-cols-4 overflow-hidden mb-8">
          <button
            onClick={() => setActiveTab('faq')}
            className={`p-5 flex flex-col items-center justify-center gap-2 border-b md:border-b-0 md:border-r border-slate-100 transition-colors ${
              activeTab === 'faq' ? 'border-b-4 border-b-[#f1534f] text-[#00293c] font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FaQuestionCircle className={`text-3xl ${activeTab === 'faq' ? 'text-[#00293c]' : 'text-slate-400'}`} />
            <span className="text-sm text-center font-medium">Հաճախ տրվող հարցեր</span>
          </button>

          <button
            onClick={() => setActiveTab('devices')}
            className={`p-5 flex flex-col items-center justify-center gap-2 border-b md:border-b-0 md:border-r border-slate-100 transition-colors ${
              activeTab === 'devices' ? 'border-b-4 border-b-[#f1534f] text-[#00293c] font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FaMobileAlt className={`text-3xl ${activeTab === 'devices' ? 'text-[#00293c]' : 'text-slate-400'}`} />
            <span className="text-sm text-center font-medium">Սարքերի կարգավորումներ</span>
          </button>

          <button
            onClick={() => setActiveTab('service')}
            className={`p-5 flex flex-col items-center justify-center gap-2 border-b md:border-b-0 md:border-r border-slate-100 transition-colors ${
              activeTab === 'service' ? 'border-b-4 border-b-[#f1534f] text-[#00293c] font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FaUser className={`text-3xl ${activeTab === 'service' ? 'text-[#00293c]' : 'text-slate-400'}`} />
            <span className="text-sm text-center font-medium">Բաժանորդային սպասարկում</span>
          </button>

          <button
            onClick={() => setActiveTab('ussd')}
            className={`p-5 flex flex-col items-center justify-center gap-2 transition-colors ${
              activeTab === 'ussd' ? 'border-b-4 border-b-[#f1534f] text-[#00293c] font-bold bg-slate-50' : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FaListAlt className={`text-3xl ${activeTab === 'ussd' ? 'text-[#00293c]' : 'text-slate-400'}`} />
            <span className="text-sm text-center font-medium">USSD հրահանգներ և օգտակար համարներ</span>
          </button>
        </div>

        {/* BREADCRUMB */}
        <div className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <a href="/" className="hover:underline text-slate-600">Գլխավոր</a> &gt;
          <a href="#help" className="hover:underline text-slate-600">Անհատներին</a> &gt;
          <span className="text-slate-400">Օգնություն</span>
        </div>

        {/* ================= TAB 1: FAQ ================= */}
        {activeTab === 'faq' && (
          <div>
            <h1 className="text-3xl font-bold text-[#00293c] mb-8">Հաճախ տրվող հարցեր</h1>
            <Row className="g-4">
              <Col lg={4}>
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                  {[
                    { id: 'mobile', name: 'Բջջային կապ' },
                    { id: 'bonus', name: 'Team Բոնուս' },
                    { id: 'internet', name: 'Ինտերնետ' },
                    { id: 'fixed', name: 'Ֆիքսված հեռախոսակապ և Տան համար' },
                    { id: 'payments', name: 'Վճարումներ' },
                    { id: 'cabinet', name: 'Անձնական գրասենյակ' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-5 py-3.5 text-sm font-medium flex justify-between items-center border-b border-slate-100 last:border-none transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-[#8ecae6] text-[#00293c] font-semibold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {cat.name}
                      {activeCategory === cat.id && <FaChevronRight className="text-xs text-[#00293c]" />}
                    </button>
                  ))}
                </div>
              </Col>

              <Col lg={8}>
                <Accordion defaultActiveKey="0" className="faq-accordion">
                  <Accordion.Item eventKey="0" className="mb-2 border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>USSD հրահանգներ</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      Հիմնական USSD հրահանգները կարող եք հավաքել անմիջապես Ձեր հեռախոսից հաշվեկշիռը, ռոումինգը կամ ծառայությունները ստուգելու համար։
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1" className="mb-2 border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>Հաշվեկշռի ստուգում</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      Հաշվեկշիռը ստուգելու համար հավաքեք *102# կամ օգտագործեք My Team հավելվածը:
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2" className="mb-2 border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>Փաստաթղթեր</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      Պայմանագրի ձևակերպման համար անհրաժեշտ փաստաթղթերի ցանկը:
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3" className="mb-2 border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>Լիմիտ</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      Վարկային սահմանաչափի և լիմիտների կարգավորումներ:
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4" className="mb-2 border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>SMS կարգավորումներ</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      SMS կենտրոնի համարի կարգավորում (+37491000001):
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5" className="mb-2 border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>Ռոումինգ</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      Արտերկիր մեկնելուց առաջ ռոումինգի ակտիվացման հրահանգներ:
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6" className="border rounded-lg overflow-hidden shadow-sm">
                    <Accordion.Header>ԿՈՄԲՈ</Accordion.Header>
                    <Accordion.Body className="text-slate-600 text-sm">
                      ԿՈՄԲՈ փաթեթների ակտիվացման և կառավարման պայմանները:
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </div>
        )}

        {/* ================= TAB 2: DEVICES ================= */}
        {activeTab === 'devices' && (
          <div>
            <h1 className="text-3xl font-bold text-[#00293c] mb-6">Սարքերի կարգավորումներ</h1>
            
            <div className="flex flex-wrap gap-3 mb-4 max-w-2xl">
              <div className="relative flex-1 min-w-[240px]">
                <Form.Control 
                  type="text" 
                  placeholder="Որոնել" 
                  className="rounded-full bg-slate-100 border-none pl-10 py-2.5 text-sm"
                />
                <FaSearch className="absolute left-3.5 top-3.5 text-slate-400 text-sm" />
              </div>
              <Button className="bg-[#f1534f] hover:bg-[#d9433f] border-none rounded-full px-8 font-semibold text-sm">
                Որոնել
              </Button>
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Ընտրեք ձեզ հետաքրքրող հարցը կամ սարքի մոդելը, կարգավորումները տեսնելու համար
            </p>

            <Row className="g-3 max-w-3xl mb-12">
              <Col md={6}>
                <Form.Select className="rounded-full bg-slate-100 border-none py-2.5 text-sm text-slate-600">
                  <option>Ինչ անել</option>
                  <option>Կարգավորել APN / Ինտերնետ</option>
                  <option>Ակտիվացնել eSIM</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Select className="rounded-full bg-slate-100 border-none py-2.5 text-sm text-slate-600">
                  <option>Սարքավորման մոդել</option>
                  <option>iPhone / iOS</option>
                  <option>Android / Samsung / Xiaomi</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="flex justify-center items-center py-16 opacity-10">
              <FaCog className="text-9xl text-slate-400 animate-spin-slow" />
            </div>
          </div>
        )}

        {/* ================= TAB 3: SUBSCRIBER SERVICE ================= */}
        {activeTab === 'service' && (
          <div>
            <h1 className="text-3xl font-bold text-[#00293c] mb-8">ԲԱԺԱՆՈՐԴԱՅԻՆ ՍՊԱՍԱՐԿՈՒՄ</h1>

            <Row className="g-4">
              {[
                { title: "Սակագնային փաթեթի փոփոխում", desc: "Ընտրի'ր քեզ առավել հարմար սակագնային փաթեթը" },
                { title: "Վճարման վավերականության ժամկետ", desc: "" },
                { title: "Համարի փոխարինում", desc: "Ցանկացած պահին Դուք կարող եք փոխել Ձեր համարը" },
                { title: "«Գեղեցիկ» համարի ընտրություն", desc: "Դուք կարող եք ընտրել այն հեռախոսահամարը, որը Ձեզ ավելի է..." },
                { title: "Համարի արգելափակում", desc: "Անվճար արգելափակեք հեռախոսահամարը" },
                { title: "PIN/PUK կոդերի վերականգնում", desc: "Վերականգնեք Ձեր PIN/PUK կոդերը մեր սպասարկման գրասենյակներում" }
              ].map((card, idx) => (
                <Col md={6} lg={4} key={idx}>
                  <div className="bg-[#f8f9fa] rounded-2xl p-6 h-64 flex flex-col justify-between border border-slate-100 hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="text-xl font-bold text-[#00293c] mb-3 leading-snug">{card.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                    <div>
                      <button className="border border-[#f1534f] text-[#f1534f] hover:bg-[#f1534f] hover:text-white transition-colors rounded-full px-6 py-1.5 text-xs font-semibold">
                        Ավելին
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* ================= TAB 4: USSD (PLACEHOLDER) ================= */}
        {activeTab === 'ussd' && (
          <div className="py-12 text-center">
            <h1 className="text-3xl font-bold text-[#00293c] mb-4">USSD հրահանգներ և օգտակար համարներ</h1>
            <p className="text-slate-500">Այս բաժինը շուտով կհամալրվի ամբողջական տվյալներով:</p>
          </div>
        )}
      </Container>
    </div>
  );
}