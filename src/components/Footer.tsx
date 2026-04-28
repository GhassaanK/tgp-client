import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-32">
      <div className="container-wide py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="display text-xl">The Growth Partners</div>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            We do not run campaigns. We build revenue.
          </p>
        </div>
        <div className="flex md:justify-center gap-8 text-sm text-muted-foreground">
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
        <div className="flex md:justify-end gap-5 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-wide py-5 text-xs text-muted-foreground">
          © 2025 The Growth Partners. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
