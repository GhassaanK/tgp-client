import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTABlock from "@/components/CTABlock";
import CaseStudies from "@/components/CaseStudies";
import { TrendingDown, Target, BarChart3, ClipboardCheck, Lightbulb, Rocket, TrendingUp, FileSearch, LineChart, Users, Layers, RefreshCw } from "lucide-react";

const problems = [
  { icon: TrendingDown, text: "Ad spend going up, results staying flat." },
  { icon: Target, text: "Creative that works for a week, then dies." },
  { icon: BarChart3, text: "No idea which campaign is actually working." },
];

const steps = [
  { n: "01", icon: ClipboardCheck, title: "Audit and Clarity", body: "We do not touch your budget until we understand why it is underperforming." },
  { n: "02", icon: Lightbulb, title: "Creative Architecture", body: "The offer, the angle, and the hook come before we build a single ad." },
  { n: "03", icon: Rocket, title: "Launch and Learn", body: "Controlled spend. Real data. No guessing." },
  { n: "04", icon: TrendingUp, title: "Scale What Works", body: "Not what looks good in a report." },
];

const deliverables = [
  { icon: FileSearch, label: "Full account audit" },
  { icon: LineChart, label: "Weekly performance reporting" },
  { icon: Lightbulb, label: "Creative strategy" },
  { icon: Users, label: "Audience architecture" },
  { icon: Layers, label: "Funnel structure" },
  { icon: RefreshCw, label: "Ongoing optimization" },
];

const stats = [
  { stat: "4.2x", label: "ROAS in 60 days", tag: "D2C skincare brand" },
  { stat: "$80k/mo", label: "in pipeline, from $0", tag: "B2B SaaS company" },
  { stat: "-61%", label: "cost per lead in 45 days", tag: "Service business, UK" },
];

const Leads = () => (
  <PageShell>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="container-tight relative pt-20 md:pt-32 pb-16 md:pb-24">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-primary">Paid Social · Lead Generation</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display text-4xl md:text-7xl mt-6 leading-[1.05] max-w-4xl">
            Most ad accounts are not broken. They are just <em className="text-primary not-italic">confused</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We fix the strategy first. Targeting, creative angles, funnel structure. Then we spend. That is why our results hold.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a href="#approach" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
            See how we do it →
          </a>
        </Reveal>
      </div>
    </section>

    {/* Problems */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-12">If any of this sounds familiar.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-7 rounded-2xl border border-border bg-card h-full">
              <p.icon className="text-primary mb-4" size={22} strokeWidth={1.5} />
              <p className="display text-xl leading-snug">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Approach */}
    <section id="approach" className="container-tight py-20">
      <Reveal>
        <h2 className="display text-3xl md:text-5xl mb-4">Our approach.</h2>
        <p className="text-muted-foreground max-w-2xl">Four steps. Same order. Every time.</p>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="bg-card p-8 md:p-10 h-full">
              <div className="flex items-center gap-4 mb-5">
                <span className="display text-primary text-sm">{s.n}</span>
                <s.icon size={18} className="text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="display text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Deliverables */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-12">What you get.</h2></Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {deliverables.map((d, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors">
              <d.icon size={20} className="text-primary" strokeWidth={1.5} />
              <span className="text-sm">{d.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Results */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-12">Numbers we like talking about.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-8 rounded-2xl border border-border bg-gradient-card">
              <div className="display text-5xl md:text-6xl text-primary">{s.stat}</div>
              <div className="mt-3 text-foreground">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.tag}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CaseStudies
      service="leads"
      heading="Work that paid for itself."
      subhead="A few recent paid social engagements. Tap any card for the full breakdown."
    />

    <CTABlock headline="Want us to look at your account?" buttonLabel="Book a free audit" to="/contact" />
  </PageShell>
);

export default Leads;
