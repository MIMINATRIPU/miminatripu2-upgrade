import TechRiderNavbar from "@/components/TechRiderNavbar";
import TechRider from "@/components/TechRider";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import ScrollProgress from "@/components/ScrollProgress";

const TechRiderPage = () => {
  return (
    <main className="relative min-h-screen">
      <InteractiveBackground />
      <ScrollProgress />
      <TechRiderNavbar />
      <TechRider />
      <Footer />
    </main>
  );
};

export default TechRiderPage;
