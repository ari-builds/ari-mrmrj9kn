const services = [
  { t: "Design Systems", p: "$4k", d: "Token-first, dark-mode ready." },
  { t: "Landing Pages", p: "$2k", d: "Cinematic, conversion-focused." },
  { t: "Full Product", p: "$12k", d: "End-to-end app + backend." },
];
export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-display font-semibold grad-text">Services</h1>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.t} className="glow-border p-6 flex flex-col">
            <div className="text-2xl font-display font-semibold">{s.t}</div>
            <div className="mt-2 text-white/60 text-sm flex-1">{s.d}</div>
            <div className="mt-6 text-3xl font-display">{s.p}</div>
            <button className="mt-4 px-4 py-2 rounded-full text-black font-medium bg-gradient-to-r from-brand-400 to-cyan-300">Book</button>
          </div>
        ))}
      </div>
    </section>
  );
}
