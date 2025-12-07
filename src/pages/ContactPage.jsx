import { Mail, MapPin, Github, Linkedin, Twitter, ExternalLink, Instagram, Facebook } from 'lucide-react';
import {contactData} from '../content/contact';

const ContactPage = () => {
  const { header, primary, socials } = contactData;

  // Reusable Card Component
  const ContactCard = ({ item }) => {
    
    return (
      <a
        href={item.href}
        target="_blank" 
        rel="noopener noreferrer"
        className={`group flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${item.iconConfig.borderHover} text-left`}
      >
        {/* Icon Box */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconConfig.bg} ${item.iconConfig.color} group-hover:scale-110 transition-transform`}>
          {item.iconConfig.icon}
        </div>
        
        {/* Text Info */}
        <div className="flex-1">
          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {item.label}
          </h3>
          <p className="text-slate-500 text-sm">{item.value}</p>
        </div>

        {/* External Arrow */}
        <ExternalLink className="text-slate-300 group-hover:text-slate-400 transition-colors" size={18} />
      </a>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-20 animate-in fade-in duration-500 px-4">
      
      {/* HEADER (Centered) */}
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {header.title}
        </h1>
        <p className="text-slate-600 text-lg">
          {header.subtitle}
        </p>
      </div>

      <div className="w-full max-w-4xl space-y-8">
        
        {/* SECTION 1: Location & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {primary.map((item, index) => (
            <ContactCard key={index} item={item} />
          ))}
        </div>

        {/* DIVIDER */}
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium uppercase tracking-wider">Socials</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* SECTION 2: Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((item, index) => (
            <ContactCard key={index} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;