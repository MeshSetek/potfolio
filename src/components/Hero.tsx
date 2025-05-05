
import React from 'react';
import myImage from './images/WhatsApp Image 2025-05-03 at 11.46.42.jpeg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-3/5 animate-fade-in">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Meshack Setek
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Creative <span className="text-gradient">Full Stack Developer</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              I blend design and development to build beautiful, user-friendly websites.
              Available for freelance projects to turn your ideas into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary/80 text-white rounded-full transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
         <div className="relative md:w-2/5 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
  <div className="relative flex flex-col items-center">
    {/* Profile Image Circle */}
    <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary p-1">
      <img
        src={myImage}
        alt="Meshack Setek"
        className="w-full h-full object-cover object-center rounded-full"
      />
    </div>

    {/* Availability Badge */}
    <div className="mt-4 glass-morphism py-2 px-4 rounded-lg text-sm">
      <span className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
        Available for work
      </span>
    </div>

    {/* Decorative Outline */}
    <div className="absolute -z-10 -bottom-4 -right-4 w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-dashed border-primary/40 animate-pulse-slow"></div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
