import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const NavItems = ({ mobile, closeMenu }) => {
  
  // 1. Data: Changed 'id' to 'path'
  const items = [
    { 
      path: '/', // Home/About is usually root
      label: 'About', 
      icon: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> 
    },
    { 
      path: '/experience', 
      label: 'Experience', 
      icon: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 
    },
    { 
      path: '/projects', 
      label: 'Projects', 
      icon: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> 
    },
    { 
      path: '/tools', 
      label: 'Tools', 
      icon: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> 
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 
    },
  ];

  return (
    <>
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          // The 'end' prop prevents "Home" from lighting up when you are on "Projects"
          end={item.path === '/'} 
          
          onClick={() => {
            // Close menu if we are on mobile
            if (mobile && closeMenu) closeMenu();
          }}

          // NavLink gives us { isActive } automatically
          className={({ isActive }) => {
            // Base classes
            let classes = "font-medium transition-all duration-200 flex items-center gap-2 ";

            if (mobile) {
              // MOBILE STYLES
              classes += "w-full px-4 py-3 rounded-lg text-sm ";
              classes += isActive 
                ? "bg-blue-50 text-blue-700" 
                : "text-slate-600 hover:bg-slate-50";
            } else {
              // DESKTOP STYLES
              classes += "px-4 py-2 rounded-md text-sm ";
              classes += isActive 
                ? "bg-white text-blue-600 shadow-sm" 
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50";
            }
            return classes;
          }}
        >
          <item.icon />
          {item.label}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;