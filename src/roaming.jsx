import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhoneAlt, FaGlobe, FaCommentAlt } from 'react-icons/fa';

export default function Roaming() {
  return (
    <div className="w-full bg-white text-[#00293c]">
      {/* 1. HERO SECTION (Самолет и банер) */}
      <Container className="py-10">
        <Row className="g-4 align-items-stretch">
          <Col md={6}>
            <div className="bg-[#71777d] text-white p-8 rounded-2xl h-full flex flex-col justify-center items-start">
              <h1 className="text-3xl font-bold mb-4 leading-tight text-[white]">
                Բացահայտենք<br />աշխարհը
              </h1>
              <p className="text-gray-200 mb-6 text-sm">
                Ռոումինգ, որ գալիս է քեզ հետ
              </p>
              <button className="bg-[#f1534f] text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-[#d9433f] transition-colors">
                Քարտեզ
              </button>
            </div>
          </Col>

          <Col md={6}>
            <div className="relative rounded-2xl overflow-hidden shadow-sm h-full min-h-[300px]">
              <img
                src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17857625505622.png"
                alt="Roaming Plane"
                className="w-full h-full object-cover"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* 2. ИՆՏԵՐՆԵՏ ՌՈՈՒՄԻՆԳՈՒՄ (Темно-синий блок) */}
      <div className="bg-[#003B5C] text-white py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold mb-12">
            Ինտերնետ ռոումինգում
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b border-cyan-800 pb-8 mb-8">
            <div>
              <p className="text-sm opacity-90">Ռոումինգ փաթեթ</p>
              <p className="text-lg font-bold">1 ԳԲ + 2000 դրամ</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Ռոումինգ փաթեթ</p>
              <p className="text-lg font-bold">4 ԳԲ / 5000 դրամ</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Ռոումինգ փաթեթ</p>
              <p className="text-lg font-bold">10 ԳԲ / 12000 դրամ</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-16">
            <div>
              <p className="text-sm opacity-90">Ռոումինգ փաթեթ</p>
              <p className="text-lg font-bold">20 ԳԲ / 20000 դրամ</p>
            </div>
            <div>
              <p className="text-sm opacity-90">Ռոումինգ փաթեթ 1 ԳԲ (Ռուսաստան, Վրաստան)</p>
              <p className="text-lg font-bold">500 դրամ</p>
            </div>
          </div>

          <h3 className="text-center text-3xl font-bold mt-16 mb-10">
            Ավելի քան 140 երկրում
          </h3>

          <Row className="text-center g-4">
            <Col md={4}>
              <div className="flex flex-col items-center">
                <FaGlobe className="text-4xl mb-3 text-cyan-300" />
                <h4 className="font-bold text-lg">Զանգեր</h4>
                <p className="text-xs text-gray-300 mt-1">Սկսած 29,99 դր/րոպե</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="flex flex-col items-center">
                <FaPhoneAlt className="text-4xl mb-3 text-cyan-300" />
                <h4 className="font-bold text-lg">Ինտերնետ</h4>
                <p className="text-xs text-gray-300 mt-1">Սկսած 0.5 դր/ՄԲ</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="flex flex-col items-center">
                <FaCommentAlt className="text-4xl mb-3 text-cyan-300" />
                <h4 className="font-bold text-lg">SMS</h4>
                <p className="text-xs text-gray-300 mt-1">Սկսած 25 դր</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. ТАБЛИЦА ТАРИФОВ 9 դր/ՄԲ */}
      <Container className="py-16">
        <h2 className="text-center text-3xl font-bold mb-2">
          Ինտերնետ Ռոումինգում 9 դր/ՄԲ
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8 underline cursor-pointer">
          Հասանելի ուղղությունների և սակագների ամբողջական ցանկ
        </p>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="flex justify-between p-4 border-b border-gray-200">
            <span>Ինտերնետ</span>
            <span className="font-bold">9 դր/ՄԲ*</span>
          </div>
          <div className="flex justify-between p-4 border-b border-gray-200">
            <span>Մուտքային զանգեր և ելքային զանգեր դեպի Հայաստան</span>
            <span className="font-bold">150 դր/ր</span>
          </div>
          <div className="flex justify-between p-4 border-b border-gray-200">
            <span>Տեղական և միջազգային զանգեր</span>
            <span className="font-bold">250 դր/ր</span>
          </div>
          <div className="flex justify-between p-4">
            <span>SMS</span>
            <span className="font-bold">25 դր</span>
          </div>
        </div>

        <p className="text-xs text-gray-500 max-w-4xl mx-auto text-center leading-relaxed">
          *ԱՄՆ, Ալբանիա, Անդորրա, Անգլիա, Անտիգուա և Բարբուդա, Արգենտինա, Ավստրալիա, Ավստրիա, Բահամյան կղզիներ, Բանգլադեշ, Բարբադոս, Բելառուս, Բելգիա, Բոսնիա և Հերցեգովինա, Բուլղարիա, Գերմանիա, Գանա, Գրենադա, Գրենլանդիա, Դանիա, Դոմինիկա, Եգիպտոս, Էստոնիա, Թայլանդ, Թայվան, Իսլանդիա, Իսպանիա, Իսրայել, Իտալիա, Կանադա, Կայմանյան կղզիներ, Կիպրոս, Կոնգո, Կոսովո, Քաթար, Ղազախստան, Ղրղզստան, Ճապոնիա, Հունաստան, Հունգարիա, Խորվաթիա, Լատվիա, Լեհաստան, Լեսոտո, Լիտվա, Լիխտենշտեյն, Լյուքսեմբուրգ, Մակեդոնիա, Մալայզիա, Մալթա, Մարոկկո, Մեծ Բրիտանիա, Մեն կղզի, Մյանմար, Մոզամբիկ, Մոլդովա, Մոնտենեգրո, Նիդերլանդներ, Նոր Զելանդիա, Նորվեգիա, Պորտուգալիա, Ռուսաստան, Ռումինիա, Սերբիա, Սլովակիա, Սլովենիա, Շվեդիա, Շվեյցարիա, Չեխիա, Չինաստան, Տաջիկստան, Ուկրաինա, Ֆինլանդիա, Ֆրանսիա, Վրաստան
        </p>
      </Container>

      {/* 4. ЛԱՎԱԳՈՒՅՆ ՍԱԿԱԳՆԵՐԸ */}
      <div className="bg-gray-50 py-16">
        <Container>
          <h2 className="text-center text-3xl font-bold mb-4 text-[black]">
            Լավագույն սակագները
          </h2>
          <div className="flex justify-center items-center gap-3 mb-4">
            <span className="text-2xl">🇮🇹</span>
            <span className="text-2xl">🇷🇺</span>
            <span className="text-2xl">🇬🇪</span>
            <span className="text-2xl">🇺🇦</span>
          </div>
          <p className="text-center text-xs text-gray-500 mb-8">
            Իտալիա (Wind), Ռուսաստան (Beeline), Վրաստան (Cellfie), Ուկրաինա (Kyivstar)
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 mb-16">
            <div className="flex justify-between p-4 border-b border-gray-200">
              <span>Ինտերնետ</span>
              <span className="font-bold">9 դր/ՄԲ</span>
            </div>
            <div className="flex justify-between p-4 border-b border-gray-200">
              <span>Մուտքային և ելքային զանգեր դեպի Team* բջջային ցանց</span>
              <span className="font-bold">29.99 դր/ր</span>
            </div>
            <div className="flex justify-between p-4">
              <span>Տեղական և միջազգային զանգեր</span>
              <span className="font-bold">250 դր/ր</span>
            </div>
          </div>

          <h2 className="text-center text-3xl font-bold mb-10 text-[black]">
            Օգտակար տեղեկատվություն
          </h2>
          <Row className="g-4 max-w-4xl mx-auto">
            <Col md={6}>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-48">
                <h3 className="font-bold text-lg">Ռոումինգի միացման պայմանները</h3>
                <button className="bg-[#f1534f] text-white px-4 py-2 rounded-xl text-xs font-semibold w-fit">
                  Մանրամասն
                </button>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-48">
                <div>
                  <h3 className="font-bold text-lg">Ռոումինգի սակագները ծովում և օդում</h3>
                  <p className="text-xs text-gray-400 mt-2">Մնա առցանց, նույնիսկ ծովում և օդում</p>
                </div>
                <button className="bg-[#f1534f] text-white px-4 py-2 rounded-xl text-xs font-semibold w-fit">
                  Մանրամասն
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 5. ՀԱՃԱԽ ՏՐՎՈՂ ՀԱՐՑԵՐ (FAQ) */}
      <Container className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8 text-[black]">
          Հաճախ տրվող հարցեր
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          <select className="p-3 border border-gray-200 rounded-lg w-full text-slate-600 bg-white shadow-sm">
            <option>Ռոումինգ Հյուրերին</option>
          </select>
          <select className="p-3 border border-gray-200 rounded-lg w-full text-slate-600 bg-white shadow-sm">
            <option>Ինչպե՞ս լիցքավորել հաշիվը արտերկրում</option>
          </select>
        </div>
      </Container>
    </div>
  );
}