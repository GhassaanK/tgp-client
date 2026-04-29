import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";
import Reveal from "./Reveal";

export type CaseStudy = {
  slug: string;
  service: "leads" | "social" | "web";
  category: string;
  name: string;
  client: string;
  tagline: string;
  grad: string;
  outcome: { stat: string; label: string };
  metrics: { stat: string; label: string }[];
  challenge: string;
  approach: string[];
  result: string;
  quote?: { text: string; author: string };
};

export const caseStudies: CaseStudy[] = [
  // Leads
  {
    slug: "lumen-skincare",
    service: "leads",
    category: "D2C Skincare",
    name: "Lumen Skincare",
    client: "Lumen Skincare · D2C",
    tagline: "From flat ROAS to a 4.2x scaling engine in 60 days.",
    grad: "from-rose-500/30 to-amber-500/20",
    outcome: { stat: "4.2x", label: "ROAS in 60 days" },
    metrics: [
      { stat: "4.2x", label: "blended ROAS" },
      { stat: "-38%", label: "cost per acquisition" },
      { stat: "$220k", label: "monthly revenue lift" },
    ],
    challenge:
      "Lumen had a strong product but their Meta account was running on autopilot. Spend was climbing, ROAS was stuck at 1.6x, and creative was burning out within a week.",
    approach: [
      "Full account audit. Killed 70% of the active campaigns on day one.",
      "Rebuilt creative around three core angles instead of fifteen lookalike variations.",
      "Restructured the funnel: cold to warm to retargeting, with offers calibrated for each.",
      "Weekly creative sprints to refresh the top performers before fatigue hit.",
    ],
    result:
      "Inside 60 days they were at a steady 4.2x blended ROAS while doubling daily spend. We moved from optimizing ads to optimizing the offer.",
    quote: {
      text: "They asked why before they asked how. That is the difference. We have never had this much control over our paid social.",
      author: "Founder, Lumen Skincare",
    },
  },
  {
    slug: "pulse-analytics-leads",
    service: "leads",
    category: "B2B SaaS",
    name: "Pulse Analytics",
    client: "Pulse Analytics · B2B SaaS",
    tagline: "$80k/mo in pipeline from a paid social account that started at zero.",
    grad: "from-emerald-500/30 to-teal-700/20",
    outcome: { stat: "$80k/mo", label: "in pipeline, from $0" },
    metrics: [
      { stat: "$80k", label: "monthly pipeline" },
      { stat: "$140", label: "cost per qualified lead" },
      { stat: "11%", label: "MQL to SQL rate" },
    ],
    challenge:
      "Pulse had never run paid social. Their team assumed LinkedIn ads would not work for a mid-market SaaS at their price point.",
    approach: [
      "Built audience layers around job title, company size, and intent signals.",
      "Wrote three creative tracks: pain-led, proof-led, and product-led.",
      "Connected ad clicks to a lightweight qualifier instead of a generic demo form.",
      "Closed the loop with sales weekly so we knew which leads actually closed.",
    ],
    result:
      "By month three the account was generating a steady $80k in pipeline per month at a CPL the sales team was happy to pay.",
    quote: {
      text: "Direct, honest, fast. We hit our pipeline goal inside a quarter and they kept pushing for more.",
      author: "Daniel Ross, Head of Growth",
    },
  },
  {
    slug: "ridgeline-services",
    service: "leads",
    category: "Local Service",
    name: "Ridgeline Services",
    client: "Ridgeline Services · UK",
    tagline: "Cut cost per lead by 61% in 45 days for a service business.",
    grad: "from-blue-500/30 to-indigo-700/20",
    outcome: { stat: "-61%", label: "cost per lead in 45 days" },
    metrics: [
      { stat: "-61%", label: "cost per lead" },
      { stat: "3.2x", label: "lead volume" },
      { stat: "92%", label: "qualified rate" },
    ],
    challenge:
      "Ridgeline was paying £85 per lead and most were not even in their service area. The targeting was too broad and the form was too generic.",
    approach: [
      "Tightened geo and demographic targeting to actual serviceable postcodes.",
      "Replaced the generic contact form with a four-question qualifier.",
      "Wrote ads that pre-qualified intent before the click, not after.",
      "Added call tracking so we could attribute revenue, not just leads.",
    ],
    result:
      "Cost per lead dropped to £33 and 92% of leads were genuinely qualified. Volume tripled with a smaller daily budget.",
  },

  // Social
  {
    slug: "loomstead-organic",
    service: "social",
    category: "Lifestyle Brand",
    name: "Loomstead",
    client: "Loomstead · Lifestyle",
    tagline: "Built a 90k Instagram audience in nine months. Without a single boosted post.",
    grad: "from-amber-500/20 to-rose-600/20",
    outcome: { stat: "+90k", label: "followers in 9 months" },
    metrics: [
      { stat: "+90k", label: "Instagram followers" },
      { stat: "8.4%", label: "average engagement rate" },
      { stat: "31%", label: "of revenue attributed to social" },
    ],
    challenge:
      "Loomstead had a beautiful product and a stagnant feed. Posting was inconsistent. Engagement hovered around 1%.",
    approach: [
      "Built a content system around three pillars: craft, story, and customer.",
      "Wrote everything in the founder's voice. Nothing felt like agency content.",
      "Shifted posting cadence from random to predictable, four times a week.",
      "Layered in active community management to turn engagement into conversation.",
    ],
    result:
      "Nine months in, the account had 90k followers, an engagement rate of 8.4%, and was driving roughly a third of monthly revenue.",
    quote: {
      text: "They asked sharper questions in week one than our last agency asked all year.",
      author: "Maya Okafor, Founder",
    },
  },
  {
    slug: "harbor-coffee",
    service: "social",
    category: "Hospitality",
    name: "Harbor Coffee Co.",
    client: "Harbor Coffee Co. · 6 locations",
    tagline: "Turned a quiet local account into a citywide waitlist.",
    grad: "from-orange-500/30 to-red-700/20",
    outcome: { stat: "3x", label: "follower growth" },
    metrics: [
      { stat: "3x", label: "follower growth" },
      { stat: "+42%", label: "weekend foot traffic" },
      { stat: "12k", label: "DM inquiries handled" },
    ],
    challenge:
      "Six locations, one stale Instagram, no consistent voice. Their content looked like every other coffee shop on the feed.",
    approach: [
      "Developed a distinct visual identity rooted in the brand, not the trends.",
      "Created a weekly story rhythm: roast notes, staff picks, behind the bar.",
      "Trained baristas to feed us short clips so content felt real, not staged.",
      "Active DM management converted attention into reservations and orders.",
    ],
    result:
      "Within 90 days followers tripled and weekend foot traffic was up 42%. The account became a real driver, not a vanity project.",
  },
  {
    slug: "northwind-linkedin",
    service: "social",
    category: "B2B Studio",
    name: "Northwind Studio",
    client: "Northwind Studio · LinkedIn",
    tagline: "Made a quiet design studio impossible to ignore on LinkedIn.",
    grad: "from-teal-500/30 to-cyan-700/20",
    outcome: { stat: "5x", label: "inbound inquiries" },
    metrics: [
      { stat: "5x", label: "inbound inquiries" },
      { stat: "+18k", label: "LinkedIn followers" },
      { stat: "4", label: "speaking invites in 6 months" },
    ],
    challenge:
      "The founder had a point of view but no consistent presence. Posts were rare, polished, and forgettable.",
    approach: [
      "Built a publishing rhythm around opinions, case work, and process notes.",
      "Wrote in the founder's actual voice. Edited, not rewritten.",
      "Used carousels and short essays to teach instead of pitch.",
      "Engaged thoughtfully on other people's posts so the account stopped existing in a vacuum.",
    ],
    result:
      "Six months in, inbound inquiries were up 5x and the founder had received four paid speaking invitations.",
  },

  // Web
  {
    slug: "northwind-site",
    service: "web",
    category: "Brand Site",
    name: "Northwind Studio",
    client: "Northwind Studio · Brand site",
    tagline: "An editorial portfolio that books work, not just compliments.",
    grad: "from-teal-500/30 to-cyan-700/20",
    outcome: { stat: "+138%", label: "qualified inquiries" },
    metrics: [
      { stat: "+138%", label: "qualified inquiries" },
      { stat: "1.6s", label: "largest contentful paint" },
      { stat: "62%", label: "mobile conversion lift" },
    ],
    challenge:
      "Their old site looked great and converted poorly. Visitors browsed, admired, and left without saying hello.",
    approach: [
      "Reframed the site around a single job: get the right inquiry.",
      "Rebuilt the case study layout to lead with outcomes, not aesthetics.",
      "Stripped the navigation and added a project intake flow on every page.",
      "Performance pass: subset fonts, edge images, no third-party bloat.",
    ],
    result:
      "Inquiries more than doubled within 60 days and the team was able to be more selective about which projects they took on.",
  },
  {
    slug: "pulse-platform",
    service: "web",
    category: "SaaS Platform",
    name: "Pulse Analytics",
    client: "Pulse Analytics · Web app",
    tagline: "Replaced a clunky internal tool with a multi-tenant platform.",
    grad: "from-emerald-500/30 to-teal-700/20",
    outcome: { stat: "9x", label: "faster reporting" },
    metrics: [
      { stat: "9x", label: "faster reporting workflow" },
      { stat: "-70%", label: "support tickets" },
      { stat: "100%", label: "of customers migrated in 30 days" },
    ],
    challenge:
      "Pulse was running their entire business on a Frankenstein tool nobody enjoyed using. Onboarding new clients took days.",
    approach: [
      "Spent two weeks shadowing real workflows before opening Figma.",
      "Designed a tenant model so the team could spin up clients in minutes.",
      "Built on React, edge functions, and a typed schema end to end.",
      "Phased migration so no customer ever lost access during the cutover.",
    ],
    result:
      "Reporting that used to take a full day now runs in under an hour. Support tickets dropped 70% in the first month.",
  },
  {
    slug: "hearth-ecom",
    service: "web",
    category: "E-commerce",
    name: "Hearth & Co",
    client: "Hearth & Co · Headless Shopify",
    tagline: "A storefront that loads in 1.6s and actually sells.",
    grad: "from-amber-500/20 to-rose-600/20",
    outcome: { stat: "+47%", label: "conversion rate" },
    metrics: [
      { stat: "+47%", label: "conversion rate" },
      { stat: "1.6s", label: "LCP on mobile" },
      { stat: "+28%", label: "average order value" },
    ],
    challenge:
      "A beautiful Shopify theme that took five seconds to load and converted at half the industry average.",
    approach: [
      "Moved to a headless setup so the storefront could be tuned independently.",
      "Rebuilt PDPs around the buying decision, not the product photo.",
      "Added smart bundles and a frictionless checkout flow.",
      "Aggressive image and font strategy got mobile LCP under two seconds.",
    ],
    result:
      "Conversion rate jumped 47% and average order value climbed 28% inside the first quarter post-launch.",
    quote: {
      text: "They built us a site that actually sells. Not just one that looks nice. Big difference.",
      author: "Priya Shah, CMO",
    },
  },
];

const CaseStudyModal = ({ study, onClose }: { study: CaseStudy | null; onClose: () => void }) => (
  <AnimatePresence>
    {study && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl my-8 rounded-2xl border border-border bg-card overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-background/60 backdrop-blur border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className={`aspect-[16/7] bg-gradient-to-br ${study.grad} relative`}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{study.category}</div>
              <h3 className="display text-2xl md:text-4xl">{study.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{study.client}</p>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <p className="display text-xl md:text-2xl leading-snug">{study.tagline}</p>

            <div className="grid grid-cols-3 gap-3">
              {study.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl border border-border bg-background/50">
                  <div className="display text-2xl md:text-3xl text-primary">{m.stat}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">The challenge</h4>
              <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">What we did</h4>
              <ul className="space-y-3">
                {study.approach.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <Check size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">The outcome</h4>
              <p className="text-muted-foreground leading-relaxed">{study.result}</p>
            </div>

            {study.quote && (
              <blockquote className="border-l-2 border-primary pl-5 py-2">
                <p className="display text-lg leading-relaxed">"{study.quote.text}"</p>
                <footer className="mt-3 text-sm text-muted-foreground">— {study.quote.author}</footer>
              </blockquote>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

type Props = {
  service?: "leads" | "social" | "web";
  heading?: string;
  subhead?: string;
};

const CaseStudies = ({ service, heading, subhead }: Props) => {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const items = service ? caseStudies.filter((c) => c.service === service) : caseStudies;

  return (
    <section className="container-wide py-20">
      <Reveal>
        <h2 className="display text-3xl md:text-5xl mb-4">{heading ?? "Selected work."}</h2>
        {subhead && <p className="text-muted-foreground max-w-2xl mb-12">{subhead}</p>}
        {!subhead && <div className="mb-12" />}
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <button
              onClick={() => setActive(p)}
              className="group block w-full text-left rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.grad} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_100%)]" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="display text-3xl text-primary">{p.outcome.stat}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{p.outcome.label}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-primary mb-2">{p.category}</div>
                <h3 className="display text-xl mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.tagline}</p>
                <span className="text-sm text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <ArrowRight size={14} />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <CaseStudyModal study={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default CaseStudies;
