import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tv, CreditCard, Armchair, ShieldCheck, Phone } from 'lucide-react';

/* ================= ДАННЫЕ КАРТОЧЕК ================= */

const ENTERTAINMENT_ITEMS = [
  {
    title: 'GeForce Games',
    desc: 'Ակտիվացրեք բաժանորդագրությունը և ստացեք Performance հնարավորություն խաղալու ավելի քան 2000 խաղ GFN.AM կատալոգից',
  },
  {
    title: 'MobiBattle խաղային պորտալ',
    desc: 'MobiBattle մոբայլ զվարճալի խաղերի հարթակ է: Ոչինչ մի ներբեռնիր հեռախոսի մեջ, պարզապես մուտք գործիր կայք և մրցիր իրական...',
  },
  {
    title: 'Մելոմանիա',
    desc: '«Մելոմանիա» ինտերակտիվ երաժշտական-զվարճալի վիկտորինան հասանելի է Team բջջային կապի բաժանորդներին:',
  },
  {
    title: 'Գրքային պորտալ',
    desc: 'Ծառայությունը հնարավորություն է տալիս կարդալ և լսել book.telecomarmenia.am պորտալում տեղադրված տարբեր ժանրերի on-line...',
  },
  {
    title: 'Ծանոթությունների պորտալ',
    desc: 'Նոր ծանոթություններ, հետաքրքիր զրուցակիցներ և ինտերակտիվ շփումը սպասում են ձեզ միանգամայն Նոր Ծանոթությունների պորտալում',
  },
  {
    title: 'Մանկական պորտալ',
    desc: 'Ծառայությունը ներկայացնում է kids.telecomarmenia.am պորտալը, որտեղ տեղադրված են գրքեր, ֆիլմեր, մուլտֆիլմեր, կրթական ծրագրեր...',
  },
  {
    title: 'Հումորի ակումբ',
    desc: 'Զարմացնել ընկերներին, կատակել մտերիմների հետ կամ ուղղակի նվիրել լավ տրամադրություն կօգնի «Հումորի ակումբ» ժամանցային պորտալը, որը...',
  },
  {
    title: 'Զվարճալի արկղ',
    desc: 'Դուք կարող եք օգտվել հետևյալ տեսակի ծառայություններից՝ Ծանոթություններ՝ ստեղծե՛ք ձեր անձնական պրոֆիլը, փոխոխե՛ք այն և...',
  },
  {
    title: 'Ուրախ զանգ',
    desc: '«Ուրախ զանգ» ծառայությունը ձեզ հնարավորություն է տալիս զանգեր կատարել Team բջջային ցանցի ներսում՝ փոխելով ձայնը օն-լայն ռեժիմում: Ձեզ...',
  },
];

/* ================= ОСНОВНОЙ КОМПОНЕНТ ================= */

export default function Zvarchanq() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* ============ ВЕРХНИЙ БАННЕР ============ */}
      <div className="relative w-full h-48 sm:h-64 bg-[#f2ede4] overflow-hidden flex items-center justify-center">
        <img
          src="https://www.telecomarmenia.am/images/menu/1/17392713413788.png"
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ============ ОСНОВНОЙ КОНТЕЙНЕР ============ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* ============ ВКЛАДКИ НАВИГАЦИИ ============ */}
        <div className="relative -mt-10 sm:-mt-12 z-10 bg-white rounded-xl shadow-md border border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-slate-100">
          
          {/* 1. TeamTV */}
        <button
            onClick={() => navigate('/teamtv')} /* Было: navigate('/services/teamtv') */
            className="flex flex-col items-center justify-center gap-2 p-4 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#f1534f] transition-colors border-b-4 border-transparent cursor-pointer"
        >
        <Tv size={22} />
        <span>TeamTV</span>
        </button>

        {/* 2. Վճարում և համալրում */}
        <button
            onClick={() => navigate('/teampay')} /* Было: navigate('/services/teampay') */
            className="flex flex-col items-center justify-center gap-2 p-4 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#f1534f] transition-colors border-b-4 border-transparent cursor-pointer"
        >
        <CreditCard size={22} />
        <span>Վճարում և համալրում</span>
        </button>

          {/* 3. Զվարճանք (Активная вкладка) */}
          <button
            className="flex flex-col items-center justify-center gap-2 p-4 text-xs sm:text-sm font-semibold text-[#00293c] border-b-4 border-[#00c5d6] bg-slate-50 cursor-default"
          >
            <Armchair size={22} className="text-[#00c5d6]" />
            <span>Զվարճանք</span>
          </button>

          {/* 4. Զանգեր և անվտանգություն */}
          <button
            onClick={() => navigate('/sakagner/internet-tv-komb')}
            className="flex flex-col items-center justify-center gap-2 p-4 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#f1534f] transition-colors border-b-4 border-transparent cursor-pointer"
          >
            <ShieldCheck size={22} />
            <span className="text-center leading-tight">Զանգեր և անվտանգություն</span>
          </button>

          {/* 5. Ֆիքսված հեռախոսակապ */}
          <button
            onClick={() => navigate('/sakagner/fixed-phone')}
            className="flex flex-col items-center justify-center gap-2 p-4 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#f1534f] transition-colors border-b-4 border-transparent cursor-pointer"
          >
            <Phone size={22} />
            <span className="text-center leading-tight">Ֆիքսված հեռախոսակապ</span>
          </button>
        </div>

        {/* ============ BREADCRUMBS ============ */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 mt-6">
          <a href="/" className="hover:text-[#f1534f] transition-colors">Գլխավոր</a>
          <span>&rsaquo;</span>
          <span className="hover:text-[#f1534f] transition-colors">Անհատներին</span>
          <span>&rsaquo;</span>
          <span className="hover:text-[#f1534f] transition-colors">Ծառայություններ</span>
          <span>&rsaquo;</span>
          <span className="text-[#00293c] font-semibold">Զվարճանք</span>
        </div>

        {/* ============ ЗАГОЛОВОК ============ */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#00293c] mt-6 mb-8 uppercase">
          Զվարճանք
        </h1>

        {/* ============ ПЕРВЫЙ РЯД (SMS PREM + KOREEZ) ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* SMS Պրեմիում Banner Card */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[260px] flex flex-col justify-end p-6 sm:p-8 text-white group cursor-pointer shadow-sm">
            <img
              src="https://www.telecomarmenia.am/images/service/1/15553135300406.jpeg"
              alt="SMS Պրեմիում"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">SMS Պրեմիում</h2>
              <p className="text-xs sm:text-sm text-slate-200 line-clamp-3 max-w-2xl leading-relaxed">
                Ուղարկելով կարճ հաղորդագրություն համապատասխան կարճ համարին, դուք կարող եք ստանալ տարբեր բնույթի օգտակար տեղեկատվություն, օգտվել զվարճալի ծառայություններից, մասնակցել հեռուստաալիքներով, ռադիոկայաններով և ԶԼՄ-ներով անցկացվող մրցույթներին, վիկտորինաներին...
              </p>
            </div>
          </div>

          {/* Koreez Card */}
          <div className="bg-[#f5f7f8] rounded-2xl p-6 flex flex-col justify-between min-h-[260px] hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl font-bold text-[#00293c] mb-3">Koreez</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Koreez-ում դու կարող ես անցնել քո ամբողջ դպրոցական ծրագիրը խաղի և մրցակցության միջոցով:
              </p>
            </div>
            <button className="mt-6 self-start border border-[#f1534f] text-[#f1534f] rounded-full px-6 py-2 text-xs sm:text-sm font-semibold hover:bg-[#f1534f] hover:text-white transition-colors cursor-pointer">
              Ավելին
            </button>
          </div>
        </div>

        {/* ============ СЕТКА С ОСТАЛЬНЫМИ КАРТОЧКАМИ ============ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERTAINMENT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-[#f5f7f8] rounded-2xl p-6 flex flex-col justify-between min-h-[220px] hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-lg font-bold text-[#00293c] mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
              <button className="mt-6 self-start border border-[#f1534f] text-[#f1534f] rounded-full px-6 py-2 text-xs sm:text-sm font-semibold hover:bg-[#f1534f] hover:text-white transition-colors cursor-pointer">
                Ավելին
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}