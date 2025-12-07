import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../content/projects'; // Ensure path is correct

const ProjectsPage = () => {
  // Destructure content from the data file
  const { header, items } = projectsData;

  // 1. Get unique categories dynamically from the items array
  const categories = [...new Set(items.map(p => p.category))];
  
  // State to track active category
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Smooth Scroll Function
  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center space-y-12 animate-in fade-in duration-500 py-20 px-4">
      
      {/* HEADER SECTION (Text comes from header object) */}
      <div className="max-w-2xl text-center mb-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {header.title}
        </h1>
        <p className="text-slate-600 text-lg">
          {header.subtitle}
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => scrollToCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-slate-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="w-full max-w-5xl space-y-20">
        {categories.map((category) => (
          <section key={category} id={category} className="scroll-mt-32">
            
            {/* Category Title */}
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
              <span>{category}</span>
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items
                .filter(item => item.category === category)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};

// Helper Component for the Card
const ProjectCard = ({ project }) => (
  <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    
    {/* Image Container */}
    <div className="h-48 overflow-hidden relative bg-slate-100">
      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        {/* Links Logic */}
        <div className="flex gap-3">
          {project.links?.github && (
            <a 
                href={project.links.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-slate-900 transition-colors"
            >
                <Github size={20} />
            </a>
          )}
          {project.links?.demo && (
            <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-blue-600 transition-colors"
            >
                <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-md border border-slate-100">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectsPage;