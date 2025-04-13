
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  // Initialize scroll animations
  initScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
