import React from "react";
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const DEFINITIONS = [
  <>
    «Տելեկոմ Արմենիա» ԲԲԸ-ի օնլայն խանութում ապրանքների առուվաճառքի սույն
    պայմանները և կանոնները (այսուհետ տեքստում՝ Կանոններ) սահմանում են
    «Տելեկոմ Արմենիա» ԲԲԸ-ի օնլայն խանութում ապրանքների առուվաճառքի
    ընդհանուր պայմանները և կանոնները, ինչպես նաև «Տելեկոմ Արմենիա» ԲԲԸ-ի
    օնլայն խանութում ապրանքների վաճառքն իրականացնելու ժամանակ Վաճառողի,
    գնորդների, առաքման ծառայության և այլ անձանց միջև փոխգործակցության
    կարգը:
  </>,
  <>Վաճառող – «Տելեկոմ Արմենիա» ԲԲԸ</>,
  <>
    Վաճառողի իրավաբանական հասցեն – Հայաստանի Հանրապետություն, 0014 Երևան,
    Ազատության փ. 24/1
  </>,
  <>Վաճառողի կոնտակտային հեռախոսահամարներ և էլ-փոստ</>,
  <>
    Գնորդը կարող է լինել ցանկացած գործունակ անձ, ով պատվեր է տեղադրում{" "}
    <a
      href="https://www.telecomarmenia.am"
      className="text-sky-600 font-bold underline hover:text-sky-700"
    >
      www.telecomarmenia.am
    </a>{" "}
    կայքում կամ պատվերում որպես ստացող նշված անձը
  </>,
  <>
    Օնլայն խանութ –{" "}
    <a
      href="https://www.telecomarmenia.am"
      className="text-sky-600 font-bold underline hover:text-sky-700"
    >
      www.telecomarmenia.am
    </a>{" "}
    դոմեն անվանմամբ սեփականության իրավունքով Վաճառողին պատկանող կայքը, ինչպես
    նաև ապրանքների վաճառքի համար նախատեսված ծրագրային ապահովման և
    սարքավորումների ամբողջությունը (ապարատա-ծրագրային համալիր), այսուհետ՝
    առցանց խանութ:
  </>,
  <>
    Վեբ կայք -{" "}
    <a
      href="https://www.telecomarmenia.am"
      className="text-sky-600 font-bold underline hover:text-sky-700"
    >
      www.telecomarmenia.am
    </a>
  </>,
  <>
    Ապրանք –քաղաքացիական իրավունքի օբյեկտ համարվող գույքը, որը չի հանդիսանում
    քաղաքացիական շրջանառությունից և ներկայացված է վաճառողի օնլայն խանութում:
  </>,
  <>
    Պատվեր – սույն Կանոններին համապատասխան կազմված ապրանքների գնման հարցում:
  </>,
  <>Առաքման ծառայություն – Գնորդի ապրանքը մատակարարող երրորդ անձ:</>,
];

const GENERAL_RULES = [
  <>
    Օնլայն խանութը պատասխանում է Վաճառողին և ղեկավարվում է նրա կողմից:
  </>,
  <>
    Օնլայն խանութում ձեռք բերելով ապրանք՝ Գնորդը լիովին համաձայնվում է և
    ընդունում է սույն Կանոնները:
  </>,
  <>
    Գնորդը համաձայնվում և ընդունում է սույն Կանոնները, սեղմելով «Ձանկերացել
    պատվերը» կոճակը, պատվերի ձևակերպման ավարտական փուլում:
  </>,
  <>
    Հատուկ անշահանության դեպքում Վաճառողն իրավունք ունի փոփոխել տվյալ
    համար գործող այս կամ այլ լրացուցիչ պայման:
  </>,
];

const BANK_TRANSFER_RULES = [
  <>Ապանց Հաճախորդին տեղեկացնելու հարցումներ կատարել և ստանալ տեղեկություն:</>,
  <>
    Վարկային պայմանագիր կնքելու դեպքում ուղյալ վարկային պայմանագրի գործողության
    ողջ ընթացքում ցանկացած պահին Հաճախորդին առանց նախապես տեղյալ պահելու
    Հաճախորդի ապագա ֆինանսական պարտավորությունների վերաբերյալ տեղեկատվություն:
  </>,
  <>
    Կատարել Հաճախորդի սեփական գույքերի վերաբերյալ հարցում ՀՀ ԿԱ Անչափ գույքի
    պետական կոմիտե և ստանալ սպառիչ տեղեկատվություն:
  </>,
  <>
    Կատարել հարցում ՀՀ Ծանապարհային ոստիկանություն և ստանալ Հաճախորդին
    պատկանող տրանսպորտային միջոցների վերաբերյալ ստանալ սպառիչ տեղեկատվություն:
  </>,
  <>
    Կատարել հարցում անշարժագային բազմունքներին և ստանալ Հաճախորդի առկա
    գրանցումների վերաբերյալ տեղեկատվություն:
  </>,
  <>
    Փոխանցել Հաճախորդի դրամական պարտավորությունների մասին իր ունեցած
    տեղեկատվությունը ՀՀ ԿԲ Վարկային Ռեգիստր և/կամ «ԱՁՌԱ Քրեդիտ Ռեփորտինգ» ԲԲԸ:
  </>,
  <>
    Կատարել «Նոր» սոցիալական ծառայությունների տեղեկոլոգիական և իրագելման
    կենտրոն և ինչպես վերջինիս տրամադրել Հաճախորդի մասին ցանկացած տեղեկություն:
  </>,
  <>
    Կատարել հարցում ապահովագրական ընկերություններին և ստանալ ցանկացած
    տեղեկատվություն՝ Հաճախորդին պատկանող տրանսպորտային միջոցների ապահովագրության
    վերաբերյալ:
  </>,
];

function NumberedList({ items }) {
  return (
    <ol className="flex flex-col gap-4 sm:gap-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-slate-100 last:border-none"
        >
          <span className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-sky-50 text-sky-600 font-bold text-xs sm:text-sm flex items-center justify-center">
            {i + 1}
          </span>
          <p className="text-[#3a4550] text-sm sm:text-[15px] leading-relaxed">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function EshPaymaner() {
  return (
    <div className="flex flex-col w-[92%] mx-auto md:w-[75%] md:mx-0 md:ml-[15%] lg:w-[65%] lg:ml-[350px] mt-10 sm:mt-16 md:mt-20 pb-20">
      <h3 className="text-xl sm:text-2xl font-bold text-[#00293c]">
        E-shop պայմաններ
      </h3>

      <div className="w-16 h-1 bg-sky-400 rounded-full mt-3 mb-6" />

      <p className="font-bold text-base sm:text-lg text-[#00293c] leading-relaxed">
        «Տելեկոմ Արմենիա» ԲԲԸ-ի օնլայն խանութում ապրանքների առուվաճառքի
        պայմաններ և կանոններ
      </p>

      <p className="text-[#666E75] font-bold mt-8 mb-3 text-sm sm:text-base">
        Սահմանումներ
      </p>
      <NumberedList items={DEFINITIONS} />

      <p className="text-[#666E75] font-bold mt-10 mb-3 text-sm sm:text-base">
        Ընդհանուր կանոններ
      </p>
      <NumberedList items={GENERAL_RULES} />

      <div className="mt-8 flex flex-col gap-4 sm:gap-5">
        <div className="flex gap-3 sm:gap-4">
          <span className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-sky-50 text-sky-600 font-bold text-xs sm:text-sm flex items-center justify-center">
            5
          </span>
          <p className="text-[#3a4550] text-sm sm:text-[15px] leading-relaxed font-semibold">
            Գնորդը ընդունելով պայմանները համաձայնվում է, որ՝ Team-ը կատարի
            հարցումներ հանդիպացող ՀՀ առևտրային բանկերի միջոցով:
          </p>
        </div>

        <p className="pl-9 sm:pl-11 font-bold text-[#00293c] text-sm sm:text-base">
          Առևտրային բանկերը իրենց հերթին կարող են՝
        </p>

        <div className="pl-9 sm:pl-11">
          <NumberedList items={BANK_TRANSFER_RULES} />
        </div>
      </div>
       <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-4">
              <a href="#" className="text-slate-700 hover:text-[#1877f2] transition-colors">
              <FaFacebook size={18} />
              </a>
              <a href="#" className="text-slate-700 hover:text-[#1da1f2] transition-colors">
              <FaTwitter size={18} />
              </a>
       </div>
    </div>
    
  );
}