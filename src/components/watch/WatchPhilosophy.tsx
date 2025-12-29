import { Zap, Target, FileText, Scale } from "lucide-react";

const philosophyItems = [
  {
    icon: Zap,
    title: "Weeks, not months",
    description: "We move at startup speed because we understand your timelines matter."
  },
  {
    icon: Target,
    title: "Fix what matters, ignore theater",
    description: "Focus on controls that actually protect your business, not checkbox compliance."
  },
  {
    icon: FileText,
    title: "Evidence over intention",
    description: "If it can't be proven in Jira or docs, it doesn't exist. Auditors agree."
  },
  {
    icon: Scale,
    title: "Proof is everything",
    description: "Auditors don't care about what you meant to do — only what you can demonstrate."
  }
];

const WatchPhilosophy = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Philosophy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These principles guide everything we do — and they'll resonate if you've ever 
            struggled with compliance while trying to ship product.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {philosophyItems.map((item, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchPhilosophy;
