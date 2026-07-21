import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Workflow from "@/components/home/Workflow";
import Technologies from "@/components/home/Technologies";
import Cases from "@/components/home/Cases";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Workflow />
        <Technologies />
        <Cases />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
