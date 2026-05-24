import { useState } from "react";
import { User, Briefcase, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Pismo",
    period: "2024 - Present",
    role: "IT Governance Analyst",
  },
  {
    company: "Blip",
    period: "2023 - 2024",
    role: "Technical Support Analyst",
  },
  {
    company: "Varsity Tutors",
    period: "2023",
    role: "Technical Support Specialist",
  },
  {
    company: "Stilingue",
    period: "2019 - 2023",
    roles: [
      "Technical Support Analyst (2021 - 2023)",
      "Quality Assurance Analyst (2020 - 2021)",
      "Customer Service Analyst (2019 - 2020)",
    ],
  },
];

const certifications = [
  {
    name: "HTML",
    link: "https://cursos.alura.com.br/user/oswaldovzki/degree-html-css-v527396-527396/certificate",
    provider: "Alura Courses",
  },
  {
    name: "CSS",
    link: "https://cursos.alura.com.br/user/oswaldovzki/degree-css-estilos-v671897-671897/certificate",
    provider: "Alura Courses",
  },
  {
    name: "JavaScript",
    link: "#",
    provider: "Alura Courses",
  },
  {
    name: "Full Certification",
    link: "https://cursos.alura.com.br/user/oswaldovzki/fullCertificate/70c35dea02b345e12c388fc9730cc015",
    provider: "Complete front-end track",
    highlight: true,
  },
];

type TabType = "about" | "experience" | "certifications";

const tabs = [
  { id: "about" as TabType, label: "About", icon: User },
  { id: "experience" as TabType, label: "Experience", icon: Briefcase },
  { id: "certifications" as TabType, label: "Certifications", icon: Award },
];

const About = () => {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <section id="about" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-center mb-4 uppercase tracking-wide animate-slide-up">
          About <span className="text-primary">Us</span>
        </h2>
        <p className="font-outfit text-center text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
          A solo studio with a company voice — technical craft meets governance discipline.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group flex flex-col items-center gap-2 transition-all duration-300 w-20"
                aria-label={tab.label}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg scale-110"
                      : "bg-muted/10 text-muted-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`font-outfit text-sm transition-colors duration-300 ${
                    isActive ? "text-primary font-medium" : "text-muted-foreground"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="animate-fade-in brand-accent" key={activeTab}>
          {activeTab === "about" && (
            <div className="space-y-6 font-outfit text-lg lg:text-xl font-light tracking-wide leading-relaxed">
              <p>
                <strong className="text-primary font-medium">Anduin Webworks</strong> started
                as a front-end studio and grew into a broader practice: shipping digital
                products, building game add-ons, and helping teams get governance right.
              </p>

              <p>
                The thread through it all is clarity — whether that means a clean interface,
                a reliable Android build, or an audit evidence trail that actually holds up.
              </p>

              <p>
                Day job experience in IT governance at{" "}
                <span className="text-accent font-medium">Pismo</span>, plus years in QA and
                technical support at{" "}
                <span className="text-accent font-medium">Stilingue</span> and{" "}
                <span className="text-accent font-medium">Blip</span>, shapes how we build:
                documented, testable, and ready for scrutiny.
              </p>

              <p>
                You work directly with the person doing the work — no hand-offs, no agency
                overhead. Just focused delivery with room to grow as your needs expand.
              </p>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 pb-6 border-b border-border last:border-b-0"
                >
                  <div className="font-outfit text-primary text-xl lg:text-2xl font-medium tracking-wide">
                    {exp.company}{" "}
                    <span className="text-muted-foreground text-base">
                      ({exp.period})
                    </span>
                  </div>
                  {exp.role && (
                    <p className="font-outfit font-light text-lg">{exp.role}</p>
                  )}
                  {exp.roles && (
                    <ul className="font-outfit space-y-1">
                      {exp.roles.map((role, i) => (
                        <li key={i} className="font-light text-lg">
                          {role}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg transition-colors font-outfit ${
                    cert.highlight
                      ? "bg-primary/10 border border-primary/30"
                      : "hover:bg-muted/10"
                  }`}
                >
                  <div className="text-secondary text-xl lg:text-2xl font-medium mb-1">
                    {cert.name}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-light text-lg underline hover:text-primary transition-colors"
                  >
                    {cert.provider}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
