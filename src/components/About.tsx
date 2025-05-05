
import React from 'react';

const About = () => {
  // Skills with proficiency levels
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Kotlin', level: 80 },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
            <p className="text-muted-foreground mb-4">
              I'm Meshack Setek, a creative full-stack developer passionate about blending design and functionality.
              With expertise in both frontend and backend technologies, I craft digital experiences that are not 
              only visually appealing but also performant and user-friendly.
            </p>
            <p className="text-muted-foreground mb-6">
              I enjoy tackling complex problems and transforming ideas into elegant, efficient solutions. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Full Stack', 'Responsive Design'].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors inline-block"
            >
              Let's Work Together
            </a>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
  <h3 className="text-2xl font-bold mb-6">Code I Speak</h3>

  <div className="flex flex-wrap gap-3">
    {skills.map((skill) => (
      <span
        key={skill.name}
        className="bg-primary text-background px-4 py-1 rounded-full text-sm font-medium shadow-sm"
      >
        {skill.name}
      </span>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
