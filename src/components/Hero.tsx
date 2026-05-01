import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Facebook, ArrowDown } from "lucide-react";
import heroStage from "@/assets/hero-stage.jpg";
import logo from "@/assets/logo.png";

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
    <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 17.3a.75.75 0 01-1 .25c-2.8-1.7-6.3-2-10.4-1.1a.75.75 0 11-.3-1.5c4.5-1 8.4-.6 11.5 1.3.4.2.5.7.2 1.05zm1.5-3.3a.94.94 0 01-1.3.3c-3.2-2-8-2.5-11.7-1.4a.94.94 0 11-.5-1.8c4.3-1.3 9.6-.7 13.2 1.5.45.3.55.9.3 1.4zm.1-3.4c-3.8-2.3-10.2-2.5-13.8-1.4a1.13 1.13 0 11-.65-2.16c4.2-1.27 11.2-1.02 15.6 1.6a1.13 1.13 0 01-1.15 1.96z" />
  </svg>
);

const socials = [
  { icon: SpotifyIcon, href: "https://open.spotify.com/artist/7vwf6Dql8AkBdVXGLvPzgz", label: "Spotify" },
  { icon: Instagram, href: "https://www.instagram.com/miminatripu/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCEFh2vBnQrgfeU_PPqCkQlg", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577759039465", label: "Facebook" },
];

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const title = "MIMINATRIPU";

  return (
    <section
      id="domu"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise"
    >
      {/* Parallax background image */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroStage}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      {/* spinning ring */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="h-[120vmin] w-[120vmin] rounded-full border border-primary/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary)/0.15) 60deg, transparent 120deg, transparent 360deg)",
          }}
        />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 text-center px-4 max-w-5xl">
        <motion.img
          src={logo}
          alt="MIMINATRIPU logo"
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto mb-6 h-24 w-24 sm:h-32 sm:w-32 object-contain drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)] animate-float-slow"
        />
    

        <h1 className="font-display font-bold tracking-tight leading-[0.85] text-[clamp(3rem,14vw,11rem)] text-glow whitespace-nowrap">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="inline-block text-gradient"
              style={{ transformOrigin: "50% 100%" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-6 text-base sm:text-xl text-foreground/70 max-w-2xl mx-auto font-medium"
        >
          Velkolepě špinavá funkpopová fúze s texty ostrými jako valašská slivka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#singl"
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow magnetic-btn hover:scale-105"
          >
            <span className="relative z-10">Poslechni si singl</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </a>
          <a
            href="#koncerty"
            className="rounded-full border border-primary/40 bg-background/40 backdrop-blur px-8 py-4 font-semibold text-primary hover:bg-primary/10 transition"
          >
            Nadcházející koncerty
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur text-foreground/80 hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all hover:-translate-y-1"
              >
                <Icon />
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-foreground/50"
      >
        <span>Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
