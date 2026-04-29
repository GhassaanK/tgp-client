import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTABlock from "@/components/CTABlock";
import { ArrowRight, Target, Sparkles, Code2 } from "lucide-react";

const services = [
  {
    icon: Target,
    name: "Paid Social & Lead Generation",
    desc: "We fix strategy before we fix spend. Targeting, creative angles, and funnel structure designed around what you actually sell — not what platform best practices say to do.",
    deliverables: ["Full ad account audit", "Audience architecture", "Creative strategy & angles", "Funnel & landing structure", "Weekly performance reporting", "Ongoing optimization"],
    to: "/leads",
  },
  {
    icon: Sparkles,
    name: "Social Media Management",
    desc: "Organic presence with a point of view. We do not post to fill calendars. We post to build trust, capture attention, and move people closer to working with you.",
    deliverables: ["Content calendar", "Copywriting & creative direction", "Posting & scheduling", "Community management", "Monthly performance reporting", "Quarterly strategy refresh"],
    to: "/social",
  },
  {
    icon: Code2,
    name: "Websites & Software Development",
    desc: "Business sites, landing pages, funnels, web apps, SaaS platforms, and stores. Every project is built backward from the outcome it needs to deliver.",
    deliverables: ["Discovery & wireframing", "Custom UI/UX design", "Front and back-end build", "Mobile-first responsive", "QA, launch & training", "Post-launch support"],
    to: "/web",
  },
];

const diff = [
  { title: "We do not take clients we cannot help.", body: "If your situation is not a fit for what we do, we will tell you. Often we will recommend someone else." },
  { title: "Strategy before execution, always.", body: "We do not start spending, posting, or building until we know exactly why. That is what makes the work hold up." },
  { title: "You talk to the people doing the work.", body: "No account managers relaying your feedback to a junior. The strategist, the designer, the media buyer — that is who you meet with." },
];

const Services = () => (
  <PageShell>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="container-tight relative pt-20 md:pt-32 pb-16">
        <Reveal>
          <h1 className="display text-4xl md:text-7xl leading-[1.05] max-w-4xl">
            Three things we do. <em className="text-primary not-italic">All of them well.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            We are not a full-service agency that dabbles in everything. These three are what we have built our entire operation around.
          </p>
        </Reveal>
      </div>
    </section>

    {services.map((s, i) => (
      <section key={s.name} className="container-tight py-16 md:py-24">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
            <div>
              <s.icon className="text-primary mb-6" size={28} strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">0{i+1}</div>
              <h2 className="display text-3xl md:text-5xl leading-tight">{s.name}</h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                {s.deliverables.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <span className="text-primary mt-1">—</span>
                    <span>{d}</span>
                  </div>
                ))}
              </div>
              <Link to={s.to} className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all">
                Start here <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
        {i < services.length - 1 && <div className="hairline mt-16 md:mt-24" />}
      </section>
    ))}

    {/* Differentiators */}
    <section className="container-tight py-20 hairline">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-14">Why teams pick us.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {diff.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.1}>
            <div className="p-7 rounded-2xl border border-border bg-card h-full">
              <h3 className="display text-xl mb-3">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <CTABlock headline="Ready to talk through which one is right for you?" buttonLabel="Get in touch" to="/contact" />
  </PageShell>
);

export default Services;
