import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Play } from "lucide-react";

// Original site uses single date around mid-Feb 2026; we set a target.
const TARGET = new Date("2026-02-15T00:00:00").getTime();

const calc = () => {
  const distance = TARGET - Date.now();
  if (distance <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  return {
    d: Math.floor(distance / 86400000),
    h: Math.floor((distance % 86400000) / 3600000),
    m: Math.floor((distance % 3600000) / 60000),
    s: Math.floor((distance % 60000) / 1000),
    done: false,
  };
};

const Cell = ({ value, label }: { value: number; label: string }) => (
  <div className="relative flex flex-col items-center">
    <div className="relative w-20 sm:w-28 aspect-square rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-md shadow-card overflow-hidden flex items-center justify-center">
      <span className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      <motion.span
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="relative font-display font-bold text-3xl sm:text-5xl text-gradient tabular-nums"
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
    </div>
    <span className="mt-2 text-xs uppercase tracking-widest text-foreground/60">{label}</span>
  </div>
);

const SinglSection = () => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="singl" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// nový singl</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight">
            <span className="text-gradient">ROMSKÉ PROKLETÍ</span>
          </h2>
          <p className="mt-3 text-foreground/60">je na všech streamovacích platformách!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Album art with tilt effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="relative group perspective-1000"
          >
            <div className="relative aspect-square mx-auto max-w-md preserve-3d transition-transform duration-700 group-hover:[transform:rotateY(8deg)_rotateX(-4deg)]">
              <div className="absolute -inset-4 rounded-3xl bg-primary/30 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-2 border-primary/40 shadow-elegant">
                {/* fallback graphic since we don't have the image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-background" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-3">SINGL · 2026</span>
                  <h3 className="font-display font-black text-3xl sm:text-5xl text-glow leading-none">
                    ROMSKÉ<br />PROKLETÍ
                  </h3>
                  <span className="mt-4 inline-block h-px w-16 bg-primary" />
                  <span className="mt-3 font-mono text-xs text-primary">MIMINATRIPU</span>
                </div>
                {/* vinyl */}
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-black border-8 border-zinc-900 shadow-2xl animate-spin-slow opacity-90 group-hover:-right-10 transition-all duration-700">
                  <div className="absolute inset-1/3 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-foreground/70 mb-6 max-w-md">
              Odpočet do dalšího hudebního překvapení. Zůstaň naladěn na našich streamovacích kanálech.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              <Cell value={t.d} label="Dní" />
              <span className="text-3xl text-primary self-center">:</span>
              <Cell value={t.h} label="Hodin" />
              <span className="text-3xl text-primary self-center">:</span>
              <Cell value={t.m} label="Minut" />
              <span className="text-3xl text-primary self-center">:</span>
              <Cell value={t.s} label="Sekund" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://open.spotify.com/artist/7vwf6Dql8AkBdVXGLvPzgz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition"
              >
                <Play className="h-4 w-4 fill-current" /> Pustit na Spotify
              </a>
              <a
                href="https://www.youtube.com/channel/UCEFh2vBnQrgfeU_PPqCkQlg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold hover:border-primary hover:text-primary transition"
              >
                YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SinglSection;
