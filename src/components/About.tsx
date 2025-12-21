const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-chakra text-4xl lg:text-5xl font-medium text-center mb-12 animate-slide-up">
          About Me
        </h2>

        <div className="space-y-6 text-lg lg:text-xl font-light tracking-wide leading-relaxed animate-fade-in">
          <p>
            Hi! I'm Filipe — married, from Minas Gerais, Brazil, and a big fan of
            Heavy Metal and Video Games.
          </p>

          <p>
            I graduated in Biological Sciences, with both a Bachelor's and
            Teaching degree, from the Federal University of Ouro Preto, where I
            also earned my Master's degree in Science Education.
          </p>

          <p>
            A few years ago, I made a career transition, joining Stilingue, a
            company known for Brazilian NLP and Social Listening. Initially, I
            contributed to Customer Support before moving to Quality Assurance.
            I played a significant role in creating the N2 Support team,
            responsible for managing technical support tickets and bug reports,
            ensuring adherence to internal processes for fast and effective
            customer service.
          </p>

          <p>
            Currently, I work as an{" "}
            <span className="text-accent font-medium">
              IT Governance Analyst
            </span>
            , applying my knowledge in processes and data analysis to improve
            the customer journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
