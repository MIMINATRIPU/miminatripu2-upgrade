import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const TechRiderNavbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 glass shadow-card">
          <a href="/" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 shadow-glow group-hover:animate-pulse-glow overflow-hidden">
              <img src={logo} alt="MIMINATRIPU logo" className="h-8 w-8 object-contain" />
            </span>
            <span className="font-display font-bold tracking-widest text-sm sm:text-base">
              MIMINA<span className="text-primary">TRIPU</span>
            </span>
          </a>

          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-glow"
          >
            <ArrowLeft size={18} />
            <span>Zpět na hlavní stránku</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default TechRiderNavbar;
