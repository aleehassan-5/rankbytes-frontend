import { posts } from '../data';

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-22">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-mono-label mb-4.5 text-[0.78rem] uppercase tracking-[0.08em] text-blue-sky">From the blog</p>
        <h2 className="mb-11 text-[clamp(1.6rem,3vw,2.3rem)] font-bold">Latest in SEO, guest posting &amp; digital marketing</h2>

        <div className="grid grid-cols-1 gap-5.5 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-[22px] border border-line">
              <div
                className="font-mono-label flex h-27.5 items-center justify-center text-[0.85rem] tracking-[0.1em] text-white"
                style={{ background: 'linear-gradient(135deg, #0B5ED7, #0F3D91)' }}
              >
                {p.tag}
              </div>
              <h4 className="px-4.5 pb-2 pt-4.5 text-[1.02rem] leading-snug font-semibold">{p.title}</h4>
              <p className="px-4.5 text-[0.88rem] leading-relaxed text-slate">{p.desc}</p>
              <span className="font-mono-label block px-4.5 pb-4.5 pt-3.5 text-[0.76rem] text-blue-bright">{p.read}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
