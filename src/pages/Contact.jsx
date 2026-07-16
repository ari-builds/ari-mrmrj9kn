import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-display font-semibold grad-text">Contact</h1>
      <p className="mt-4 text-white/70">Tell us about your project. We reply within 24 hours.</p>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-8 space-y-4">
        <input required placeholder="Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
        <input required type="email" placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
        <textarea required placeholder="Project details" rows={5} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3" />
        <button className="px-5 py-3 rounded-full text-black font-medium bg-gradient-to-r from-brand-400 to-cyan-300">
          {sent ? "Sent ✓" : "Send message"}
        </button>
      </form>
    </section>
  );
}
