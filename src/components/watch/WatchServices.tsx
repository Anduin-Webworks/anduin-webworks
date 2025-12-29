import { Compass, AlertTriangle, Wrench, BarChart3, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Compass,
    title: "The Seeing",
    subtitle: "Startup Edition",
    duration: "1–2 weeks",
    forWho: "Startups preparing for first SOC 2 / ISO, or failing internally",
    includes: [
      "ITSM + governance maturity snapshot",
      "Documentation sanity check",
      "High-risk gaps list (top 5–10 only)",
      "Plain-language readiness score"
    ],
    highlight: "No tooling changes yet. No long commitment. Just clarity.",
    badge: "Entry Offer"
  },
  {
    icon: AlertTriangle,
    title: "The Watchful Trial",
    subtitle: "Mock Audit Experience",
    duration: "1–2 weeks",
    forWho: "Companies that think they're ready — but aren't sure",
    includes: [
      "Mock audit interviews",
      "Evidence requests exactly like real auditors",
      "Jira + Confluence evidence validation",
      "SLA & closure checks"
    ],
    highlight: "You'll know what will fail before it fails.",
    badge: "Most Popular"
  },
  {
    icon: Wrench,
    title: "The Mending",
    subtitle: "Lean ITIL",
    duration: "2–4 weeks",
    forWho: "Teams with broken or paper-only processes",
    includes: [
      "Incident / Change / Problem process refactor",
      "Minimal viable ITIL (no bureaucracy)",
      "Ownership and escalation clarity",
      "Process aligned to how your team actually works"
    ],
    highlight: "If it adds meetings, it's wrong. If it adds evidence, it stays.",
    badge: null
  },
  {
    icon: BarChart3,
    title: "The Ledger of Work",
    subtitle: "Jira Cloud for Audits",
    duration: "1–3 weeks",
    forWho: "Teams already in Jira but using it badly",
    includes: [
      "ITSM-aligned workflows",
      "Audit-proof SLAs",
      "Automation rules to prevent rot",
      "Dashboards that answer auditor questions in seconds"
    ],
    highlight: "Auditors don't audit Jira — they audit what Jira proves.",
    badge: "Differentiator"
  },
  {
    icon: Shield,
    title: "The Long Watch",
    subtitle: "Startup Guardrail",
    duration: "Monthly or Quarterly",
    forWho: "Smart clients who want ongoing protection",
    includes: [
      "Ticket hygiene checks",
      "SLA breach review",
      "Process drift detection",
      "Pre-audit checkups"
    ],
    highlight: "Cheaper than failing an audit. Cheaper than hiring a GRC lead too early.",
    badge: "Retainer"
  }
];

const WatchServices = () => {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structured for startups — low friction entry, high-value outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative hover:border-primary/50 transition-colors h-full flex flex-col"
            >
              {service.badge && (
                <Badge 
                  className="absolute -top-2 right-4 bg-primary text-primary-foreground"
                >
                  {service.badge}
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Duration
                  </span>
                  <p className="text-foreground font-medium">{service.duration}</p>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    For
                  </span>
                  <p className="text-foreground text-sm">{service.forWho}</p>
                </div>

                <div className="mb-4 flex-1">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Includes
                  </span>
                  <ul className="mt-2 space-y-1">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground italic">
                    "{service.highlight}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchServices;
