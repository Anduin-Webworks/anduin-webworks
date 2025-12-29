import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    name: "Watchlight",
    subtitle: "Starter",
    description: "Perfect for teams just beginning their compliance journey",
    features: [
      "The Seeing assessment",
      "Readiness score",
      "Top risks identified"
    ],
    popular: false
  },
  {
    name: "Watchtower",
    subtitle: "Most Popular",
    description: "For teams who want to validate their audit readiness",
    features: [
      "The Watchful Trial",
      "Jira evidence validation",
      "Mock audit experience"
    ],
    popular: true
  },
  {
    name: "Watchful & Ready",
    subtitle: "Complete",
    description: "Full audit preparation and process optimization",
    features: [
      "The Mending (Lean ITIL)",
      "Ledger of Work (Jira)",
      "Audit-ready posture"
    ],
    popular: false
  }
];

const WatchPackages = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Founder-friendly pricing. No surprises, no complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative h-full flex flex-col ${
                pkg.popular ? 'border-primary ring-1 ring-primary' : ''
              }`}
            >
              {pkg.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {pkg.subtitle}
                </CardDescription>
                <p className="text-muted-foreground text-sm mt-2">
                  {pkg.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchPackages;
