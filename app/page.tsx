import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import BMICalculator from "@/components/BMICalculator";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Treatments />
        <Differentials />
        <BMICalculator />
        <Timeline />
        <FAQ />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
