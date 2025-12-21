import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
import logoAW from "@/assets/logo-primary.png";
import ThemeToggle from "./ThemeToggle";
const navItems = [{
  name: "Home",
  href: "#home",
  icon: Home
}, {
  name: "About",
  href: "#about",
  icon: User
}, {
  name: "Career",
  href: "#career",
  icon: Briefcase
}, {
  name: "Projects",
  href: "#projects",
  icon: FolderOpen
}, {
  name: "Contact",
  href: "#contact",
  icon: Mail
}];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-card"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors">
            {isMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>

          {/* Desktop Logo */}
          <a href="#home" className="hidden lg:flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img alt="Anduin Webworks" className="h-12 w-auto" src="/lovable-uploads/4af0b3bc-c9e1-47d5-a4aa-99e2adab4a3c.svg" />
            <span className="font-cinzel text-xl font-bold tracking-wide text-foreground">
              Anduin <span className="text-primary">Webworks</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <a key={item.name} href={item.href} className="font-outfit text-lg tracking-wider text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all duration-300">
                {item.name}
              </a>)}
          </nav>

          {/* Theme toggle and title on desktop right side */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="font-outfit text-muted-foreground">Web Development Studio</span>
            <ThemeToggle />
          </div>

          {/* Mobile: Title and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <span className="font-cinzel text-sm font-bold text-foreground">
              Anduin <span className="text-primary">Webworks</span>
            </span>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
          <nav className="flex flex-col gap-2">
            {navItems.map(item => <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3 px-4 font-outfit text-xl tracking-wider text-foreground hover:text-primary border-l-2 border-transparent hover:border-primary transition-all duration-300">
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>)}
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;