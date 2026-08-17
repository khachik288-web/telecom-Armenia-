import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Smartphone, Tv, Phone, ChevronRight, PhoneCall, Plane, BatteryCharging, Gamepad2, MonitorPlay, Database, MessageSquare, Infinity as InfinityIcon, RotateCw, Film, Monitor, ChevronDown, Briefcase, GraduationCap, PlayCircle, Wifi, ShieldCheck, Router, Gamepad } from "lucide-react";

const CATEGORY_TABS = [
  { id: "mobile", label: "Բջջային կապ", icon: Smartphone, href: "/sakagner/bjjayin-kap" },
  { id: "tv-komp", label: "Ինտերնետ և TV - ԿՈՄՊ", icon: Tv, href: "/sakagner/tvkomp" },
  { id: "tv-komb", label: "Ինտերնետ և TV - ԿՈՄԲ", icon: Tv, href: "/sakagner/internet-tv-komb" },
  { id: "fixed", label: "Ֆիքսված հեռախոսակապ", icon: Phone, href: "/sakagner/fixed-phone" },
];

// Иконка-бейдж для пунктов без lucide-иконки (аналог "4G"/"SMS"/"TeamTV" бейджей на других страницах)
function BadgeIcon({ label, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center text-[9px] font-bold border border-slate-300 rounded px-1 py-0.5 text-slate-500 leading-none ${className}`}
    >
      {label}
    </span>
  );
}

const TARIFF_GROUPS = {
  main: [
    {
      id: "kosmo2",
      title: "ԿՈՍՄՈ 2",
      price: 8000,
      features: [
        { icon: "wifi", value: "250", unit: "Մբիթ/վրկ" },
        {
          icon: "phone",
          value: "3,200",
          note: "1500 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "40", unit: "ԳԲ" },
        { icon: "beacon", value: "Beacon 2" },
        { icon: "befree", value: "3 Be Free" },
      ],
      socials: ["M", "S", "W", "T"],
      extraSocials: 13,
    },
    {
      id: "kosmo4-9375",
      title: "ԿՈՍՄՈ 4",
      price: 9375,
      oldPrice: 12500,
      discountBadge: "25%",
      features: [
        { icon: "wifi", value: "450", unit: "Մբիթ/վրկ" },
        {
          icon: "tv",
          value: "150",
          unit: "ալիք",
          note: "+1 TeamTV Smart հավելված Android, Samsung, LG Smart հեռուստացույցների համար",
        },
        {
          icon: "phone",
          value: "5,000",
          note: "3000 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "Անսահմ." },
        { icon: "roaming", value: "200", unit: "ՄԲ" },
        { icon: "homephone", value: "180", unit: "րոպե" },
        { icon: "beacon", value: "Beacon 2" },
        { icon: "befree", value: "3 Be Free" },
        { icon: "geforce", value: "Free" },
      ],
    },
    {
      id: "kosmo4-12375",
      title: "ԿՈՍՄՈ 4",
      price: 12375,
      oldPrice: 16500,
      discountBadge: "25%",
      features: [
        { icon: "wifi", value: "700", unit: "Մբիթ/վրկ" },
        {
          icon: "tv",
          value: "200",
          unit: "ալիք",
          note: "+1 TeamTV Smart հավելված Android, Samsung, LG Smart հեռուստացույցների համար",
        },
        {
          icon: "phone",
          value: "8,000",
          note: "5000 րոպե դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "Անսահմ." },
        { icon: "roaming", value: "300", unit: "ՄԲ" },
        { icon: "homephone", value: "180", unit: "րոպե" },
        { icon: "beacon", value: "Beacon 2" },
        { icon: "powerbank", value: "PowerBank" },
        { icon: "befree", value: "3 Be Free" },
        { icon: "geforce", value: "Performance" },
      ],
    },
    {
      id: "kosmo-gig",
      title: "ԿՈՍՄՈ GIG",
      price: 55000,
      features: [
        { icon: "wifi", value: "1", unit: "Գբիթ/վրկ" },
        { icon: "tv", value: "200", unit: "ալիք" },
        {
          icon: "phone",
          value: "8,000",
          note: "5000 րոպե դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "Անսահմ." },
        { icon: "roaming", value: "300", unit: "ՄԲ" },
        { icon: "homephone", value: "180", unit: "րոպե" },
        { icon: "beacon", value: "3xBeacon2" },
        { icon: "befree", value: "3 Be Free" },
        { icon: "tvbox", value: "3xTV" },
        { icon: "geforce", value: "Performance" },
      ],
    },
  ],
  regional: [
    {
      id: "kosmo2-marz",
      title: "ԿՈՍՄՈ 2",
      subtitle: "ՄԱՐԶԱՅԻՆ",
      price: 6900,
      features: [
        { icon: "wifi", value: "200", unit: "Մբիթ/վրկ" },
        {
          icon: "phone",
          value: "3,200",
          note: "1500 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "40", unit: "ԳԲ" },
        { icon: "befree", value: "3 Be Free" },
      ],
      socials: ["S", "T", "I", "F"],
      extraSocials: 14,
    },
    {
      id: "kosmo3-marz",
      title: "ԿՈՍՄՈ 3",
      subtitle: "ՄԱՐԶԱՅԻՆ",
      price: 7400,
      features: [
        { icon: "wifi", value: "200", unit: "Մբիթ/վրկ" },
        {
          icon: "phone",
          value: "3,200",
          note: "1500 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "40", unit: "ԳԲ" },
        { icon: "homephone", value: "180", unit: "րոպե" },
        { icon: "befree", value: "3 Be Free" },
      ],
      socials: ["S", "T", "I", "F"],
      extraSocials: 14,
    },
    {
      id: "kosmo4-marz",
      title: "ԿՈՍՄՈ 4",
      subtitle: "ՄԱՐԶԱՅԻՆ",
      price: 7425,
      oldPrice: 9900,
      discountBadge: "25%",
      features: [
        { icon: "wifi", value: "350", unit: "Մբիթ/վրկ" },
        { icon: "tv", value: "200", unit: "ալիք" },
        {
          icon: "phone",
          value: "5,000",
          note: "3000 րոպեներ դեպի ՀՀ բոլոր ցանցեր, ԱՄՆ, Կանադա, ՌԴ Beeline և Tele2*",
        },
        { icon: "4g", value: "Անսահմ." },
        { icon: "roaming", value: "200", unit: "ՄԲ" },
        { icon: "homephone", value: "180", unit: "րոպե" },
        { icon: "befree", value: "3 Be Free" },
        { icon: "geforce", value: "Free" },
      ],
    },
  ],
};

function FeatureIcon({ type }) {
  const cls = "text-slate-400 shrink-0";
  switch (type) {
    case "wifi":
      return <Tv size={18} className={cls} />; // используем Tv как обобщённую иконку сети/скорости
    case "tv":
      return <MonitorPlay size={18} className={cls} />;
    case "phone":
      return <Phone size={18} className={cls} />;
    case "homephone":
      return <PhoneCall size={18} className={cls} />;
    case "roaming":
      return <Plane size={18} className={cls} />;
    case "powerbank":
      return <BatteryCharging size={18} className={cls} />;
    case "geforce":
      return <Gamepad2 size={18} className={cls} />;
    case "4g":
      return <BadgeIcon label="4G" />;
    case "beacon":
      return <BadgeIcon label="NOKIA" />;
    case "befree":
      return <BadgeIcon label="BF" className="border-[#e8615a] text-[#e8615a]" />;
    case "tvbox":
      return <MonitorPlay size={18} className={cls} />;
    default:
      return null;
  }
}

function TariffCard({ plan }) {
  return (
    <div className="bg-white rounded-lg border-t-4 border-[#f1534f] shadow-sm flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-4 text-center relative">
        {plan.discountBadge && (
          <span className="absolute top-3 right-4 bg-[#f1534f] text-white text-[10px] font-bold px-2 py-1 rounded-full rotate-6">
            {plan.discountBadge}
          </span>
        )}
        <h3 className="text-xl font-extrabold text-slate-800 tracking-wide uppercase">
          {plan.title}
        </h3>
        {plan.subtitle && (
          <p className="text-[11px] font-semibold text-slate-400 tracking-widest mt-0.5">
            {plan.subtitle}
          </p>
        )}
        <div className="mt-2">
          {plan.oldPrice && (
            <span className="block text-slate-300 line-through text-lg font-semibold">
              {plan.oldPrice.toLocaleString("ru-RU")}
            </span>
          )}
          <span className={`block text-3xl font-extrabold ${plan.oldPrice ? "text-[#f1534f]" : "text-slate-800"}`}>
            {plan.price.toLocaleString("ru-RU")}
          </span>
        </div>
      </div>

      <div className="px-6 flex-1 flex flex-col gap-3 text-sm text-slate-700">
        {plan.features.map((f, i) => (
          <div key={i} className="flex flex-col border-t border-slate-50 pt-3">
            <div className="flex items-center gap-3">
              <FeatureIcon type={f.icon} />
              <span className="font-semibold text-slate-800">
                {f.value}
                {f.unit && <span className="text-xs font-normal text-slate-400 ml-1">{f.unit}</span>}
              </span>
            </div>
            {f.note && <p className="text-[10px] text-slate-400 mt-1 pl-8 leading-snug">{f.note}</p>}
          </div>
        ))}
      </div>

      {plan.socials && (
        <div className="flex items-center justify-center gap-2 px-6 py-4">
          {plan.socials.map((s, i) => (
            <span
              key={i}
              className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center"
            >
              {s}
            </span>
          ))}
          {plan.extraSocials && (
            <span className="text-[10px] font-semibold text-slate-400">+{plan.extraSocials}</span>
          )}
        </div>
      )}

      <div className="px-6 pb-6 pt-2">
        <button className="w-full bg-[#f1534f] hover:bg-[#e0433f] text-white font-bold py-2.5 rounded-full text-sm transition-colors">
          Միանալ
        </button>
      </div>
    </div>
  );
}

function TariffCardsSection() {
  const [group, setGroup] = useState("main"); // 'main' | 'regional'
  const plans = TARIFF_GROUPS[group];

  return (
    <div className="bg-[#002739] py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Табы Հիմնական / Մարզային */}
        <div className="bg-white rounded-md shadow-md flex mb-8 overflow-hidden">
          <button
            onClick={() => setGroup("main")}
            className={`flex-1 py-4 text-sm font-semibold transition-colors border-b-2 ${
              group === "main"
                ? "text-slate-800 border-[#f1534f] bg-white"
                : "text-slate-400 border-transparent bg-slate-50 hover:text-slate-600"
            }`}
          >
            Հիմնական
          </button>
          <button
            onClick={() => setGroup("regional")}
            className={`flex-1 py-4 text-sm font-semibold transition-colors border-b-2 ${
              group === "regional"
                ? "text-slate-800 border-[#f1534f] bg-white"
                : "text-slate-400 border-transparent bg-slate-50 hover:text-slate-600"
            }`}
          >
            Մարզային
          </button>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((plan) => (
            <TariffCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ================= Be Free секция =================
const BEFREE_PLANS = [
  {
    id: "bf-3200",
    label: "3 200",
    price: 1600,
    features: [
      { icon: "gb", value: "25", unit: "ԳԲ" },
      { icon: "minutes", value: "1000", unit: "րոպե" },
      { icon: "sms", value: "300", unit: "SMS" },
    ],
    socialsCount: 10,
  },
  {
    id: "bf-5000",
    label: "5 000",
    price: 2500,
    oldPrice: 3500,
    discount: "26%",
    features: [
      { icon: "infinite", value: "Անսահմ." },
      { icon: "minutes", value: "3,000", unit: "րոպե" },
      { icon: "sms", value: "500", unit: "SMS" },
      { icon: "roaming", value: "200", unit: "MB" },
    ],
  },
];

function BeFreeFeatureIcon({ type }) {
  const cls = "text-[#f1534f] shrink-0";
  switch (type) {
    case "gb":
      return <Database size={16} className={cls} />;
    case "minutes":
      return <PhoneCall size={16} className={cls} />;
    case "sms":
      return <MessageSquare size={16} className={cls} />;
    case "roaming":
      return <Plane size={16} className={cls} />;
    case "infinite":
      return <InfinityIcon size={16} className={cls} />;
    default:
      return null;
  }
}

function BeFreeCard({ plan }) {
  return (
    <div className="relative bg-[#043044] rounded-lg border border-white/10 p-5 w-full sm:w-64 overflow-hidden">
      {plan.discount && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#f1534f] text-white text-[10px] font-bold px-4 py-1 rotate-45 translate-x-5 translate-y-2">
            {plan.discount}
          </div>
        </div>
      )}

      <div className="flex items-baseline gap-1.5">
        <span className="text-white font-bold text-sm">Be Free</span>
        <span className="text-white/90 text-sm">{plan.label}</span>
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-[11px] text-white/50">ամիս</span>
        <span className="text-2xl font-extrabold text-[#f1534f]">{plan.price.toLocaleString("ru-RU")}</span>
        {plan.oldPrice && (
          <span className="text-sm text-white/40 line-through">{plan.oldPrice.toLocaleString("ru-RU")}</span>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-dashed border-white/15 flex flex-col gap-2.5">
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-white/90">
            <BeFreeFeatureIcon type={f.icon} />
            <span className="font-semibold">{f.value}</span>
            {f.unit && <span className="text-xs text-white/50">{f.unit}</span>}
          </div>
        ))}
      </div>

      {plan.socialsCount && (
        <div className="mt-4 grid grid-cols-5 gap-1.5">
          {Array.from({ length: plan.socialsCount }).map((_, i) => (
            <span
              key={i}
              className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[9px] text-white/60"
            >
              •
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SimCardsGraphic() {
  return (
    <div className="relative w-full max-w-[260px] h-[170px] mx-auto">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute w-36 h-24 rounded-xl bg-gradient-to-br from-[#4fb3c9] to-[#2d7f96] shadow-lg border border-white/20"
          style={{
            top: `${i * 14}px`,
            left: `${i * 34}px`,
            zIndex: i,
          }}
        >
          <div className="w-8 h-6 rounded-sm bg-[#e9c95d] mt-3 ml-3" />
        </div>
      ))}
    </div>
  );
}

function BeFreeSection() {
  return (
    <div className="bg-[#002739] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Верхний блок с описанием и графикой SIM-карт */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Be Free-ն հատուկ գնով
            </h2>
            <p className="text-sm text-white/60 leading-relaxed">
              Դարձի՛ր ԿՈՍՄՈ կամ ԿՈՄԲ փաթեթներից մեկի բաժանորդ և ստացիր մինչև 3 SIM
              քարտ՝ հատուկ սակագներով
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <SimCardsGraphic />
            <span className="border border-white/20 text-white/70 text-xs font-semibold rounded-full px-4 py-1.5">
              3 BE FREE SIM ՔԱՐՏ
            </span>
          </div>
        </div>

        {/* Заголовок + карточки тарифов Be Free */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-10">
          Ընտրիր քո Be Free փաթեթները հատուկ գնով
        </h3>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-5">
          {BEFREE_PLANS.map((plan) => (
            <BeFreeCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ================= TeamTV секция =================
const TEAMTV_FEATURES = [
  {
    icon: RotateCw,
    title: "Catch-Up մինչև 7 օր",
    desc: "Ընտրեք հաղորդումը և դիտեք այն ձեզ համար ցանկացած ժամանակ",
  },
  {
    icon: Film,
    title: "Հարուստ տեսադարան",
    desc: "Ֆիլների, մուլտֆիլների և հեռուստասերիալների մեծ ընտրություն",
  },
  {
    icon: Monitor,
    title: "4K հնարավորությամբ TV սարքավորում",
  },
];

function TeamTvSection() {
  return (
    <div className="bg-[#002739] py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-4xl sm:text-6xl font-extrabold mb-12">
          <span className="text-[#e8615a]">Team</span>
          <span className="text-[#7dd3e8]">TV</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Список преимуществ */}
          <div className="flex-1 flex flex-col gap-8 w-full max-w-md mx-auto md:mx-0">
            {TEAMTV_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-11 h-11 shrink-0 rounded-full border-2 border-white flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </span>
                  <div>
                    <p className="text-white font-semibold text-base">{f.title}</p>
                    {f.desc && <p className="text-white/50 text-xs mt-1 leading-relaxed">{f.desc}</p>}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Превью интерфейса TeamTV — замени src на реальную ссылку с CDN сайта */}
            <img
              src="https://www.telecomarmenia.am/file_manager/cosmo/img/iptv.png"
              alt="TeamTV preview"
              className="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>
  );
}

// ================= Промо TCL + доступные TV пакеты + спецпредложение =================
function TvPromoSection() {
  return (
    <div className="bg-[#e9e2d6] py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Промо-карточка TCL — замени placeholder на реальное изображение с CDN сайта */}
        <div className="w-full md:w-[340px] shrink-0 rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-slate-700 to-slate-900 aspect-[4/3] flex items-center justify-center relative">
            <img src="https://www.telecomarmenia.am/images/block_with_text/1/17859375803242.jpeg" alt="" />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] leading-tight mb-4">
            Ցգա արագությունը՝ մեծ էկրանով
          </h2>
          <p className="text-sm text-[#002739]/70 leading-relaxed mb-6">
            Միացեք ԿՈՍՄՈ 4-ին և ստացեք ձեր չեզոք գերեզ արժեքով որակի հեռուստացույցներ՝
            համանիշ գնով։ TCL 55T6D QLED հեռուստացույցը 189 000 դրամով, 299 900 դրամի փոխարեն
            TCL 65P7K QLED հեռուստացույցը 259 000 դրամով, 369 900 դրամի փոխարեն։ Առաջարկն
            անվճար է սահմանափակ քանակով, հետևե՛ք թարմացումներին և ստացեք գերարագ
            ինտերնետ և արժանի որակի հեռուստացույցին։
          </p>
          <button className="bg-[#f1534f] hover:bg-[#e0433f] text-white font-bold py-2.5 px-8 rounded-full text-sm transition-colors">
            Մանրամասն
          </button>
        </div>
      </div>
    </div>
  );
}

const TV_PACKAGES = [
  { id: "150", channels: "150", desc: "150 ալիք ամենադիտված ժանրերով՝ ֆիլմեր, սպորտ, մանկական, տեղեկատվական։" },
  { id: "200", channels: "200", desc: "200 ալիք ընդլայնված փաթեթ՝ ներառյալ պրեմիում սպորտային և կինո ալիքներ։" },
];

function AvailableChannelsSection() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="bg-white py-14">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] text-center mb-8">
          Հասանելի TV փաթեթներ
        </h2>
        <div className="flex flex-col">
          {TV_PACKAGES.map((pkg) => {
            const isOpen = openId === pkg.id;
            return (
              <div key={pkg.id} className="border-b border-slate-200">
                <button
                  onClick={() => setOpenId(isOpen ? null : pkg.id)}
                  className="w-full flex items-center justify-between py-4 text-sm font-medium text-[#002739]"
                >
                  <span>{pkg.channels} ալիք</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-4 text-xs text-slate-500 leading-relaxed">{pkg.desc}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SpecialOfferSection() {
  return (
    <div className="bg-[#002739] py-14">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            Հատուկ առաջարկ
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-md">
            Եթե արդեն ԿՈՍՄՈ-ի բաժանորդ ես, օգտվիր հատուկ առաջարկից տան խելացի
            սարքավորումների համար. ավտոմանացում, ընտրողություն, անվտանգություն` մեկ
            հավելվածով և ամսական ինտերնետով։
          </p>
          <button className="bg-[#f1534f] hover:bg-[#e0433f] text-white font-bold py-2.5 px-8 rounded-full text-sm transition-colors">
            Տեսնել
          </button>
        </div>

        {/* Изображение умных устройств — замени placeholder на реальную картинку */}
        <div className="flex-1 order-1 md:order-2 w-full max-w-md rounded-lg overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] flex flex-col items-center justify-center gap-3">
          <img src="https://www.telecomarmenia.am/images/block_with_text/1/17526480603136.png" alt=""  className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

// ================= Cosmo Box + Nokia Wi-Fi 6 + Nokia Beacon =================
function CosmoBoxSection() {
  return (
    <div className="bg-[#f4f6f8] py-14">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Фото людей за игрой — placeholder, замени на реальное изображение */}
        <img src="https://www.telecomarmenia.am/images/block_with_text/1/1775819602079.png" className="w-[500px] h-[300px]" />

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] leading-tight mb-4">
            Cosmo Box՝ դիտիր, խաղա, վայելիր
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-md">
            Բացահայտի՛ր խաղային փորձի նոր հորիզոնները՝ ուղիղ գվարճանքի աշխարհում:
          </p>
          <button className="bg-[#f1534f] hover:bg-[#e0433f] text-white font-bold py-2.5 px-8 rounded-full text-sm transition-colors">
            Ավելին
          </button>
        </div>
      </div>
    </div>
  );
}

function NokiaBoosterSection() {
  return (
    <div className="bg-[#e9ecef] py-14">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] leading-tight mb-4">
            Nokia WI-FI 6 ուժեղացուցիչ
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-md">
            «Be Free» հատուկ պայմաններով ստացեք 3 Sim քարտի ձեռքբերման հնարավորություն,
            ինչպես նաև Wi-Fi 6 ուժեղացուցիչ ԿՈՍՄՈ ծառայությունների փաթեթին
            բաժանորդագրվելիս։
          </p>
        </div>

         <img src="https://www.telecomarmenia.am/images/block_with_text/1/17758196324824.png" className="w-[450px] h-[300px]" />
      </div>
    </div>
  );
}

const NOKIA_BEACONS = [
  {
    id: "beacon-1-1",
    title: "NOKIA BEACON 1.1 WI-FI 5",
    desc: "Սարքն ապահովում է անխափան և որակյալ Wi-Fi ցանց բնակարանի ամբողջ տարածքում։ Համակցվածությունների խելացի ընտրությունը երաշխավորում է առանց ընդմիջումների Wi-Fi կապ։",
    image: "https://www.telecomarmenia.am/images/block_with_text/1/1775822890677.png",
  },
  {
    id: "beacon-2",
    title: "NOKIA BEACON 2 WI-FI 6",
    desc: "Նորագույն սարք, որն աշխատում է Wi-Fi 6 տեխնոլոգիայով: Ապահովում է մինչև 140 մ² տարածքի անխափան և առավել արագություն կորպուս Wi-Fi կապ։ Համապատասխանում է ընտանիք դիտել 4k հոլովակներ և խաղալ ցանցային խաղեր։",
    image: "https://www.telecomarmenia.am/images/block_with_text/1/17758229248308.png",
  },
];

function NokiaBeaconSection() {
  return (
    <div className="bg-[#002739] py-14">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs font-semibold text-white/60 tracking-wide mb-10">
          Տրամադրվող NOKIA հզոր սարքավորումներ
        </p>

        <div className="flex flex-col gap-14">
          {NOKIA_BEACONS.map((item, i) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Фото устройства */}
              <div className="w-full md:w-64 shrink-0 aspect-square rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-contain p-6" />
              </div>
              <div className="flex-1 max-w-md">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ================= Возможности КОСМО + видео Nokia + Условия =================
const COSMO_POSSIBILITIES = [
  {
    id: "work",
    title: "Աշխատի՞ր",
    desc: "Այնպես որ ձեր բոլոր ընդհատումները կամ աշխատանքային ուշադրության պահանջներից հեռացած։",
    icon: Briefcase,
    image: "https://www.telecomarmenia.am/images/block_with_news_slides/1/1624970435504.png",
  },
  {
    id: "study",
    title: "Սովորի՞ր",
    desc: "Անսահման հասանելիություն դեպի նոր գիտելիքներ։",
    icon: GraduationCap,
    image: "https://www.telecomarmenia.am/images/block_with_news_slides/1/16249704355602.png",
  },
];

function CosmoPossibilitiesSection() {
  return (
    <div className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] text-center mb-1">
          ԿՈՍՄՈ Հնարավորություններ
        </h2>
        <p className="text-sm text-slate-400 text-center mb-10">
          Լավագույն արագություն, անսահմանափակ հնարավորություններ
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {COSMO_POSSIBILITIES.map((item) => {
            return (
              <div key={item.id} className="rounded-lg overflow-hidden shadow-sm border border-slate-100">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#002739] mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const NOKIA_VIDEOS = [
  {
    id: "video-beacon-1-1",
    title: "Nokia Beacon 1.1 Wi-Fi 5",
    desc: "Սարքն ապահովում է անխափան և որակյալ Wi-Fi ցանց բնակարանի ամբողջ տարածքում։ Համակցվածությունների խելացի ընտրություն երաշխավորում է առանց ընդմիջումների Wi-Fi կապ։",
    image: "https://www.telecomarmenia.am/images/block_with_news_slides/1/16227081101678.jpeg",
  },
  {
    id: "video-beacon-2",
    title: "Nokia Beacon 2 Wi-Fi 6",
    desc: "Նորագույն սարք, որն աշխատում է Wi-Fi 6 տեխնոլոգիայով։ Անսահմանափակ և առավել արագության կորպուս Wi-Fi կապի ապահովում։",
    image: "https://www.telecomarmenia.am/images/block_with_news_slides/1/16227081101411.jpeg",
  },
];

function NokiaVideosSection() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] text-center mb-1">
          Nokia սարքավորումներ
        </h2>
        <p className="text-sm text-slate-400 text-center mb-10">
          Լավագույն սարքերը՝ լավագույն ծառայությունների համար
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {NOKIA_VIDEOS.map((v) => (
            <div key={v.id} className="rounded-lg overflow-hidden shadow-sm border border-slate-100 bg-white">
              <div className="relative aspect-video overflow-hidden group cursor-pointer">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <PlayCircle size={44} className="text-white/90" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#002739] mb-1">{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CONDITIONS_LEFT = [
  "Ինչպես միանալ և ստուգել հաշվեկշիռը",
  "Հավելյալ առթեր",
  "ԿՈՍՄՈ-ն առանց ժամկետային պարտավորության",
  "TeamTV",
  "Team Բոնուս",
  "Be Free սակագային փաթեթներ",
];

const CONDITIONS_RIGHT = [
  "Be Free հատուկ պայմաններով",
  "Լրացուցիչ տեղեկություններ",
  "Սակագներ՝ փաթեթների ներառումները սպառելուց հետո",
  "Անսահմանափակ հավելվածներ",
  "Cosmo Box",
  "ԿՈՍՄՈ առավելություններ",
];

function ConditionRow({ label, isOpen, onClick }) {
  return (
    <div className="border border-slate-200 rounded-md overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-3 text-sm text-slate-700 font-medium bg-white hover:bg-slate-50 transition-colors"
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`text-[#f1534f] transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-xs text-slate-500 bg-slate-50 border-t border-slate-100 leading-relaxed">
          Մանրամասն տեղեկությունների համար դիմեք Team Telecom-ի սպասարկման կենտրոն կամ
          այցելեք telecomarmenia.am կայք։
        </div>
      )}
    </div>
  );
}

function ConditionsAccordionSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002739] text-center mb-10">
          Պայմաններ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {CONDITIONS_LEFT.map((label, i) => {
              const id = `left-${i}`;
              return (
                <ConditionRow key={id} label={label} isOpen={openId === id} onClick={() => toggle(id)} />
              );
            })}
          </div>
          <div className="flex flex-col gap-3">
            {CONDITIONS_RIGHT.map((label, i) => {
              const id = `right-${i}`;
              return (
                <ConditionRow key={id} label={label} isOpen={openId === id} onClick={() => toggle(id)} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TvKomp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* ================= 1. СЛАЙДЕР ================= */}
      <div className="relative w-full overflow-hidden">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          fade
          controls={true}
          indicators={true}
          className="komb-slider"
        >
          {/* Слайд 1: Միացի՛ր ԿՈՍՄՈ 4 */}
          <Carousel.Item>
            <div className="w-full min-h-[420px] bg-[#f4f0ea] flex items-center justify-center py-12 px-6 sm:px-12">
              <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Левая карточка */}
                <div className="bg-[#607d8b] text-white p-8 rounded-lg max-w-md w-full shadow-md">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    Միացի՛ր ԿՈՍՄՈ 4
                  </h2>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Զեղչը գործում է 16.07.2026թ- 16.10.2026թ. միանալու դեպքում
                  </p>
                  <button className="bg-[#f1534f] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-600 transition-colors">
                    Միացիր հիմա
                  </button>
                </div>

                {/* Правый блок с баннером */}
                <div className="relative max-w-lg w-full flex flex-col items-center">
                  <img
                    src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17857440992138.png"
                    alt="ԿՈՍՄՈ 4"
                    className="w-full object-contain rounded-2xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Слайд 2: TV Акция / TCL */}
          <Carousel.Item>
            <div className="w-full min-h-[420px] bg-[#f4f0ea] flex items-center justify-center py-12 px-6 sm:px-12">
              <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Левая карточка */}
                <div className="bg-[#607d8b] text-white p-8 rounded-lg max-w-md w-full shadow-md">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                    ԿՈՍՄՈ 4 + TV
                  </h2>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Հատուկ առաջարկ TCL հեռուստացույցների համար ԿՈՍՄՈ 4 փաթեթի հետ:
                  </p>
                  <button className="bg-[#f1534f] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-600 transition-colors">
                    Մանրամասն
                  </button>
                </div>

                {/* Правый блок */}
                <div className="relative max-w-lg w-full flex flex-col items-center">
                  <img
                    src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17767669719393.png"
                    alt="ԿՈՍՄՈ 4 TV"
                    className="w-full object-contain rounded-2xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Слайд 3: ԿՈՍՄՈ (700 Мб/с) */}
          <Carousel.Item>
            <div className="w-full min-h-[420px] bg-[#f4f0ea] flex items-center justify-center py-12 px-6 sm:px-12">
              <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Левая карточка */}
                <div className="bg-[#788287] text-white p-8 rounded-lg max-w-md w-full shadow-md">
                  <h2 className="text-3xl font-bold mb-4">ԿՈՍՄՈ</h2>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Առաջին ամիսն ԱՆՎՃԱՐ՝ առցանց միանալու դեպքում:
                  </p>
                  <button className="bg-[#f1534f] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-red-600 transition-colors">
                    Միացիր հիմա
                  </button>
                </div>

                {/* Правый блок */}
                <div className="relative max-w-lg w-full flex flex-col items-center">
                  <img
                    src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17758194399312.png"
                    alt="ԿՈՍՄՈ 700Mb"
                    className="w-full object-contain rounded-2xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>

          {/* Слайд 4: ԿՈՍՄՈ GIG */}
          <Carousel.Item>
            <div className="w-full min-h-[420px] bg-[#002739] text-white flex items-center justify-center py-12 px-6 sm:px-12">
              <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Левая карточка */}
                <div className="bg-[#00374e] border border-cyan-900 p-8 rounded-lg max-w-md w-full shadow-md">
                  <h2 className="text-3xl font-bold mb-4">ԿՈՍՄՈ GIG</h2>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    1 ԳԲ գերարագ ինտերնետ լավագույն Nokia սարքով:
                  </p>
                  <button className="bg-white text-[#002739] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-slate-100 transition-colors">
                    Իմանալ ավելին
                  </button>
                </div>

                {/* Правый блок */}
                <div className="relative max-w-lg w-full flex flex-col items-center">
                  <img
                    src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17775256210007.png"
                    alt="ԿՈՍՄՈ GIG"
                    className="w-full object-contain rounded-2xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Полоска категорий (Табы) */}
      <div className="max-w-5xl mx-auto -mt-6 relative z-10 px-4">
        <div className="bg-white shadow-md rounded-md flex flex-col sm:flex-row border border-slate-100">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === "tv-komp";
            return (
              <Link
                key={tab.id}
                to={tab.href}
                className={`flex-1 flex flex-col items-center justify-center gap-2 px-3 py-4 text-xs sm:text-sm border-b sm:border-b-0 sm:border-r last:border-r-0 border-slate-100 transition-colors ${
                  isActive
                    ? "border-b-2 sm:border-b-2 border-sky-400 text-slate-800 font-semibold"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {Icon && <Icon size={20} className={isActive ? "text-sky-500" : "text-slate-400"} />}
                <span className="text-center leading-tight">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-5xl mx-auto px-4 mt-6 text-xs sm:text-sm text-slate-400 flex items-center gap-2">
        <Link to="/" className="underline hover:text-slate-600">Գլխավոր</Link>
        <ChevronRight size={12} />
        <span className="underline hover:text-slate-600">Անհատներին</span>
        <ChevronRight size={12} />
        <span className="underline hover:text-slate-600">Սակագներ</span>
        <ChevronRight size={12} />
        <span className="text-slate-600 font-medium">Ինտերնետ և TV - ԿՈՄՊ</span>
      </div>

      {/* ================= 2. ТАРИФНЫЕ КАРТОЧКИ ================= */}
      <div className="mt-8">
        <TariffCardsSection />
      </div>

      {/* ================= 3. BE FREE ================= */}
      <BeFreeSection />

      {/* ================= 4. TeamTV ================= */}
      <TeamTvSection />

      {/* ================= 5. TV промо + пакеты + спецпредложение ================= */}
      <TvPromoSection />
      <AvailableChannelsSection />
      <SpecialOfferSection />

      {/* ================= 6. Cosmo Box + Nokia Wi-Fi 6 + Nokia Beacon ================= */}
      <CosmoBoxSection />
      <NokiaBoosterSection />
      <NokiaBeaconSection />

      {/* ================= 7. Возможности КОСМО + видео Nokia + Условия ================= */}
      <CosmoPossibilitiesSection />
      <NokiaVideosSection />
      <ConditionsAccordionSection />
    </div>
  );
}