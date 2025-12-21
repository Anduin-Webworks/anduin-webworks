import { useState } from "react";
import { ExternalLink, Info, Code, Palette, Sparkles } from "lucide-react";

const projects = [
  {
    id: "jsApps",
    name: "JavaScript Apps",
    icon: Code,
    description: "JavaScript applications collection.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "alurabooks",
    name: "Alura Books",
    icon: Palette,
    description:
      "Tech book store with hamburger menu, search box, swipe section and more.",
    tech: "HTML, CSS",
  },
  {
    id: "aluraplay",
    name: "Alura Play",
    icon: Sparkles,
    description:
      "Video storage site with functionality to add new videos and text search.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "aluraplus",
    name: "Alura+",
    icon: Palette,
    description: "Landing page for a streaming platform.",
    tech: "HTML, CSS, JavaScript (swipe)",
  },
  {
    id: "optimustech",
    name: "Optimus Tech",
    icon: Code,
    description:
      "Job postings page for a tech company with resume submission.",
    tech: "HTML, CSS",
  },
  {
    id: "aluramed",
    name: "AluraMed",
    icon: Palette,
    description: "Appointment booking page for a fictional clinic.",
    tech: "HTML, CSS",
  },
  {
    id: "wavecast",
    name: "Wavecast",
    icon: Sparkles,
    description: "Podcast platform page.",
    tech: "HTML, CSS",
  },
  {
    id: "spotify",
    name: "Spotify Clone",
    icon: Code,
    description: "Spotify clone page developed during an Alura bootcamp.",
    tech: "HTML, CSS",
  },
  {
    id: "uploader",
    name: "File Uploader",
    icon: Sparkles,
    description: "File upload application page.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "calmaria",
    name: "Calmaria Spa",
    icon: Palette,
    description: "Landing page for a fictional SPA company.",
    tech: "HTML, CSS",
  },
  {
    id: "culturama",
    name: "Culturama",
    icon: Sparkles,
    description: "Event promotion page.",
    tech: "HTML, CSS",
  },
  {
    id: "watchlist",
    name: "Watchlist",
    icon: Code,
    description: "Movie search page.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "oswbank",
    name: "Oswaldo's Bank",
    icon: Sparkles,
    description: "Form registration and submission application, bank example.",
    tech: "HTML, CSS, JavaScript",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-chakra text-4xl lg:text-5xl font-medium text-center mb-16 animate-slide-up">
          Projects
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project List */}
          <div className="lg:w-1/3">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  onMouseEnter={() => setShowTooltip(project.id)}
                  onMouseLeave={() => setShowTooltip(null)}
                  className={`relative flex items-center gap-3 min-w-max lg:min-w-0 px-4 py-3 rounded-lg border transition-all duration-300 ${
                    activeProject.id === project.id
                      ? "bg-primary/20 border-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/20"
                  }`}
                >
                  <project.icon
                    className={`w-8 h-8 p-1.5 rounded-lg border ${
                      activeProject.id === project.id
                        ? "border-primary text-primary"
                        : "border-foreground/30"
                    }`}
                  />
                  <span className="hidden lg:block text-lg font-medium">
                    {project.name}
                  </span>

                  {/* Tooltip on hover (desktop only) */}
                  {showTooltip === project.id && (
                    <div className="hidden lg:block absolute left-full ml-2 top-1/2 -translate-y-1/2 z-10 bg-primary text-primary-foreground p-3 rounded-lg text-sm max-w-xs shadow-lg">
                      <p className="font-medium mb-1">{project.name}</p>
                      <p className="font-light">{project.description}</p>
                      <p className="text-xs mt-1 opacity-80">
                        Tech: {project.tech}
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Project Preview Card */}
          <div className="lg:w-2/3">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <activeProject.icon className="w-8 h-8 text-primary" />
                  <h3 className="font-chakra text-2xl font-semibold">
                    {activeProject.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Open project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    title="Project info"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <p className="text-lg font-light mb-4">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.split(", ").map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Preview Placeholder */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center p-8">
                  <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">
                    Project Preview
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Connect your projects to see live previews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
