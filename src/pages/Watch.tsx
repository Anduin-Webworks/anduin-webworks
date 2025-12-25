import { Helmet } from "react-helmet-async";
import WatchHeader from "@/components/WatchHeader";
import Footer from "@/components/Footer";

const Watch = () => {
  return (
    <>
      <Helmet>
        <title>Anduin Watch - Audit Readiness</title>
        <meta
          name="description"
          content="Anduin Watch provides audit readiness services to ensure your business is prepared for compliance and regulatory requirements."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <WatchHeader />
        
        {/* Blank canvas - main content area */}
        <main className="pt-20">
          {/* Add your Anduin Watch content here */}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Watch;
