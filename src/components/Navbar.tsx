import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.png";

const links = [
  { label: "O nás", href: "#onas" },
  { label: "Singl", href: "#singl" },
  { label: "Koncerty", href: "#koncerty" },
  { label: "Členové", href: "#clenove" },
  { label: "Galerie", href: "https://photos.google.com/u/1/albums?hl=cs&pli=1", external: true },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <a href="#domu" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 shadow-glow group-hover:animate-pulse-glow overflow-hidden">
              <img src={logo} alt="MIMINATRIPU logo" className="h-8 w-8 object-contain" />
            </span>
            <span className="font-display font-bold tracking-widest text-sm sm:text-base">
              MIMINA<span className="text-primary">TRIPU</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="tech/technicke-materialy.html"
                className="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:shadow-glow transition-shadow"
              >
                Tech rider
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="md:hidden mt-2 glass rounded-2xl overflow-hidden"
            >
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block px-6 py-4 text-foreground/90 hover:bg-primary/10 hover:text-primary transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
