import { Shield, Clock, FileCheck, Target } from "lucide-react";

const WatchHero = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Audit readiness for companies that move fast
          <span className="block text-primary mt-2">
            — and need their processes to keep up.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          We help startups and growing teams prepare for SOC 2, ISO, and other compliance requirements 
          without slowing down what makes you successful.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Accessible</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Fast</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Clear Value</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Non-intimidating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchHero;
