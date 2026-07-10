import { useEffect, useRef, useState } from 'react';
import WorldMap from './WorldMap';
import { useOrderModal } from '../context/OrderModalContext';

function useCountUp(target, active, suffix = '') {
  const [value, setValue] = useState('0' + suffix);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let frame;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target) + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, suffix]);

  return value;
}

export default function Hero() {
  const statRef = useRef(null);
  const [active, setActive] = useState(false);
  const { openOrderModal } = useOrderModal();

  useEffect(() => {
    const el = statRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setActive(true), obs.disconnect())),
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const countries = useCountUp(108, active, '+');
  const sites = useCountUp(4200, active, '+');

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-21 pt-24 text-white"
      style={{ background: 'radial-gradient(120% 100% at 50% 0%, #123B87 0%, #0B2657 55%, #081B40 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-55" aria-hidden="true">
        <WorldMap />
      </div>

      <div className="relative z-10 mx-auto max-w-[840px] text-center">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">
          100+ countries · verified publisher network
        </p>
        <h1 className="mb-5 text-[clamp(2.1rem,4.6vw,3.4rem)] font-bold leading-[1.15] text-white">
          Premium Guest Posting &amp; Website Advertising Marketplace
        </h1>
        <p className="mx-auto mb-8.5 max-w-[620px] text-[1.08rem] leading-relaxed text-[#C7D8F5]">
          Place your content on trusted, high-authority websites across the globe. Search, compare and order
          placements from a live network built for international B2B growth.
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-3.5">
          <a
            href="#countries"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-bright to-blue-deep px-7 py-3.5 text-base font-semibold text-white shadow-[0_12px_32px_rgba(15,61,145,0.10)] transition-transform hover:-translate-y-0.5"
          >
            Browse Websites
          </a>
          <button
            type="button"
            onClick={() => openOrderModal()}
            className="inline-flex items-center justify-center rounded-full border-[1.5px] border-white/50 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Request Any Website
          </button>
        </div>

        <div ref={statRef} className="flex flex-wrap justify-center gap-14 border-t border-white/15 pt-8">
          <div className="flex flex-col items-center gap-1">
            <strong className="font-mono-label text-[1.7rem] text-white">{countries}</strong>
            <span className="text-[0.82rem] text-blue-sky">Countries covered</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="font-mono-label text-[1.7rem] text-white">{sites}</strong>
            <span className="text-[0.82rem] text-blue-sky">Live publishers</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <strong className="font-mono-label text-[1.7rem] text-white">24h</strong>
            <span className="text-[0.82rem] text-blue-sky">Avg. verification time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
