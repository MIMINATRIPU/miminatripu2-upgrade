import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import SinglSection from "@/components/SinglSection";
import ConcertSection from "@/components/ConcertSection";
import Members from "@/components/Members";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <SinglSection />
      <Marquee />
      <ConcertSection />
      <Members />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
