import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

const ConcertSection = () => {
  return (
    <section id="koncerty" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// upcoming</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-gradient">
            Nadcházející koncert
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border bg-card/60 backdrop-blur-md shadow-card"
        >
          {/* Info */}
          <div className="p-8 sm:p-12 relative">
            <div className="absolute top-0 right-0 h-40 w-40 bg-primary/20 blur-3xl rounded-full" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">
              Meziříčská Muzejní Noc
            </h3>
            <p className="text-foreground/60 mb-8">Valašské Meziříčí</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Calendar className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Datum:</span> <strong>29. 5. 2026</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Začátek:</span> <strong>21:00</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Místo:</span> <strong>KZ – u zámku</strong></span>
              </li>
            </ul>

            <a
              href="https://mmn.kzvalmez.cz/domu/#customblock-17"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition"
            >
              Stránka akce <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Map */}
          <div className="relative min-h-[320px] lg:min-h-full">
            <iframe
              title="Mapa koncertu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.6827665194323!2d17.968362463129083!3d49.47160852469134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471390e75ca230e3%3A0x65354a56044c53e2!2zS8OhemV0a28g4oCUIEt1bHR1cm7DrSB6YcWZw616ZW7DrSBtxJtzdGEgVmFsYcWhc2vDqWhvIE1lemnFmcOtxI3DrSwgcC5vLg!5e0!3m2!1scs!2scz!4v1777545077247!5m2!1scs!2scz"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition duration-700"
              style={{ border: 0 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConcertSection;
