import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Instagram, Send, Loader2, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mykwvajz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// say hi</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-gradient">
            Kontakt
          </h2>
          <p className="mt-3 text-foreground/60">Máš otázky, nápady nebo nás chceš pozvat na akci? Napiš nám!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-card overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />

          <div className="grid md:grid-cols-5 gap-0 relative">
            <form onSubmit={onSubmit} className="md:col-span-3 p-8 sm:p-10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="jmeno"
                  required
                  placeholder="Tvoje jméno"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Tvůj e-mail"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Zpráva (pozvání na koncert, kolaborace…)"
                className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed transition"
              >
                {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : status === "success" ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                {status === "success" ? "Odesláno!" : status === "loading" ? "Odesílání…" : "Odeslat zprávu"}
              </button>
              {status === "error" && (
                <p className="text-sm text-destructive">Něco se nepovedlo. Zkus to prosím znovu.</p>
              )}
            </form>

            <div className="md:col-span-2 p-8 sm:p-10 bg-primary/5 border-t md:border-t-0 md:border-l border-border">
              <h3 className="font-display font-bold text-xl mb-6">Přímé kontakty</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:miminatripu@gmail.com"
                    className="flex items-start gap-3 group"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/60">E-mail</div>
                      <div className="font-medium group-hover:text-primary transition">miminatripu@gmail.com</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/miminatripu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <Instagram className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-foreground/60">Instagram</div>
                      <div className="font-medium group-hover:text-primary transition">@miminatripu</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
