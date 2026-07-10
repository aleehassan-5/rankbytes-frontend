import { countries } from '../data';

export default function Countries() {
  const scrollToSearch = (name) => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' });
    const sel = document.getElementById('fCountry');
    if (sel && [...sel.options].some((o) => o.value === name)) sel.value = name;
  };

  return (
    <section id="countries" className="px-6 py-22">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">Global reach</p>
        <h2 className="mb-3.5 text-[clamp(1.6rem,3vw,2.3rem)] font-bold">Publishers in over 100 countries</h2>
        <p className="mb-11 max-w-[560px] text-[1.02rem] leading-relaxed text-slate">
          Tap a flag to see country-specific publishers, their niches and pricing.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3.5">
          {countries.map(([flag, name]) => (
            <button
              key={name}
              type="button"
              onClick={() => scrollToSearch(name)}
              className="flex flex-col items-center gap-2 rounded-[14px] border border-line bg-white px-2.5 py-4.5 transition-all hover:-translate-y-1 hover:border-blue-sky hover:shadow-[0_12px_32px_rgba(15,61,145,0.10)] focus-visible:outline-2 focus-visible:outline-blue-sky"
            >
              <span className="text-[1.9rem]">{flag}</span>
              <span className="text-center text-[0.78rem] font-medium text-slate">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
