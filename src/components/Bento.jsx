const items = [
  { t: "Automated Insights", d: "Real-time signal from every touchpoint." },
  { t: "Composable Blocks", d: "Ship pages with premium primitives." },
  { t: "Edge Delivery", d: "Global CDN with sub-40ms responses." },
  { t: "Adaptive Theming", d: "Design tokens that flex per brand." },
  { t: "Zero-config Deploy", d: "Push to GitHub, live in seconds." },
  { t: "Native Integrations", d: "Stripe, Supabase, Resend, Slack." },
];
export default function Bento() {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-6 pb-24">
      {items.map((it, i) => (
        <div key={i} className={"glow-border p-6 " + (i === 0 ? "md:col-span-2 md:row-span-2" : "")}>
          <div className="text-xs uppercase tracking-widest text-white/50">Module {String(i + 1).padStart(2, "0")}</div>
          <div className="mt-3 text-2xl font-display font-semibold">{it.t}</div>
          <p className="mt-3 text-sm text-white/60">{it.d}</p>
        </div>
      ))}
    </section>
  );
}
