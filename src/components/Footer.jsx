export default function Footer() {
  return (
    <footer id="footer" className="bg-[#081B40] px-6 pt-16 text-[#C7D8F5]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-display text-[1.15rem] font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br from-blue-bright to-blue-deep text-sm">
              RB
            </span>
            <span>Rank Bytes</span>
          </a>
          <p className="my-3.5 max-w-[280px] text-[0.88rem] leading-relaxed text-[#A9C1EA]">
            The premium guest posting &amp; website advertising marketplace for international B2B growth.
          </p>
          <div className="flex gap-2.5">
            {['FB', 'in', 'WA'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="font-mono-label flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/20 text-[0.72rem] hover:bg-white/10"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="mb-4 font-display text-[0.95rem] text-white">Quick Links</h5>
          <div className="flex flex-col gap-2.5 text-[0.88rem] text-[#A9C1EA]">
            <a href="#top" className="hover:text-white">Home</a>
            <a href="#countries" className="hover:text-white">Websites</a>
            <a href="#budget" className="hover:text-white">Packages</a>
            <a href="#tools" className="hover:text-white">Free SEO Tools</a>
            <a href="#blog" className="hover:text-white">Blogs</a>
          </div>
        </div>

        <div>
          <h5 className="mb-4 font-display text-[0.95rem] text-white">Company</h5>
          <div className="flex flex-col gap-2.5 text-[0.88rem] text-[#A9C1EA]">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h5 className="mb-4 font-display text-[0.95rem] text-white">Contact</h5>
          <p className="text-[0.88rem] text-[#A9C1EA]">hello@rankbytes.com</p>
          <p className="text-[0.88rem] text-[#A9C1EA]">Live chat: Mon–Sat, 9am–9pm</p>
        </div>
      </div>

      <div className="border-t border-white/12 px-6 py-5 text-center text-[0.82rem] text-[#7F9BCB]">
        <p>© 2026 Rank Bytes. All rights reserved.</p>
      </div>
    </footer>
  );
}
