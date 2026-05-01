import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

interface TechDoc {
  title: string;
  description: string;
  pdfPath: string;
  fileName: string;
  isZip?: boolean;
}

const techDocs: TechDoc[] = [
  {
    title: "MIMINATRIPU - PR",
    description: "Zde najdete všechny informace týkající se našeho PR a marketingových aktivit.",
    pdfPath: "/pdf/MIMINATRIPU - PR SHEET.pdf",
    fileName: "MIMINATRIPU - PR SHEET.pdf",
  },
  {
    title: "MIMINATRIPU - PR text",
    description: "Podrobnosti o kapele (stejné informace se nacházejí v sekci 'o nás' na hlavní stránce).",
    pdfPath: "/pdf/MIMINATRIPU PR TEXT - KAPELA, NOVÝ SINGL.pdf",
    fileName: "MIMINATRIPU PR TEXT - KAPELA, NOVÝ SINGL.pdf",
  },
  {
    title: "MIMINATRIPU - Repertoárový list pro OSA",
    description: "Repertoárový list obsahuje všechny písně, které kapela v současnosti interpretuje (postupně se bude aktualizovat).",
    pdfPath: "/pdf/MIMINATRIPU – REPERTOÁROVÝ LIST PRO OSA.pdf",
    fileName: "MIMINATRIPU – REPERTOÁROVÝ LIST PRO OSA.pdf",
  },
  {
    title: "MIMINATRIPU - Stageplan",
    description: "Stageplan obsahuje informace o technickém vybavení a rozložení scény pro naše koncerty.",
    pdfPath: "/pdf/MIMINATRIPU – STAGEPLAN.pdf",
    fileName: "MIMINATRIPU – STAGEPLAN.pdf",
  },
  {
    title: "MIMINATRIPU - Rider",
    description: "Rider obsahuje informace o technických požadavcích a vybavení potřebném pro naše koncerty.",
    pdfPath: "/pdf/MIMINATRIPU – RIDER.pdf",
    fileName: "MIMINATRIPU – RIDER.pdf",
  },
  {
    title: "MIMINATRIPU - Loga",
    description: "Loga kapely v různých formátech a velikostech (pouze stahování ZIP).",
    pdfPath: "/logos/MIMINATRIPU-LOGOS.zip",
    fileName: "MIMINATRIPU-LOGOS.zip",
    isZip: true,
  },
];

const TechRider = () => {
  return (
    <section id="tech-rider" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// technické materiály</p>
          <h2 className="font-display font-bold text-5xl sm:text-7xl tracking-tight leading-[0.9] mb-6">
            <span className="text-gradient">Tech Rider</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            V této sekci najdete všechny technické materiály potřebné pro naše koncerty a vystoupení. Pokud jste organizátor nebo technik, zde jsou všechny informace, které potřebujete k zajištění hladkého průběhu našich vystoupení.
          </p>
        </motion.div>

        {/* Tech Documents Grid */}
        <div className="grid gap-6 md:gap-8">
          {techDocs.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card/40 backdrop-blur p-6 sm:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-primary mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-foreground/70 text-base sm:text-lg">
                    {doc.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-shrink-0">
                  <a
                    href={doc.pdfPath}
                    download={doc.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  >
                    <Download size={18} />
                    <span>Stáhnout</span>
                  </a>

                  {!doc.isZip && (
                    <a
                      href={doc.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300"
                    >
                      <Eye size={18} />
                      <span>Zobrazit</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur p-6 sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">// poznámka</p>
          <p className="text-foreground/80">
            Všechny materiály jsou dostupné ke stažení. Pokud potřebujete dodatečné informace nebo máte specifické požadavky, kontaktujte nás prosím přes{" "}
            <a href="mailto:miminatripu@gmail.com" className="text-primary hover:underline font-semibold">
              miminatripu@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechRider;
