const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-cinzel text-4xl lg:text-5xl font-bold text-center mb-12 animate-slide-up">
          About <span className="text-primary">Us</span>
        </h2>

        <div className="space-y-6 font-outfit text-lg lg:text-xl font-light tracking-wide leading-relaxed animate-fade-in">
          <p>
            <strong className="text-primary font-medium">Anduin Webworks</strong> is a web development 
            studio founded with a passion for creating beautiful, functional digital experiences.
          </p>

          <p>
            Our journey began with a unique background — combining expertise in 
            <span className="text-secondary font-medium"> science education</span> with a transition 
            into technology and IT governance. This blend gives us a distinctive perspective 
            on problem-solving and user-centered design.
          </p>

          <p>
            With experience at companies like <span className="text-accent font-medium">Stilingue</span>, 
            <span className="text-accent font-medium"> Blip</span>, and <span className="text-accent font-medium">Pismo</span>, 
            we've honed skills in quality assurance, technical support, and IT governance — 
            all of which inform our approach to web development.
          </p>

          <p>
            Today, as an <span className="text-primary font-medium">IT Governance Specialist</span>, 
            we apply knowledge in processes and data analysis to deliver websites that 
            not only look great but also perform exceptionally well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
