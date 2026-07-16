export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-display font-semibold grad-text">About Aurora</h1>
      <p className="mt-6 text-white/70 text-lg">
        We build premium, production-grade interfaces powered by modern design systems, motion, and edge delivery.
      </p>
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {["Craft","Speed","Depth"].map((t) => (
          <div key={t} className="glow-border p-6">
            <div className="text-2xl font-display font-semibold">{t}</div>
            <p className="mt-2 text-sm text-white/60">Obsession with the fundamentals every real product depends on.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
