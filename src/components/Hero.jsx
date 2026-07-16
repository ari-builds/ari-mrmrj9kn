export default function Hero({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" /> Premium build
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold tracking-tight grad-text">{title}</h1>
          <p className="mt-6 text-white/70 text-lg max-w-lg">{subtitle}</p>
          <div className="mt-8 flex gap-3">
            <button className="px-5 py-3 rounded-full text-black font-medium bg-gradient-to-r from-brand-400 to-cyan-300">Launch</button>
            <button className="px-5 py-3 rounded-full border border-white/15 text-white/90">Learn more</button>
          </div>
        </div>
        <div className="glow-border p-2">
          <img src={image} alt="hero" className="w-full h-[380px] object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
