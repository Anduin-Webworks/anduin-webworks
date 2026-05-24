import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Anduin Webworks | Digital Studio &amp; Governance</title>
        <meta
          name="description"
          content="Anduin Webworks builds web and Android apps, World of Warcraft add-ons, and IT governance programs — from product craft to audit readiness."
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
