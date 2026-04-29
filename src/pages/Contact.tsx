import { useState, FormEvent } from "react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { Calendar, Send, Check } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", need: "", message: "" });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || form.name.length > 100) return setError("Add your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("That email does not look right.");
    if (!form.need) return setError("Pick what you need help with.");
    if (!form.message.trim() || form.message.length > 1000) return setError("Add a short message.");
    setDone(true);
    setForm({ name: "", email: "", need: "", message: "" });
  };

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg pointer-events-none" />
        <div className="container-tight relative pt-20 md:pt-32 pb-12">
          <Reveal>
            <h1 className="display text-4xl md:text-7xl leading-[1.05]">Ready to actually talk?</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              No forms that go nowhere. No 48-hour response windows. Just a real conversation about whether we are the right fit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-tight py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Option A */}
          <Reveal>
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card h-full flex flex-col">
              <Calendar className="text-primary mb-5" size={24} strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Option A</div>
              <h2 className="display text-3xl mb-3">Book a call.</h2>
              <p className="text-muted-foreground mb-8 flex-1">Pick a 30-minute slot. We talk through your situation, no pitch deck.</p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
              >
                Pick a time that works
              </a>
            </div>
          </Reveal>

          {/* Option B */}
          <Reveal delay={0.1}>
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card h-full">
              <Send className="text-primary mb-5" size={24} strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Option B</div>
              <h2 className="display text-3xl mb-6">Send a message.</h2>

              {!done ? (
                <form onSubmit={submit} className="space-y-4">
                  <input
                    value={form.name}
                    maxLength={100}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Name"
                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                  <input
                    type="email"
                    value={form.email}
                    maxLength={120}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Email"
                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none transition-colors"
                  />
                  <select
                    value={form.need}
                    onChange={(e) => setForm({ ...form, need: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none transition-colors"
                  >
                    <option value="">What do you need?</option>
                    <option value="leads">Paid social / lead gen</option>
                    <option value="social">Social media management</option>
                    <option value="web">Website or software</option>
                    <option value="other">Not sure yet</option>
                  </select>
                  <textarea
                    value={form.message}
                    maxLength={1000}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none resize-none transition-colors"
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <button
                    type="submit"
                    className="w-full px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
                  >
                    Send it
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <Check className="mx-auto text-primary mb-4" size={36} />
                  <p className="display text-xl">Got it. We will be back within one business day.</p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
