import { ExternalLink } from "lucide-react";

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
    provider: "🎓 Complete Certificate 🎓",
    highlight: true,
  },
];

const Career = () => {
  return (
    <section id="career" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto">
        <h2 className="font-chakra text-4xl lg:text-5xl font-medium text-center mb-16 animate-slide-up">
          Career
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Experience */}
          <div className="animate-fade-in">
            <h3 className="font-chakra text-2xl lg:text-3xl font-semibold text-center mb-8">
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left space-y-2 pb-6 border-b border-border last:border-b-0"
                >
                  <div className="text-accent text-xl lg:text-2xl font-medium tracking-wide">
                    {exp.company}{" "}
                    <span className="text-muted-foreground text-base">
                      ({exp.period})
                    </span>
                  </div>
                  {exp.role && (
                    <p className="font-light text-lg">{exp.role}</p>
                  )}
                  {exp.roles && (
                    <ul className="space-y-1">
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
          </div>

          {/* Certifications */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-chakra text-2xl lg:text-3xl font-semibold text-center mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-lg transition-colors ${
                    cert.highlight
                      ? "bg-primary/10 border border-primary/30"
                      : "hover:bg-muted/30"
                  }`}
                >
                  <div className="text-accent text-xl lg:text-2xl font-medium mb-1">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
