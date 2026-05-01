import { motion } from "framer-motion";
import bandPhoto from "@/assets/band-photo.jpg";

const About = () => {
  return (
    <section id="onas" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// kdo jsme</p>
            <h2 className="font-display font-bold text-5xl sm:text-7xl tracking-tight leading-[0.9]">
              <span className="text-gradient">O&nbsp;nás</span>
            </h2>

            <div className="mt-8 relative group rounded-3xl overflow-hidden border border-border shadow-card">
              <img
                src={bandPhoto}
                alt="Kapela MIMINATRIPU"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary bg-background/70 backdrop-blur px-2 py-1 rounded-full">
                  // band shot
                </span>
              
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              <strong className="text-primary">MIMINATRIPU</strong> je další diamant z valašské truhly – kapela z Valmezu,
              která se nebojí šokovat. Většina členů ještě není plnoletá, ale už teď míří na českou scénu s cílem pořádně s ní zatřást.
              Jsou mladí, drzí a odhodlaní – a navíc pochází z města, které už české scéně dalo několik nezapomenutelných jmen.
            </p>
            <p>
              Jejich žánr, „<em className="text-primary not-italic">velkolepě špinavá funkpopová fúze s texty ostrými jako valašská slivka</em>“,
              vás chytí a nepustí. Hudba je návyková, rytmicky dravá a plná satiry, která přetváří společenské problémy ve vtipně přehnané příběhy.
            </p>
            <p>
              Chtějí vystoupit z davu a ukázat světu něco, co tu ještě nebylo. A s charismatem Dory, dcery frontmana Elektrick Mann,
              má MIMINATRIPU odvážnou tvář, která se neztratí. Nasedejte do kočárku bez brzd a nechte se unést jízdou, která se nedá zastavit.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { n: "6", l: "členů" },
                { n: "4", l: "singly out" },
                { n: "∞", l: "energie" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-border bg-card/40 backdrop-blur p-4 text-center hover:border-primary/50 hover:-translate-y-1 transition"
                >
                  <div className="font-display font-bold text-3xl text-gradient">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
