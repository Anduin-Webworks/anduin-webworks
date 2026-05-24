import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Gamepad2,
  ShieldCheck,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Globe,
    title: "Web & Digital Products",
    description:
      "Landing pages, web apps, and interfaces built with modern stacks — fast, accessible, and aligned with your brand.",
    tags: ["React", "TypeScript", "Responsive UI"],
  },
  {
    icon: Smartphone,
    title: "Android Applications",
    description:
      "Mobile apps from concept to Play Store — focused UX, reliable performance, and maintainable codebases.",
    tags: ["Kotlin", "Jetpack", "Cross-platform"],
  },
  {
    icon: Gamepad2,
    title: "World of Warcraft Add-ons",
    description:
      "Published Retail add-ons on CurseForge — including ICN2 (survival needs) and TimeLogger (session tracking).",
    tags: ["Lua", "WoW API", "CurseForge"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Audit Readiness",
    description:
      "Mock audits, evidence workflows, and gap analysis so you know what will fail before the real auditors arrive.",
    tags: ["SOC 2", "ISO prep", "Evidence review"],
    link: "/watch",
    linkLabel: "Explore Anduin Watch",
    badge: "Anduin Watch",
  },
  {
    icon: ScrollText,
    title: "IT Governance & Policies",
    description:
      "Lean ITIL, governance frameworks, and policy packs that teams actually follow — not shelf-ware.",
    tags: ["ITIL", "Policies", "Process design"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            What We <span className="text-primary">Do</span>
          </h2>
          <p className="font-outfit text-lg lg:text-xl font-light text-muted-foreground mt-4 leading-relaxed">
            One studio, many crafts — from shipping products to keeping your
            operations audit-ready.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="relative flex flex-col h-full border-border/80 hover:border-primary/50 transition-colors duration-300 bg-card/80"
              >
                {service.badge && (
                  <Badge className="absolute -top-2.5 right-4 bg-secondary text-secondary-foreground">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-3 border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-cinzel text-xl uppercase tracking-wide">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-outfit text-base font-light leading-relaxed pt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-outfit text-xs px-2.5 py-1 rounded-full bg-muted/10 text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-2 font-outfit text-sm font-medium text-secondary hover:underline mt-auto"
                    >
                      {service.linkLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="font-outfit text-center text-muted-foreground mt-12 max-w-2xl mx-auto font-light">
          Not sure where to start?{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Tell us about your project
          </a>{" "}
          — we&apos;ll point you to the right path.
        </p>
      </div>
    </section>
  );
};

export default Services;
