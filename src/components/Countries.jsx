import { useState } from 'react';
import { countries } from '../data';

const TABS = ['All', 'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];

export default function Countries() {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const scrollToSearch = (name) => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
    const sel = document.getElementById('fCountry');
    if (sel && [...sel.options].some((o) => o.value === name)) sel.value = name;
  };

  const filtered = activeTab === 'All'
    ? countries
    : countries.filter(([,, continent]) => continent === activeTab);

  const visible = showAll ? filtered : filtered.slice(0, 48);

  return (
    <section id="countries" className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <p className="font-mono-label mb-4 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">
          Global reach
        </p>
        <h2 className="mb-3 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-gray-900">
          Publishers in over 100 countries
        </h2>
        <p className="mb-10 max-w-[560px] text-[1.02rem] leading-relaxed text-slate">
          Tap a flag to see country-specific publishers, their niches and pricing.
        </p>

        {/* Continent Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }}
              className={`rounded-full px-5 py-2 text-[0.88rem] font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Country Pills with real flag images */}
        <div className="flex flex-wrap gap-2.5">
          {visible.map(([code, name]) => (
            <button
              key={code}
              type="button"
              onClick={() => scrollToSearch(name)}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[0.88rem] font-medium text-gray-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <img
                src={`https://flagcdn.com/24x18/${code}.png`}
                srcSet={`https://flagcdn.com/48x36/${code}.png 2x`}
                width="24"
                height="18"
                alt={name}
                className="rounded-[2px] object-cover shadow-sm"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* View All Button */}
        {filtered.length > 48 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-[0.92rem] font-bold tracking-wide text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              {showAll ? 'SHOW LESS ↑' : `VIEW ALL ${filtered.length} COUNTRIES →`}
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="py-16 text-center text-gray-400">No countries in this region yet.</p>
        )}
      </div>
    </section>
  );
}
