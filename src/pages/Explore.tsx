import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTABlock from "@/components/CTABlock";
import CaseStudies from "@/components/CaseStudies";
import { ArrowRight, Target, Sparkles, Code2 } from "lucide-react";

const services = [
  {
    icon: Target,
    name: "Paid Social & Lead Generation",
    desc: "We fix strategy first, then spend. Targeting, creative, and funnel structure designed to actually convert — not just rack up impressions.",
    bullets: ["Account audit & strategy", "Creative architecture", "Audience & funnel build", "Ongoing optimization"],
    to: "/leads",
  },
  {
    icon: Sparkles,
    name: "Social Media Management",
    desc: "Organic content built with a point of view. Calendar, copy, creative, posting, community — handled, in a voice that sounds like you.",
    bullets: ["Content calendar & copy", "Creative direction", "Community management", "Monthly reporting"],
    to: "/social",
  },
  {
    icon: Code2,
    name: "Websites & Software",
    desc: "Sites, funnels, web apps, and platforms designed for what they need to accomplish. Built fast, built clean, built to last.",
    bullets: ["Discovery & wireframes", "Custom design & build", "QA, launch & training", "Ongoing support"],
    to: "/web",
  },
];

const stats = [
  { stat: "4.2x", label: "ROAS", sub: "D2C skincare brand, 60 days" },
  { stat: "$80k/mo", label: "in pipeline", sub: "B2B SaaS, paid social" },
  { stat: "3x", label: "follower growth", sub: "Service business, 90 days organic" },
];

const projects = [
  { name: "Northwind Studio", category: "Brand site", grad: "from-teal-500/30 to-cyan-700/20" },
  { name: "Pulse Analytics", category: "SaaS platform", grad: "from-emerald-500/30 to-teal-700/20" },
  { name: "Hearth & Co", category: "E-commerce", grad: "from-amber-500/20 to-rose-600/20" },
];

const testimonials = [
  { name: "Maya Okafor", role: "Founder, Loomstead", quote: "They asked sharper questions in week one than our last agency asked all year. The work shows it." },
  { name: "Daniel Ross", role: "Head of Growth, Pulse Analytics", quote: "Direct, honest, fast. We hit 4x ROAS inside two months and they kept pushing." },
  { name: "Priya Shah", role: "CMO, Hearth & Co", quote: "They built us a site that actually sells. Not just one that looks nice. Big difference." },
];

const Explore = () => (
  <PageShell>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="container-wide relative pt-20 md:pt-32 pb-20 md:pb-32">
        <Reveal>
          <h1 className="display text-5xl md:text-8xl leading-[0.95] max-w-5xl">
            We grow businesses. <em className="text-primary not-italic">On purpose.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Paid social that converts. Content that builds. Websites that work. Pick one or let us figure out which combination actually moves the needle for you.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#services" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all">See our services</a>
            <Link to="/contact" className="px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all">Let us talk</Link>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="container-wide py-20">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-14">What we do.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.1}>
            <div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col hover:border-primary/40 transition-colors">
              <s.icon className="text-primary mb-5" size={24} strokeWidth={1.5} />
              <h3 className="display text-2xl mb-3">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {s.bullets.map((b) => <li key={b}>— {b}</li>)}
              </ul>
              <Link to={s.to} className="mt-auto inline-flex items-center gap-2 text-primary text-sm hover:gap-3 transition-all">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Results */}
    <section className="container-wide py-20">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-14">What it looks like in practice.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-8 rounded-2xl border border-border bg-gradient-card">
              <div className="display text-5xl md:text-6xl text-primary">{s.stat}</div>
              <div className="mt-3">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{s.sub}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CaseStudies
      heading="Selected work."
      subhead="A small slice of recent projects across paid, organic, and product. Tap any card for the full story."
    />

    {/* About snippet */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-10">Who is behind this.</h2></Reveal>
      <div className="grid md:grid-cols-2 gap-8 text-lg text-muted-foreground leading-relaxed max-w-4xl">
        <Reveal delay={0.1}>
          <p>The Growth Partners is a small, focused team. We do not take on more clients than we can actually serve, and we do not assign your account to a junior who just started last week. You work with the people who built the strategy.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p>We started this because we were tired of watching good businesses waste money on agencies that overpromised and underdelivered. That frustration is still what drives how we work.</p>
        </Reveal>
      </div>
      <Reveal delay={0.3}>
        <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">Meet the team <ArrowRight size={16} /></Link>
      </Reveal>
    </section>

    {/* Testimonials */}
    <section className="container-wide py-20">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-14">What clients say.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col">
              <p className="display text-lg leading-relaxed mb-8 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-accent" />
                <div>
                  <div className="text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CTABlock
      headline="Not sure where to start? That is fine. We usually figure it out in the first conversation."
      buttonLabel="Book a free call"
      to="/contact"
    />
  </PageShell>
);

export default Explore;
