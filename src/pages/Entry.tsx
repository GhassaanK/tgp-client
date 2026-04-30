import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Sparkles, Code2, Compass } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";

const cards = [
  {
    icon: Target,
    label: "We need more leads.",
    sub: "You're spending on ads, or about to. You want it to actually work.",
    to: "/leads",
  },
  {
    icon: Sparkles,
    label: "Our social presence is basically non-existent.",
    sub: "Content, consistency, growth. Handled. So you can focus on the business.",
    to: "/social",
  },
  {
    icon: Code2,
    label: "We need to build something.",
    sub: "A site, a funnel, a web app, a full platform. You have a vision. We build it.",
    to: "/web",
  },
  {
    icon: Compass,
    label: "Just looking around.",
    sub: "No specific ask yet. Give me the full picture.",
    to: "/explore",
  },
];

const Entry = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0: line1, 1: line2, 2: cards
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [exiting, setExiting] = useState<string | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1100);
    const t2 = setTimeout(() => setStep(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const handleCardClick = (to: string) => {
    setExiting(to);
    setTimeout(() => navigate(to), 480);
  };

  const handleEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    try {
      await addDoc(collection(db, "leads"), {
        type: "email_only",
        email: email.trim(),
        source: "homepage",
        status: "new",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Error saving lead:", err);
    }
  };
  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background grain"
        >
          <div className="absolute inset-0 mesh-bg pointer-events-none" />

          <div className="relative w-full max-w-5xl mx-auto px-6 py-16 text-center">
            {/* Greeting */}
            <div className="space-y-3 md:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: step >= 0 ? 1 : 0, y: step >= 0 ? 0 : 12 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="display text-3xl md:text-6xl leading-tight"
              >
                Hey. You made it here for a reason.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 12 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="display text-2xl md:text-4xl text-muted-foreground"
              >
                What's on your mind?
              </motion.p>
            </div>

            {/* Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="mt-14 md:mt-20 grid sm:grid-cols-2 gap-4 md:gap-5"
            >
              {cards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.button
                    key={c.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 24 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    onClick={() => handleCardClick(c.to)}
                    className="group relative text-left p-6 md:p-7 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-primary/60 hover:shadow-glow transition-all duration-300"
                  >
                    <Icon size={20} className="text-primary mb-5" strokeWidth={1.5} />
                    <div className="display text-lg md:text-xl leading-snug">{c.label}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.sub}</p>
                    <ArrowRight
                      size={16}
                      className="absolute top-6 right-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 2 ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 md:mt-20"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Or, drop your email and we will bring the right conversation to you.
              </p>
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleEmail}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="max-w-md mx-auto flex items-center gap-2 border-b border-border focus-within:border-primary transition-colors py-2"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      maxLength={120}
                      className="flex-1 bg-transparent outline-none text-sm md:text-base placeholder:text-muted-foreground"
                    />
                    <button type="submit" aria-label="Submit email" className="text-primary hover:translate-x-1 transition-transform p-1">
                      <ArrowRight size={18} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.p
                    key="done"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-primary"
                  >
                    Done. We will be in touch soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Entry;