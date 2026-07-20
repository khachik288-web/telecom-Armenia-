import React, { useState } from "react";
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";

const TABS = [
  { id: "current", label: "Գործող ընդհանուր դրույթներ և պայմաններ" },
  { id: "archive", label: "Արխիվ" },
];

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState("current");
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="ml-[60px] mt-[150px]">
      <h1>Ընդհանուր դրույթներ և պայմաններ</h1>

      <div className="flex gap-6 items-start mt-[150px]">
        <nav>
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`rounded-[15px] border-none text-black px-4 py-3 ${
          isActive ? "bg-sky-400" : "bg-white"
        }`}
      >
                <span>{tab.label}</span>
                {isActive && <ChevronRight size={16} />}
              </button>
            );
          })}
        </nav>
        <div>
          <button onClick={() => setExpanded((v) => !v)}>
            <span>{TABS.find((t) => t.id === activeTab)?.label}</span>
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>

          {expanded && (
            <div>
              <a href="#">{TABS.find((t) => t.id === activeTab)?.label}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
