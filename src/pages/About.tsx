import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import CTABlock from "@/components/CTABlock";

const team = [
  { name: "Alex Mendez", role: "Founder & Strategy", bio: "12 years across paid acquisition and brand." },
  { name: "Sam Chen", role: "Creative Direction", bio: "Former in-house at two D2C unicorns." },
  { name: "Jordan Wright", role: "Engineering Lead", bio: "Builds the things that have to work on Monday." },
];

const diff = [
  { title: "We do not take clients we cannot help.", body: "If we are not a fit, we will say so in the first call. Often we will introduce you to someone better suited." },
  { title: "Strategy before execution, always.", body: "Spending money or shipping pixels without a reason is how budgets get burned. We start with why, then execute." },
  { title: "You talk to the people doing the work.", body: "No account managers, no relay races. The people on your account are the people building it." },
];

const testimonials = [
  { name: "Maya Okafor", role: "Founder, Loomstead", quote: "They asked sharper questions in week one than our last agency asked all year. The work shows it." },
  { name: "Daniel Ross", role: "Head of Growth, Pulse Analytics", quote: "Direct, honest, fast. We hit 4x ROAS inside two months and they kept pushing." },
  { name: "Priya Shah", role: "CMO, Hearth & Co", quote: "They built us a site that actually sells. Not just one that looks nice. Big difference." },
];

const About = () => (
  <PageShell>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="container-tight relative pt-20 md:pt-32 pb-16 md:pb-24">
        <Reveal>
          <h1 className="display text-4xl md:text-7xl leading-[1.05] max-w-4xl">
            We are not the biggest agency in the room.
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 display text-2xl md:text-3xl text-primary">
            We are probably the most honest one.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="container-tight py-12">
      <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
        <Reveal>
          <p>The Growth Partners is a small team with one obsession: making your growth measurable. We do not sell packages. We look at your situation, figure out where the gap is, and fill it — whether that is ads, content, a new site, or all three.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>We started this because we were tired of watching businesses pay agency retainers and see nothing move. So we built the kind of shop we would have wanted to work with: direct, accountable, and completely focused on output over optics.</p>
        </Reveal>
      </div>
    </section>

    {/* Team */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-14">The people.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.1}>
            <div className="p-7 rounded-2xl border border-border bg-card h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-accent mb-5" />
              <div className="display text-xl">{m.name}</div>
              <div className="text-sm text-primary mb-3">{m.role}</div>
              <p className="text-sm text-muted-foreground">{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Differentiators */}
    <section className="container-tight py-20">
      <Reveal><h2 className="display text-3xl md:text-5xl mb-14">How we are different.</h2></Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {diff.map((d, i) => (
          <Reveal key={d.title} delay={i * 0.08}>
            <div className="p-7 rounded-2xl border border-border bg-card h-full">
              <h3 className="display text-xl mb-3">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="container-tight py-20">
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

    <CTABlock headline="If this sounds like what you have been looking for, we should talk." buttonLabel="Get in touch" to="/contact" />
  </PageShell>
);

export default About;
