import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const socialLinks = [
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
  {
    name: "Email",
    href: "mailto:support@anduin-webworks.atlassian.net",
    icon: Mail,
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
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 flex flex-col gap-8 animate-fade-in">
            <p className="font-outfit text-sm uppercase tracking-[0.2em] text-muted-foreground text-center lg:text-left">
              Digital studio &amp; governance
            </p>

            <h1 className="font-cinzel text-3xl lg:text-5xl font-bold text-center lg:text-left leading-tight uppercase tracking-wide">
              Craft digital work{" "}
              <span className="block text-primary animate-glow normal-case lg:capitalize">
                worth shipping
              </span>
            </h1>

            <div className="brand-accent max-w-xl mx-auto lg:mx-0">
              <p className="font-outfit text-lg lg:text-xl font-light tracking-wide leading-relaxed text-center lg:text-left">
                <strong className="text-primary font-medium">Anduin Webworks</strong>{" "}
                builds web and Android apps, World of Warcraft add-ons, and
                governance programs — from first prototype to audit-ready
                operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-outfit font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "var(--gradient-cta)",
                  color: "hsl(var(--background))",
                }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-outfit font-medium text-lg border-2 border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <h2 className="font-outfit font-medium tracking-wide text-center lg:text-left text-sm uppercase text-muted-foreground">
                Connect
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 border border-border rounded-lg font-outfit text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              alt="Anduin Webworks — digital craft and governance"
              className="w-[65%] lg:w-[75%] max-w-md animate-float drop-shadow-2xl rounded-2xl"
              src="/uploads/7ff4383f-5d23-4706-8f38-54505198a692.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
