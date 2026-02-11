import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">
              Thrive<span className="text-primary">DigiLabs</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ThriveDigiLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
