import { motion } from "framer-motion";
import { useRef, useState } from "react";
import jonasImg from "@/assets/member-jonas.jpg";
import doryImg from "@/assets/member-dory.jpg";
import adamImg from "@/assets/member-adam.jpg";
import danImg from "@/assets/member-dan.jpg";
import davidImg from "@/assets/member-david.jpg";
import kajaImg from "@/assets/member-kaja.jpg";

type Member = {
  name: string;
  role: string;
  bio: string;
  emoji: string;
  photo: string;
};

const members: Member[] = [
  {
    name: "JONY",
    role: "Frontman / Zpěv",
    emoji: "⚡",
    photo: jonasImg,
    bio: "Hvězda, ikona, legenda nebo snad nový Mercury? JONY je frontman a zpěvák kapely, který to umí rozjet. Šeptá se, že když byl nemluvně, nemohl nosit dudlík z důvodu nekontrolovatelného nutkání zpívat. Teď už to takový problém není – naopak!",
  },
  {
    name: "DORY",
    role: "Saxofon / Vokály",
    emoji: "🎷",
    photo: doryImg,
    bio: "Naše tajná zbraň jménem DORY to má prostě v krvi. Jako Trójský kůň se hladce dostane za hradby kterékoliv mužské pevnosti. Roztomilá kráska, která vždy dostane to, po čem touží. A když to nestačí, zazpívá nebo vytáhne saxofon.",
  },
  {
    name: "ADAM",
    role: "Producent / Klávesy",
    emoji: "🎹",
    photo: adamImg,
    bio: "Působí mile a přívětivě, ale ve skutečnosti je to tahoun, který drží kapelu pevně v rukou. Pod sladkým úsměvem se skrývá producent, který má všechno pod kontrolou. Když se ti při pohledu na něj začne pomalu rozepínat podprsenka, víš, že je pozdě.",
  },
  {
    name: "DANDA",
    role: "Bicí",
    emoji: "🥁",
    photo: danImg,
    bio: "Síla, energie i preciznost. MIMINATRIPU má toho nejlepšího bubeníka na Valašsku. DANDA se prý narodil s paličkami v ruce – au, to muselo bolet. Jeho rytmy tě dostanou do varu, aniž bys je stihl zpracovat.",
  },
  {
    name: "DAVID",
    role: "Kytara",
    emoji: "🔥",
    photo: davidImg,
    bio: "Chtěli jsme ty naše hity okořenit, ale John Frusciante nám se slzami v očích řekl, že nestíhá. Doporučil ale svého valašského klona. Kytarista David mezi své největší úspěchy řadí, že na koncertě odpálil lampový zesilovač – důkaz jeho zápalu pro věc.",
  },
  {
    name: "KÁJA",
    role: "Basa",
    emoji: "🎸",
    photo: kajaImg,
    bio: "Holka, která poslouchá Ghost a hraje fakt hustě. Po pár zkouškách do kapely zapadla i v jiných ohledech a my jsme se rozhodli, že si rádi ubereme a necháme ji, aby vám ukázala, co umí.",
  },
];

const Card = ({ m, i }: { m: Member; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: px * 14, y: -py * 14 });
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group relative rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 sm:p-8 shadow-card transition-shadow hover:shadow-elegant overflow-hidden perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.2s ease",
      }}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-accent/10 transition" />

      {/* photo */}
      <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-primary/20 bg-black">
        <img
          src={m.photo}
          alt={`${m.name} – ${m.role}`}
          loading="lazy"
          className="h-full w-full object-cover grayscale-[40%] saturate-75 group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/95 via-card/20 to-transparent" />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary bg-background/70 backdrop-blur px-2 py-1 rounded-full">
          {String(i + 1).padStart(2, "0")} / 06
        </span>
        <span className="absolute top-3 right-3 text-2xl drop-shadow-lg">{m.emoji}</span>
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-gradient leading-none">
            {m.name}
          </h3>
          <p className="mt-1 text-sm text-foreground/60">{m.role}</p>
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />

      <p className="relative mt-5 text-sm sm:text-base leading-relaxed text-foreground/75">
        {m.bio}
      </p>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

const Members = () => {
  return (
    <section id="clenove" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// the crew</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-gradient">
            Členové kapely
          </h2>
          <p className="mt-3 text-foreground/60">Šest charakterů. Jeden zvuk.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <Card key={m.name} m={m} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
