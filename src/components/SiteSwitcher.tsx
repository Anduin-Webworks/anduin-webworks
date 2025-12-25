import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sites = [
  {
    name: "Webworks",
    path: "/",
    description: "Web Development Studio",
  },
  {
    name: "Watch",
    path: "/watch",
    description: "Audit Readiness",
  },
];

interface SiteSwitcherProps {
  logoSrc: string;
}

const SiteSwitcher = ({ logoSrc }: SiteSwitcherProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentSite = sites.find((site) => site.path === location.pathname) || sites[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none">
        <img
          alt="Anduin"
          className="h-12 w-auto dark:brightness-0 dark:invert"
          src={logoSrc}
        />
        <span className="font-cinzel text-xl font-bold tracking-wide text-foreground">
          Anduin <span className="text-primary">{currentSite.name}</span>
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 space-y-1">
        {sites.map((site) => (
          <DropdownMenuItem
            key={site.path}
            onClick={() => navigate(site.path)}
            className={`group flex flex-col items-start gap-1 cursor-pointer ${
              location.pathname === site.path 
                ? "bg-primary/15 hover:bg-primary/25" 
                : "hover:bg-accent"
            }`}
          >
            <span className="font-cinzel font-bold">
              Anduin <span className="text-primary group-hover:text-primary/70 transition-colors">{site.name}</span>
            </span>
            <span className="text-xs text-muted-foreground">{site.description}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SiteSwitcher;
