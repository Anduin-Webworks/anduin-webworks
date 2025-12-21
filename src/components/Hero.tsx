import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-coding.png";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/oswaldovzki/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ofilipelima/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/oswaldovzki",
    icon: Github,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 lg:pt-24 flex items-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-8 animate-fade-in">
            <h1 className="font-chakra text-3xl lg:text-5xl font-medium text-center lg:text-left leading-tight">
              Elevate your digital business to another level{" "}
              <strong className="block text-accent">
                with quality{" "}
                <span className="text-primary animate-glow inline-block">
                  Front-end
                </span>{" "}
                development!
              </strong>
            </h1>

            <p className="text-lg lg:text-xl font-light tracking-wide leading-relaxed pl-2 text-center lg:text-left">
              Hi! I'm Filipe Lima, a Front-end developer specializing in{" "}
              <strong className="text-accent">HTML</strong> and{" "}
              <strong className="text-accent">CSS</strong>. I help small
              businesses and designers bring great ideas to life. Let's talk?
            </p>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <h2 className="font-medium tracking-wide text-center lg:text-left text-lg">
                Connect with me
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 px-6 py-4 border-2 border-primary rounded-lg text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  >
                    <link.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Developer coding illustration"
              className="w-[60%] lg:w-[80%] animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
