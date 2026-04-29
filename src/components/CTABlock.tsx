import { Link } from "react-router-dom";
import Reveal from "./Reveal";

interface CTABlockProps {
  headline: string;
  buttonLabel: string;
  to?: string;
  onClick?: () => void;
}

const CTABlock = ({ headline, buttonLabel, to = "/contact", onClick }: CTABlockProps) => (
  <section className="container-tight py-24 md:py-32">
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-10 md:p-20 text-center">
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
        <div className="relative">
          <h2 className="display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
            {headline}
          </h2>
          {onClick ? (
            <button
              onClick={onClick}
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
            >
              {buttonLabel}
            </button>
          ) : (
            <Link
              to={to}
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
            >
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </Reveal>
  </section>
);

export default CTABlock;
