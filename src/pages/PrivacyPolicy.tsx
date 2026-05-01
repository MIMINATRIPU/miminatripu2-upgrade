import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <ScrollProgress />
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition mb-6"
            >
              <ArrowLeft className="h-4 w-4" /> Zpět na úvod
            </Link>

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">// gdpr</p>
            <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-gradient">
              Zásady ochrany údajů
            </h1>

            <article className="mt-10 space-y-6 text-foreground/80 leading-relaxed rounded-3xl border border-border bg-card/60 backdrop-blur-md p-6 sm:p-10 shadow-card">
              <section>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                  Údaje shromažďované prostřednictvím kontaktního formuláře
                </h2>
                <p>Když nás kontaktujete přes formulář na naší webové stránce, shromažďujeme tyto údaje:</p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>Vaše jméno</li>
                  <li>E-mailová adresa</li>
                  <li>Text vaší zprávy</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">Jak používáme vaše údaje</h2>
                <p>Vaše údaje používáme výhradně k:</p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>Odpovědi na vaše dotazy</li>
                  <li>Organizaci koncertů a akcí</li>
                  <li>Komunikaci ohledně spolupráce</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">Bezpečnost údajů</h2>
                <p>
                  Vaše údaje jsou odesílány přes šifrované připojení (HTTPS) a zpracovávány službou Formspree,
                  která splňuje GDPR.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">Vaše práva</h2>
                <p>Máte právo:</p>
                <ul className="mt-3 list-disc pl-6 space-y-1">
                  <li>Přístup ke svým osobním údajům</li>
                  <li>Opravit nesprávné údaje</li>
                  <li>Požádat o smazání údajů</li>
                  <li>Stažení svých údajů</li>
                </ul>
                <p className="mt-3">
                  Kontaktujte nás na:{" "}
                  <a className="text-primary hover:underline" href="mailto:miminatripu@gmail.com">
                    miminatripu@gmail.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">Cookies</h2>
                <p>
                  Naše webová stránka nepoužívá cookies pro sledování. Používáme pouze technické cookies potřebné
                  pro fungování stránky.
                </p>
              </section>

              <section>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">Poslední aktualizace</h2>
                <p>1. ledna 2026</p>
              </section>
            </article>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
