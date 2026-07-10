import { tools } from '../data';

export default function Tools() {
  return (
    <section id="tools" className="bg-tint px-6 py-22">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">No sign-up needed</p>
        <h2 className="mb-11 text-[clamp(1.6rem,3vw,2.3rem)] font-bold">Free SEO tools</h2>

        <div className="mb-8 grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <article key={t.title} className="rounded-[14px] border border-line bg-white p-5.5">
              <div className="mb-2.5 text-[1.5rem]">{t.icon}</div>
              <h4 className="mb-1.5 text-[0.98rem] font-semibold">{t.title}</h4>
              <p className="text-[0.86rem] leading-relaxed text-slate">{t.desc}</p>
            </article>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center rounded-full border-[1.5px] border-blue-bright px-6 py-2.75 font-semibold text-blue-bright transition-transform hover:-translate-y-0.5 hover:bg-white"
        >
          View All Tools
        </a>
      </div>
    </section>
  );
}
