import React from 'react';
import { ExternalLink, Code2, Box, Database, Server, TerminalSquare, GitGraph, Layers } from 'lucide-react';
import { toolsData } from '../content/tools.js';

const Tools = () => {
  const { header, categories } = toolsData;

  // --- Reusable Tool Card Component ---
  const ToolCard = ({ item }) => {
    const Icon = item.icon;
    const style = { icon: <Icon size={24} />, color: "text-slate-500", bg: "bg-slate-50" };
    
    return (
      <a
        href={item.link}
        target="_blank" 
        rel="noopener noreferrer"
        // Card container style - matching the contact page aesthetics
        className="group flex flex-col p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 h-full"
      >
        {/* Top section: Icon and External Link arrow */}
        <div className="flex justify-between items-start mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.bg} ${style.color} group-hover:scale-110 transition-transform`}>
                {style.icon}
            </div>
             <ExternalLink className="text-slate-300 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" size={18} />
        </div>
        
        {/* Text Info */}
        <div>
          <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
            {item.name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
        </div>
      </a>
    );
  };


  // --- Main Render ---
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20 animate-in fade-in duration-500 px-4">
      
      {/* Header (Centered) */}
      <div className="max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {header.title}
        </h1>
        <p className="text-slate-600 text-lg">
          {header.subtitle}
        </p>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-5xl flex flex-col gap-16">
        
        {/* Loop through Categories */}
        {categories.map((category, index) => (
            <section key={index} className="w-full">
                
                {/* Category Title with a subtle separator line */}
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 mr-4 flex-shrink-0">
                        {category.title}
                    </h2>
                    <div className="flex-grow border-t border-slate-200/80"></div>
                </div>

                {/* Grid of Tool Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((tool, toolIndex) => (
                        <ToolCard key={toolIndex} item={tool} />
                    ))}
                </div>
            </section>
        ))}

      </div>
    </div>
  );
};

export default Tools;