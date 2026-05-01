const Footer = () => (
  <footer className="relative border-t border-border py-10 mt-10">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
      <p>© 2025 <span className="font-display font-bold text-foreground">MIMINA<span className="text-primary">TRIPU</span></span> · Všechna práva vyhrazena.</p>
      <div className="flex items-center gap-5">
        <a href="/privacy-policy" className="hover:text-primary transition">Zásady ochrany údajů</a>
        <a href="https://photos.google.com/u/1/albums?hl=cs&pli=1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Fotogalerie</a>
        <a href="#kontakt" className="hover:text-primary transition">Kontakt</a>
      </div>
    </div>
  </footer>
);

export default Footer;
