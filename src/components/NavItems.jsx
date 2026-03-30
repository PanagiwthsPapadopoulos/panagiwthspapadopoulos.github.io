import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink

const NavItems = ({ mobile, closeMenu }) => {
  
  // 1. Data:
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
      icon: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg> 
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