import { useState, useMemo } from "react";
import {
  ExternalLink,
  Github,
  Code,
  Palette,
  Sparkles,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";

type ProjectCategory = "web" | "android" | "addons";

type Project = {
  id: string;
  name: string;
  icon: LucideIcon;
  category: ProjectCategory;
  description: string;
  tech: string;
  url?: string;
  sourceUrl?: string;
  imageUrl?: string;
  highlights?: string[];
  downloads?: number;
};

const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  web: "Web",
  android: "Android",
  addons: "WoW Add-ons",
};

const projects: Project[] = [
  {
    id: "icn2",
    name: "Immersive Character Needs 2",
    icon: Gamepad2,
    category: "addons",
    description:
      "A survival-style Retail addon where your character manages hunger, thirst, and fatigue — built for roleplayers and immersion enthusiasts.",
    tech: "Lua, WoW API, Retail",
    url: "https://www.curseforge.com/wow/addons/immersive-character-needs-2",
    sourceUrl: "https://github.com/oswaldovzki/ICN2",
    imageUrl:
      "https://media.forgecdn.net/attachments/1638/775/wowscrnshot_041926_094702-jpg.jpg",
    downloads: 267,
    highlights: [
      "Dynamic hunger, thirst, and fatigue with a context-aware Rate Engine",
      "Race-specific pools, armor weight, swimming, flying, and rest bonuses",
      "Immersive emotes at critical levels plus a draggable HUD",
      "Slow / Medium / Fast / Custom presets — Well-Fed pause and cross-need impact",
      "Commands: /icn2, /icn2 status, /icn2 reset, /icn2 hud",
    ],
  },
  {
    id: "timelogger",
    name: "TimeLogger",
    icon: Gamepad2,
    category: "addons",
    description:
      "A lightweight Retail addon that records login and logout timestamps — reliable data for play-time stats, habits, or your own BI tools.",
    tech: "Lua, SavedVariables, CSV/JSON export",
    url: "https://www.curseforge.com/wow/addons/timelogger",
    imageUrl:
      "https://media.forgecdn.net/attachments/1593/695/timelogger-png.png",
    downloads: 32,
    highlights: [
      "Logs every login and logout with Unix time, UTC, character, and realm",
      "Builds session rows — including open sessions and unclean logouts",
      "Export via /timelogger or /tlog — Events and Sessions in CSV or JSON",
      "Copy to clipboard when supported; prune old events with backup snapshot",
      "No HUD, no options panel — data ready for spreadsheets or pipelines",
    ],
  },
  {
    id: "jsApps",
    name: "JavaScript Apps",
    icon: Code,
    category: "web",
    description: "JavaScript applications collection.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "alurabooks",
    name: "Alura Books",
    icon: Palette,
    category: "web",
    description:
      "Tech book store with hamburger menu, search box, swipe section and more.",
    tech: "HTML, CSS",
  },
  {
    id: "aluraplay",
    name: "Alura Play",
    icon: Sparkles,
    category: "web",
    description:
      "Video storage site with functionality to add new videos and text search.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "aluraplus",
    name: "Alura+",
    icon: Palette,
    category: "web",
    description: "Landing page for a streaming platform.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "optimustech",
    name: "Optimus Tech",
    icon: Code,
    category: "web",
    description: "Job postings page for a tech company with resume submission.",
    tech: "HTML, CSS",
  },
  {
    id: "aluramed",
    name: "AluraMed",
    icon: Palette,
    category: "web",
    description: "Appointment booking page for a fictional clinic.",
    tech: "HTML, CSS",
  },
  {
    id: "wavecast",
    name: "Wavecast",
    icon: Sparkles,
    category: "web",
    description: "Podcast platform page.",
    tech: "HTML, CSS",
  },
  {
    id: "spotify",
    name: "Spotify Clone",
    icon: Code,
    category: "web",
    description: "Spotify clone page developed during an Alura bootcamp.",
    tech: "HTML, CSS",
  },
  {
    id: "uploader",
    name: "File Uploader",
    icon: Sparkles,
    category: "web",
    description: "File upload application page.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "calmaria",
    name: "Calmaria Spa",
    icon: Palette,
    category: "web",
    description: "Landing page for a fictional SPA company.",
    tech: "HTML, CSS",
  },
  {
    id: "culturama",
    name: "Culturama",
    icon: Sparkles,
    category: "web",
    description: "Event promotion page.",
    tech: "HTML, CSS",
  },
  {
    id: "watchlist",
    name: "Watchlist",
    icon: Code,
    category: "web",
    description: "Movie search page.",
    tech: "HTML, CSS, JavaScript",
  },
  {
    id: "oswbank",
    name: "Oswaldo's Bank",
    icon: Sparkles,
    category: "web",
    description: "Form registration and submission application, bank example.",
    tech: "HTML, CSS, JavaScript",
  },
];

const filterKeys = ["all", "web", "android", "addons"] as const;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filterKeys)[number]>("addons");
  const [activeProject, setActiveProject] = useState<Project>(
    () => projects.find((p) => p.id === "icn2") ?? projects[0],
  );
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const displayProject =
    filteredProjects.find((p) => p.id === activeProject.id) ?? filteredProjects[0];

  const handleFilterChange = (filter: (typeof filterKeys)[number]) => {
    setActiveFilter(filter);
    const next =
      filter === "all"
        ? projects[0]
        : projects.find((p) => p.category === filter);
    if (next) setActiveProject(next);
  };

  return (
    <section id="work" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="font-cinzel text-4xl lg:text-5xl font-bold uppercase tracking-wide">
            Selected <span className="text-primary">Work</span>
          </h2>
          <p className="font-outfit text-muted-foreground font-light mt-4 max-w-2xl mx-auto text-lg">
            Published WoW add-ons on CurseForge, web foundations from early craft,
            and more shipping soon.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterKeys.map((key) => (
            <button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`font-outfit px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50"
              }`}
            >
              {categoryLabels[key]}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 font-outfit text-muted-foreground">
            <p className="text-lg font-light">
              Android projects coming soon — reach out if you want to be first in
              line.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-primary font-medium hover:underline"
            >
              Discuss a project →
            </a>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    onMouseEnter={() => setShowTooltip(project.id)}
                    onMouseLeave={() => setShowTooltip(null)}
                    className={`relative flex items-center gap-3 min-w-max lg:min-w-0 px-4 py-3 rounded-lg border transition-all duration-300 font-outfit ${
                      displayProject?.id === project.id
                        ? "bg-primary/20 border-primary"
                        : "border-border hover:border-primary/50 hover:bg-card"
                    }`}
                  >
                    <project.icon
                      className={`w-8 h-8 p-1.5 rounded-lg border shrink-0 ${
                        displayProject?.id === project.id
                          ? "border-primary text-primary"
                          : "border-foreground/30"
                      }`}
                    />
                    <span className="hidden lg:block text-left text-lg font-medium leading-snug">
                      {project.name}
                    </span>

                    {showTooltip === project.id && (
                      <div className="hidden lg:block absolute left-full ml-2 top-1/2 -translate-y-1/2 z-10 bg-secondary text-secondary-foreground p-3 rounded-lg text-sm max-w-xs shadow-lg">
                        <p className="font-medium mb-1">{project.name}</p>
                        <p className="font-light">{project.description}</p>
                        <p className="text-xs mt-1 opacity-80">Tech: {project.tech}</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {displayProject && (
              <div className="lg:w-2/3">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <displayProject.icon className="w-8 h-8 text-primary shrink-0" />
                      <div>
                        <h3 className="font-cinzel text-2xl font-semibold uppercase tracking-wide">
                          {displayProject.name}
                        </h3>
                        {displayProject.downloads != null && (
                          <p className="font-outfit text-sm text-muted-foreground mt-1">
                            {displayProject.downloads.toLocaleString()} downloads on
                            CurseForge
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start">
                      {displayProject.url && (
                        <a
                          href={displayProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-outfit text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          CurseForge
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {displayProject.sourceUrl && (
                        <a
                          href={displayProject.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-input hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="View source on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {!displayProject.url && (
                        <a
                          href="#"
                          className="p-2 rounded-lg bg-input hover:bg-primary hover:text-primary-foreground transition-colors opacity-50 pointer-events-none"
                          title="Demo coming soon"
                          aria-disabled
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-outfit text-lg font-light mb-6 text-center sm:text-left brand-accent sm:border-l-0 sm:pl-0 sm:max-w-none max-w-2xl mx-auto">
                    {displayProject.description}
                  </p>

                  {displayProject.highlights && (
                    <ul className="font-outfit space-y-2 mb-6 max-w-2xl mx-auto sm:mx-0">
                      {displayProject.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-base font-light leading-relaxed text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6 justify-center sm:justify-start">
                    {displayProject.tech.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="font-outfit px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {displayProject.imageUrl ? (
                    <div className="rounded-lg overflow-hidden border border-border bg-input/50">
                      <img
                        src={displayProject.imageUrl}
                        alt={`${displayProject.name} screenshot`}
                        className="w-full max-h-[420px] object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-input rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center p-8">
                        <Code className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="font-outfit text-muted-foreground text-lg">
                          Project Preview
                        </p>
                        <p className="font-outfit text-sm text-muted-foreground mt-2">
                          Link live demos when ready
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
