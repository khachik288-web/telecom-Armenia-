import React, { useState } from 'react';
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";

const TABS = [
  {
    id: "mobile",
    label: "Բջջային կապ",
    sections: [
      {
        id: "foreign-numbers",
        title: "Չանգեր արտասահմանյան համարներից",
        text: "Զգույշ եղեք անծանոթ համարներին զանգահարելիս, հատկապես եթե դրանք արտասահմանյան կոդով են։ Եթե ձեզ զանգ են թողնում, որպեսզի դուք հետադարձ կապ հաստատեք, դա կարող է լինել խարդախության փորձ՝ ձեր հաշվից գումար դանձելու մտադրությամբ։",
      },
      {
        id: "short-numbers",
        title: "Չանգեր կարճ համարներին",
        text: "Կարճ համարներից ստացված հաղորդագրություններին և զանգերին վստահելուց առաջ ստուգեք դրանց իսկությունը։",
      },
      {
        id: "raffles",
        title: "Մասնակցություն խաղարկություններին",
        text: "Զգույշ եղեք կասկածելի խաղարկությունների հայտարարություններից, որոնք պահանջում են անձնական տվյալներ կամ վճարումներ։",
      },
    ],
  },
  {
    id: "internet",
    label: "Անվտանգ ինտերնետ",
    sections: [
      {
        id: "passwords",
        title: "Գաղտնաբառերի անվտանգություն",
        text: "Օգտագործեք ուժեղ և տարբեր գաղտնաբառեր յուրաքանչյուր հաշվի համար։",
      },
      {
        id: "phishing",
        title: "Ֆիշինգից պաշտպանություն",
        text: "Մի բացեք կասկածելի հղումներ և մի տրամադրեք ձեր տվյալները անհայտ կայքերում։",
      },
    ],
  },
  {
    id: "kids",
    label: "Երեխաների անվտանգություն",
    sections: [
      {
        id: "parental-control",
        title: "Ծնողական վերահսկողություն",
        text: "Կարգավորեք ծնողական վերահսկողության գործիքները՝ երեխայի առցանց գործունեությունը սահմանափակելու համար։",
      },
    ],
  },
];

export default function Anvtang() {
  const [activeTab, setActiveTab] = useState("mobile");
  const [openSection, setOpenSection] = useState(TABS[0].sections[0].id);

  const currentTab = TABS.find((t) => t.id === activeTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    const tab = TABS.find((t) => t.id === tabId);
    setOpenSection(tab.sections[0]?.id ?? null);
  };

  return (
    <div className="ml-[60px] mt-[150px]">
      <h1 className="text-3xl font-bold mb-6">Անվտանգություն</h1>

      <div className="flex gap-6 items-start">
        <nav className="flex flex-col w-64 shrink-0 gap-1">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center justify-between text-left rounded-[15px] border-none text-black px-4 py-3 ${
                  isActive ? "bg-sky-400" : "bg-white"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && <ChevronRight size={16} className="shrink-0 ml-2" />}
              </button>
            );
          })}
        </nav>

        <div className="flex-1">
          {currentTab.sections.map((section) => {
            const isOpen = section.id === openSection;
            return (
              <div key={section.id} className="border-b py-3">
                <button
                  onClick={() => setOpenSection(isOpen ? null : section.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-xl font-semibold">{section.title}</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>

                {isOpen && (
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {section.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}