const fieldClass =
  'rounded-[9px] border-[1.5px] border-line bg-white px-3 py-2.75 text-[0.94rem] text-ink focus:border-blue-bright focus:outline-none focus:ring-3 focus:ring-blue-bright/15';
const labelClass = 'font-mono-label text-[0.78rem] font-semibold uppercase tracking-[0.03em] text-slate';

export default function SearchPanel() {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="search" className="bg-tint px-6 py-22">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">Find the right fit</p>
        <h2 className="mb-11 text-[clamp(1.6rem,3vw,2.3rem)] font-bold">Advanced website search</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-[22px] border border-line bg-white p-7 shadow-[0_12px_32px_rgba(15,61,145,0.10)] sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fWebsite" className={labelClass}>Website</label>
            <input id="fWebsite" type="text" placeholder="e.g. techcrunch.com" className={fieldClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="fCountry" className={labelClass}>Country</label>
            <select id="fCountry" className={fieldClass}>
              <option value="">Any country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Brazil</option>
              <option>India</option>
              <option>UAE</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="fNiche" className={labelClass}>Niche</label>
            <select id="fNiche" className={fieldClass}>
              <option value="">Any niche</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Health</option>
              <option>Travel</option>
              <option>Fashion</option>
              <option>Business</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="fDR" className={labelClass}>Domain Rating</label>
            <select id="fDR" className={fieldClass}>
              <option value="">Any DR</option>
              <option>0 – 30</option>
              <option>30 – 50</option>
              <option>50 – 70</option>
              <option>70+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="fTraffic" className={labelClass}>Traffic</label>
            <select id="fTraffic" className={fieldClass}>
              <option value="">Any traffic</option>
              <option>1K – 10K</option>
              <option>10K – 50K</option>
              <option>50K – 200K</option>
              <option>200K+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="fLang" className={labelClass}>Language</label>
            <select id="fLang" className={fieldClass}>
              <option value="">Any language</option>
              <option>English</option>
              <option>Portuguese</option>
              <option>Spanish</option>
              <option>German</option>
              <option>Arabic</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="fBudget" className={labelClass}>Budget</label>
            <select id="fBudget" className={fieldClass}>
              <option value="">Any budget</option>
              <option>$5 – $100</option>
              <option>$100 – $1,000</option>
              <option>$1,000 – $3,000+</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-1.5 rounded-full bg-gradient-to-br from-blue-bright to-blue-deep px-7 py-3 font-semibold text-white shadow-[0_12px_32px_rgba(15,61,145,0.10)] transition-transform hover:-translate-y-0.5 sm:col-span-2 lg:col-span-4"
          >
            Search Websites
          </button>
        </form>
      </div>
    </section>
  );
}
