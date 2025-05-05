
import React, { useState } from 'react';
import pic from './images/cap.png'
import pic1 from './images/cap2.png'
import pic3 from './images/pot.png'
import pic4 from './images/cap4.png'
import { Target } from 'lucide-react';


const Projects = () => {
  // Sample project data - you would replace this with your actual projects
  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration, user authentication, and admin dashboard.',
      image: pic,
      technologies: ['React', 'Python', 'MySQL'],
      category: 'web',
      link: 'https://atelierbags.vercel.app/',
    },
    {
      id: 2,
      title: 'Sign Up page',
      description: 'Custom',
      image: pic1,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      link: 'https://atelierbags.vercel.app/',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Custom portfolio website with dark mode, animations, and responsive design.',
      image: pic3,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      link: 'https://setek-creative-web.vercel.app/',
    },
   
    
  ];

  const categories = ['all', 'web', 'mobile'];
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here are some of my recent projects. Each one was crafted with attention to detail and focus on user experience.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-secondary/30 rounded-full">
            {categories.map(category => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'text-muted-foreground hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-secondary/20 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(project.id % 6) * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center transition-colors"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
