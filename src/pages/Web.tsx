import { useState } from "react";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CaseStudies from "@/components/CaseStudies";
import { Globe, MousePointerClick, GitBranch, AppWindow, Database, ShoppingBag, X, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/services/firebase";

const builds = [
  { icon: Globe, title: "Business Websites", body: "Your digital storefront. Built to convert visitors into inquiries." },
  { icon: MousePointerClick, title: "Landing Pages", body: "Single-focus pages that exist for one reason: to get the click." },
  { icon: GitBranch, title: "Sales Funnels", body: "Multi-step sequences that take cold traffic and turn it into revenue." },
  { icon: AppWindow, title: "Web Applications", body: "Custom tools, dashboards, and platforms built for real workflows." },
  { icon: Database, title: "SaaS Platforms", body: "If you are building a product, we can build the software side of it." },
  { icon: ShoppingBag, title: "E-commerce Stores", body: "Storefronts that are fast, clean, and built to sell." },
];

const process = [
  { n: "01", title: "Discovery", body: "We do not start designing until we understand what the site needs to do and why the current one is not doing it." },
  { n: "02", title: "Design", body: "Wireframes first. Visual design second. Never the other way around." },
  { n: "03", title: "Development", body: "Clean code, fast load times, mobile-first." },
  { n: "04", title: "QA and Launch", body: "We test before you see it. You approve before it goes live." },
  { n: "05", title: "Support", body: "We do not disappear after handoff." },
];

const tech = ["React", "Next.js", "Tailwind", "Firebase", "Webflow", "Framer", "Shopify"];

// Modal
const ProjectModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ what: "", timeline: "", budget: "", name: "", email: "", message: "" });
  const [done, setDone] = useState(false);

  const reset = () => { setStep(0); setData({ what: "", timeline: "", budget: "", name: "", email: "", message: "" }); setDone(false); };
  const close = () => { onClose(); setTimeout(reset, 400); };

  const timelines = ["ASAP", "1 to 3 months", "3 to 6 months", "Flexible"];
  const budgets = ["Under $2k", "$2k to $5k", "$5k to $15k", "Let us talk"];

  const submit = async () => {
    if (!data.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return;

    try {
      await addDoc(collection(db, "leads"), {
        type: "project_inquiry",
        name: data.name,
        email: data.email,
        message: data.message || "",
        what: data.what || "",
        timeline: data.timeline || "",
        budget: data.budget || "",
        source: "web_modal",
        status: "new",
        createdAt: serverTimestamp(),
      });

      setDone(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} className="absolute top-5 right-5 text-muted-foreground hover:text-foreground"><X size={18} /></button>

            {!done && (
              <>
                <div className="flex gap-1.5 mb-8">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="0" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
                      <h3 className="display text-2xl mb-2">What are you building?</h3>
                      <p className="text-sm text-muted-foreground mb-6">Tell us in a sentence or two.</p>
                      <textarea
                        value={data.what}
                        maxLength={500}
                        onChange={(e) => setData({ ...data, what: e.target.value })}
                        rows={4}
                        className="w-full bg-background border border-border rounded-lg p-4 text-sm focus:border-primary outline-none resize-none"
                        placeholder="A landing page for our new product launch..."
                      />
                    </motion.div>
                  )}
                  {step === 1 && (
                    <motion.div key="1" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
                      <h3 className="display text-2xl mb-6">What is your timeline?</h3>
                      <div className="flex flex-wrap gap-2">
                        {timelines.map((t) => (
                          <button key={t} onClick={() => setData({ ...data, timeline: t })}
                            className={`px-4 py-2 rounded-full text-sm border transition-colors ${data.timeline === t ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div key="2" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
                      <h3 className="display text-2xl mb-6">Rough budget?</h3>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((t) => (
                          <button key={t} onClick={() => setData({ ...data, budget: t })}
                            className={`px-4 py-2 rounded-full text-sm border transition-colors ${data.budget === t ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div key="3" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} className="space-y-4">
                      <h3 className="display text-2xl mb-2">Last bit. Who are you?</h3>
                      <input value={data.name} maxLength={100} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Name" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none" />
                      <input value={data.email} maxLength={120} type="email" onChange={(e) => setData({ ...data, email: e.target.value })} placeholder="Email" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none" />
                      <textarea value={data.message} maxLength={500} onChange={(e) => setData({ ...data, message: e.target.value })} rows={3} placeholder="Anything else? (optional)" className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:border-primary outline-none resize-none" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex justify-between">
                  <button onClick={() => setStep((s) => Math.max(0, s - 1))} className={`text-sm text-muted-foreground hover:text-foreground transition-colors ${step === 0 ? "invisible" : ""}`}>← Back</button>
                  {step < 3 ? (
                    <button onClick={() => setStep((s) => s + 1)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all">
                      Next <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button onClick={submit} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition-all">
                      Send it
                    </button>
                  )}
                </div>
              </>
            )}

            {done && (
              <div className="text-center py-8">
                <Check className="mx-auto text-primary mb-4" size={36} />
                <h3 className="display text-2xl mb-2">Got it.</h3>
                <p className="text-muted-foreground text-sm">We will be back within one business day.</p>
                <button onClick={close} className="mt-8 text-sm text-primary hover:underline">Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Web = () => {
  const [open, setOpen] = useState(false);

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg pointer-events-none" />
        <div className="container-tight relative pt-20 md:pt-32 pb-16 md:pb-24">
          <Reveal><span className="text-xs uppercase tracking-[0.2em] text-primary">Websites & Software</span></Reveal>
          <Reveal delay={0.1}>
            <h1 className="display text-4xl md:text-7xl mt-6 leading-[1.05] max-w-4xl">
              If your website is not doing work, it is just <em className="text-primary not-italic">decoration</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              We build for conversion, not compliments. Every project starts with what it needs to accomplish. Then we build backward from that.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a href="#portfolio" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
              See our work →
            </a>
          </Reveal>
        </div>
      </section>

      <section className="container-tight py-20">
        <Reveal><h2 className="display text-3xl md:text-4xl mb-12">What we build.</h2></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {builds.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="p-7 rounded-2xl border border-border bg-card h-full hover:border-primary/40 transition-colors group">
                <b.icon className="text-primary mb-5 group-hover:scale-110 transition-transform" size={22} strokeWidth={1.5} />
                <h3 className="display text-xl mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-tight py-20">
        <Reveal><h2 className="display text-3xl md:text-4xl mb-12">How a project moves.</h2></Reveal>
        <div className="space-y-px bg-border rounded-2xl overflow-hidden border border-border">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="bg-card p-6 md:p-8 grid md:grid-cols-[100px_240px_1fr] gap-4 md:gap-8 items-start">
                <span className="display text-primary text-sm">{s.n}</span>
                <h3 className="display text-xl">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-tight py-20">
        <Reveal><h2 className="display text-3xl md:text-4xl mb-10">Tools we reach for.</h2></Reveal>
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <span key={t} className="px-5 py-2 rounded-full border border-border bg-card text-sm">{t}</span>
          ))}
        </div>
      </section>

      <div id="portfolio">
        <CaseStudies
          service="web"
          heading="Recent work."
          subhead="Sites and platforms we have shipped recently. Tap any card to dig into the build."
        />
      </div>

      {/* CTA with modal trigger */}
      <section className="container-tight py-24 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
            <div className="relative">
              <h2 className="display text-3xl md:text-5xl">Got something in mind?</h2>
              <button onClick={() => setOpen(true)} className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
                Tell us about your project
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <ProjectModal open={open} onClose={() => setOpen(false)} />
    </PageShell>
  );
};

export default Web;
