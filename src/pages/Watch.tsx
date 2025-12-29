import { Helmet } from "react-helmet-async";
import WatchHeader from "@/components/WatchHeader";
import Footer from "@/components/Footer";
import WatchHero from "@/components/watch/WatchHero";
import WatchPhilosophy from "@/components/watch/WatchPhilosophy";
import WatchServices from "@/components/watch/WatchServices";
import WatchPackages from "@/components/watch/WatchPackages";

const Watch = () => {
  return (
    <>
      <Helmet>
        <title>Anduin Watch - Audit Readiness for Fast-Moving Companies</title>
        <meta
          name="description"
          content="Anduin Watch provides audit readiness services for startups and fast-moving companies. SOC 2, ISO preparation, ITIL optimization, and Jira audit workflows."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <WatchHeader />
        
        <main className="pt-20">
          <WatchHero />
          <WatchPhilosophy />
          <WatchServices />
          <WatchPackages />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Watch;
