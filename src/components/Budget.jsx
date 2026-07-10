import { packages } from '../data';

export default function Budget() {
  return (
    <section id="budget" className="px-6 py-22">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">Packages</p>
        <h2 className="mb-11 text-[clamp(1.6rem,3vw,2.3rem)] font-bold">Pick a budget that fits</h2>

        <div className="grid grid-cols-1 gap-5.5 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={
                'relative flex flex-col gap-3.5 rounded-[22px] border p-8 ' +
                (p.featured
                  ? 'scale-100 border-transparent text-white shadow-[0_20px_48px_rgba(11,30,61,0.18)] lg:scale-[1.02]'
                  : 'border-line')
              }
              style={p.featured ? { background: 'linear-gradient(160deg, #0F3D91, #0B5ED7)' } : undefined}
            >
              {p.featured && (
                <span className="font-mono-label absolute -top-3 left-6.5 rounded-full bg-white px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.04em] text-blue-deep">
                  Most popular
                </span>
              )}
              <h3 className="text-[1.2rem] font-semibold">{p.name}</h3>
              <p className={'font-mono-label text-[1.15rem] font-semibold ' + (p.featured ? 'text-white' : 'text-blue-bright')}>
                {p.range}
              </p>
              <p className={'text-[0.92rem] leading-relaxed ' + (p.featured ? 'text-[#D6E5FC]' : 'text-slate')}>
                {p.desc}
              </p>
              <ul className="my-1.5 flex flex-col gap-2">
                {p.features.map((f) => (
                  <li key={f} className="relative pl-5 text-[0.88rem]">
                    <span className={'absolute left-0 font-bold ' + (p.featured ? 'text-[#9CC4FF]' : 'text-blue-bright')}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={
                  'mt-auto inline-flex w-fit items-center justify-center rounded-full px-6 py-2.75 text-[0.95rem] font-semibold transition-transform hover:-translate-y-0.5 ' +
                  (p.featured
                    ? 'bg-white text-blue-deep'
                    : 'border-[1.5px] border-blue-bright text-blue-bright hover:bg-tint')
                }
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
