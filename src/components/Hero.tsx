import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coding.png";
const socialLinks = [{
  name: "LinkedIn",
  href: "https://www.linkedin.com/in/ofilipelima/",
  icon: Linkedin
}, {
  name: "GitHub",
  href: "https://github.com/oswaldovzki",
  icon: Github
}, {
  name: "Email",
  href: "mailto:support@anduin-webworks.atlassian.net",
  icon: Mail
}];
const Hero = () => {
  return <section id="home" className="min-h-screen pt-20 lg:pt-24 flex items-center" style={{
    background: "var(--gradient-hero)"
  }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-8 animate-fade-in">
            <h1 className="font-cinzel text-3xl lg:text-5xl font-bold text-center lg:text-left leading-tight">
              Elevate your digital business{" "}
              <span className="block text-primary animate-glow">
                to another level
              </span>
            </h1>

            <p className="font-outfit text-lg lg:text-xl font-light tracking-wide leading-relaxed text-center lg:text-left">
              Welcome to <strong className="text-primary font-medium">Anduin Webworks</strong> — 
              a web development studio specializing in{" "}
              <strong className="text-secondary">HTML</strong>,{" "}
              <strong className="text-secondary">CSS</strong>, and{" "}
              <strong className="text-secondary">JavaScript</strong>. 
              We help small businesses and designers bring great ideas to life.
            </p>

            {/* CTA Button */}
            <a href="#contact" className="self-center lg:self-start inline-flex items-center gap-3 px-8 py-4 rounded-lg font-outfit font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{
            background: "var(--gradient-cta)",
            color: "hsl(var(--background))"
          }}>
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Social Links */}
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="font-outfit font-medium tracking-wide text-center lg:text-left text-lg text-muted-foreground">
                Connect with us
              </h2>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {socialLinks.map(link => <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-border rounded-lg font-outfit font-medium hover:border-primary hover:text-primary transition-all duration-300 group">
                    <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>)}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img alt="Web development illustration" className="w-[60%] lg:w-[80%] animate-float drop-shadow-2xl rounded-2xl" src="/lovable-uploads/7ff4383f-5d23-4706-8f38-54505198a692.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;