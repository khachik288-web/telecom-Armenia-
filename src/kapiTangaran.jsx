import React, { useState, useEffect, useCallback } from 'react';
import './kapiTangaran.css';
import { Container } from 'react-bootstrap';

export default function KapiTangaran() {
return (
      <>
      <div className='kapitangaran'>
        <h1>Կապի թանգարան</h1>
        <p>Team Telecom Armenia-ն հանդիսանում է Հայաստանում առաջին տելեկոմ ցանցի ժառանգորդը։ Ունենալով ոլորտում ծառայությունների մատուցման ավելի քան 100 տարվա պատմություն և ստանձնելով կապի զարգացման պատմության պահպանումն ու նոր սերունդներին փոխանցելու պատասխանատվությունը՝ ընկերությունը հետաքրքրվող բոլոր անձանց առաջարկում է այցելել Հայաստանում միակ Կապի թանգարան։</p>
        <p>Թանգարանը հիմնադրվել է 2012 թվականին։ Այստեղ ներկայացված են Հայաստանում կապի զարգացման պատմությանը վերաբերող նյութեր։ Թանգարանի այցելուները կարող են ծանոթանալ Հայաստանում հեռահաղորդակցության էվոլյուցիային, տեսնել կապի սարքեր՝ 19-րդ դարից սկսած մինչև ֆիքսված, բջջային և ինտերնետ կապի թվային ժամանակակից միջոցներ։</p>
        <img src="https://www.telecomarmenia.am/file_manager/museum/Museum.JPG" className="nkar" />
        <p>Կապի թանգարանի մուտքն անվճար է: Այցելությունները կազմակերպվում են աշխատանքային օրերին՝ նախնական գրանցմամբ։ Գրանցման համար անհրաժեշտ է զանգահարել +374 99 000811 հեռախոսահամարին կամ գրել museum@telecomarmenia.am էլ․ հասցեին։ Թանգարանը գտնվում է Երևանի Ազատության պողոտա 24/1 հասցեում։</p>
        <p>Եթե ցանկանում եք ծանոթանալ թանգարանի ցուցանմուշներին, բայց չեք կարող ֆիզիկապես այցելել, առաջարկում ենք կատարել վիրտուալ շրջայց։</p>
      </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12189.030229631955!2d44.481542287158206!3d40.203333400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd4127c77515%3A0xec0be1efaa483471!2zVGVhbSBUZWxlY29tIEFybWVuaWEgKNCa0L7QvNC40YLQsNGBKQ!5e0!3m2!1sru!2sam!4v1783673379380!5m2!1sru!2sam"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Team Telecom Armenia Location"
            className='karta'
        ></iframe>
      </>
    );
}