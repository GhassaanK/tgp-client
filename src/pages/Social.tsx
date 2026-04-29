import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTABlock from "@/components/CTABlock";
import CaseStudies from "@/components/CaseStudies";
import { CalendarDays, PenLine, Camera, Send, MessageSquare, BarChart3, Check } from "lucide-react";

const problems = [
  "You have tried posting consistently. It did not move the needle.",
  "Your competitors look like they have a whole team behind their content.",
  "You know you should be on social. You just do not have the bandwidth.",
];

const handles = [
  { icon: CalendarDays, label: "Content calendar" },
  { icon: PenLine, label: "Copywriting" },
  { icon: Camera, label: "Creative direction" },
  { icon: Send, label: "Posting" },
  { icon: MessageSquare, label: "Community management" },
  { icon: BarChart3, label: "Monthly reporting" },
];

const platforms = ["Instagram", "LinkedIn", "TikTok", "Facebook", "Pinterest"];

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    suffix: "/mo",
    bullets: ["1 platform", "8 posts per month", "Monthly content calendar", "Basic engagement", "Monthly report"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$3,200",
    suffix: "/mo",
    bullets: ["2 platforms", "16 posts + 8 stories", "Custom creative direction", "Active community management", "Bi-weekly strategy calls"],
    featured: true,
  },
  {
    name: "Full Management",
    price: "$5,800",
    suffix: "/mo",
    bullets: ["3+ platforms", "Unlimited posting", "Original photo & video", "Dedicated strategist", "Weekly reporting"],
    featured: false,
  },
];

const Social = () => (
  <PageShell>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="container-tight relative pt-20 md:pt-32 pb-16 md:pb-24">
        <Reveal><span className="text-xs uppercase tracking-[0.2em] text-primary">Organic Social Growth</span></Reveal>
        <Reveal delay={0.1}>
          <h1 className="display text-4xl md:text-7xl mt-6 leading-[1.05] max-w-4xl">
            Posting without a strategy is not social media. It is <em className="text-primary not-italic">noise</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We build presence with intent. Content that attracts, nurtures, and converts. Quietly. Consistently.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a href="#what" className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all">
            See what this looks like →
          </a>
        </Reveal>
      </div>
    </section>

    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-12">The frustration is normal.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {problems.map((p, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-7 rounded-2xl border border-border bg-card h-full">
              <p className="display text-xl leading-snug">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section id="what" className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-12">What we handle.</h2></Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {handles.map((h, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors">
              <h.icon size={20} className="text-primary" strokeWidth={1.5} />
              <span className="text-sm">{h.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Philosophy */}
    <section className="container-tight py-20">
      <Reveal>
        <h2 className="display text-3xl md:text-5xl mb-10 max-w-3xl">How we think about content.</h2>
      </Reveal>
      <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
        <Reveal delay={0.05}>
          <p>Most agency content is forgettable by design. Made to fill a calendar, not to build a brand. We write for your specific audience, in a voice that sounds like you on your best day.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p>We do not believe in posting for the sake of posting. Every piece of content has a job. It either builds trust, captures attention, or moves someone closer to reaching out. If it does not do any of those things, it does not go out.</p>
        </Reveal>
      </div>
    </section>

    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-10">Where we play.</h2></Reveal>
      <div className="flex flex-wrap gap-3">
        {platforms.map((p) => (
          <span key={p} className="px-5 py-2 rounded-full border border-border bg-card text-sm hover:border-primary/50 hover:text-primary transition-colors">{p}</span>
        ))}
      </div>
    </section>

    {/* Pricing */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-4xl mb-12">Simple tiers. No fluff.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <div className={`relative p-8 rounded-2xl border h-full flex flex-col ${t.featured ? "border-primary/60 bg-gradient-card shadow-elegant" : "border-border bg-card"}`}>
              {t.featured && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">Most popular</span>
              )}
              <div className="display text-2xl">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="display text-4xl">{t.price}</span>
                <span className="text-muted-foreground text-sm">{t.suffix}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className={`mt-8 text-center px-5 py-3 rounded-full text-sm font-medium transition-all ${t.featured ? "bg-primary text-primary-foreground hover:shadow-glow" : "border border-border hover:border-primary hover:text-primary"}`}>
                Get started
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CaseStudies
      service="social"
      heading="Organic, when it actually works."
      subhead="Recent social engagements where consistent content moved real numbers."
    />

    <CTABlock headline="Let us figure out what you actually need." buttonLabel="Book a free strategy call" to="/contact" />
  </PageShell>
);

export default Social;
