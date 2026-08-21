import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Koreez() {
  return (
    <div className="w-full min-h-screen bg-white text-[#00293c]">

      {/* 1. HERO BANNER */}
      <div className="bg-[#d7e5f0] py-12 md:py-20 relative overflow-hidden">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0">
              <div className="bg-[#537b93] p-8 md:p-12 rounded-2xl text-white shadow-xl max-w-lg">
                <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-wide">
                  Koreez
                </h1>
                <p className="text-sm md:text-base font-medium mb-8 leading-relaxed opacity-95">
                  Սովորի՛ր խաղալով, Մրցի՛ր ընկերներիդ հետ, Հաղթի՛ր գիտելիքով
                </p>
                <button className="bg-[#f1534f] text-white font-bold px-8 py-2.5 rounded-full text-sm hover:bg-[#d9433f] transition-all duration-300 shadow-md hover:shadow-red-500/30 active:scale-95">
                  Ավելին
                </button>
              </div>
            </Col>

            <Col lg={6} className="text-center">
              <img
                src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17733177317883.png"
                alt="Koreez Hero"
                className="max-h-[380px] md:max-h-[440px] w-auto mx-auto object-contain filter drop-shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 2. WHAT IS KOREEZ */}
      <div className="bg-[#003853] text-white py-16 md:py-20 border-b border-cyan-900/40">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0 text-center">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-cyan-500/20 group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17733165160539.png"
                  alt="What is Koreez"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ի՞նչ է Koreez-ը:
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
                Koreez-ում դու կարող ես անցնել քո ամբողջ դպրոցական ծրագիրը խաղի և մրցակցության միջոցով:
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. KOREEZ ADVANTAGES */}
      <div className="bg-[#003853] text-white py-16 md:py-20 border-b border-cyan-900/40">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="order-2 order-lg-1">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Koreez-ի առավելությունները
              </h2>
              <ul className="space-y-3 text-xs md:text-sm text-gray-200 list-disc list-inside font-light leading-relaxed">
                <li>
                  <strong className="font-semibold text-white">Սովորի՛ր քո դասերը՝</strong> ազգային ուսումնական ծրագրի հիման վրա:
                </li>
                <li>
                  <strong className="font-semibold text-white">Խաղա՛ ու հավաքի՛ր</strong> միավորներ:
                </li>
                <li>
                  <strong className="font-semibold text-white">Մրցի՛ր ընկերներիդ հետ</strong> և դարձի՛ր լավագույնը:
                </li>
              </ul>
            </Col>

            <Col lg={6} className="order-1 order-lg-2 text-center mb-8 mb-lg-0">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-cyan-500/20 group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17733169461711.png"
                  alt="Koreez Advantages"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. SAFE & INTERESTING LEARNING */}
      <div className="bg-[#003853] text-white py-16 md:py-20">
        <Container className="max-w-6xl">
          <Row className="align-items-center g-8">
            <Col lg={6} className="mb-8 mb-lg-0 text-center">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-cyan-500/20 group">
                <img
                  src="https://www.telecomarmenia.am/images/block_with_text/1/17733183195181.png"
                  alt="Safe and Interesting Learning"
                  className="w-full max-h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Col>

            <Col lg={6}>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Անվտանգ և հետաքրքիր ուսուցում
              </h2>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
                Koreez-ը դարձնում է կրթական գործընթացն ավելի հետաքրքիր՝ ծնողներին տալով վստահություն, որ կրթական բովանդակությունն անվտանգ է և որակյալ:
              </p>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}