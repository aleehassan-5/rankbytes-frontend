import { services } from '../data';
import { useOrderModal } from '../context/OrderModalContext';

export default function Services() {
  const { openOrderModal } = useOrderModal();

  return (
    <section id="services" className="px-6 py-22">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">What you can do here</p>
        <h2 className="mb-11 text-[clamp(1.6rem,3vw,2.3rem)] font-bold">Everything runs through one dashboard</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const actionable = s.id === 'request' || s.title === 'Bulk Packages';
            return (
              <article
                key={s.title}
                id={s.id}
                className="rounded-[22px] border border-line px-5.5 py-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(15,61,145,0.10)]"
              >
                <div className="mb-3.5 text-[1.7rem]">{s.icon}</div>
                <h3 className="mb-2 text-[1.08rem] font-semibold">{s.title}</h3>
                <p className="mb-4 text-[0.92rem] leading-relaxed text-slate">{s.desc}</p>
                {actionable && (
                  <button
                    type="button"
                    onClick={() => openOrderModal()}
                    className="text-[0.88rem] font-semibold text-blue-bright hover:underline"
                  >
                    Get started →
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
