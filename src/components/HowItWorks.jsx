import { steps } from '../data';

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="px-6 py-22 text-white"
      style={{ background: 'linear-gradient(180deg, #0B2657, #0F3D91)' }}
    >
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-[#9CC4FF]">The process</p>
        <h2 className="mb-3.5 text-[clamp(1.6rem,3vw,2.3rem)] font-bold text-white">How it works</h2>
        <p className="mb-11 max-w-[560px] text-[1.02rem] leading-relaxed text-[#C7D8F5]">
          Seven steps from picking a website to going live — every order is checked by a real person before it's approved.
        </p>

        <ol className="flex max-w-[720px] flex-col">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 border-b border-white/12 py-5.5 last:border-none"
            >
              <span className="font-mono-label min-w-9 pt-0.5 text-[0.85rem] text-blue-sky">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="mb-1 text-[1.05rem] font-semibold text-white">{step.title}</h4>
                <p className="text-[0.92rem] leading-relaxed text-[#B9CEF0]">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
