import { useState } from 'react';
import NavItems from './NavItems';
import { useNavigate } from 'react-router-dom';

const Navbar = () => { 

  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div 
            className="font-bold text-xl text-slate-900 cursor-pointer flex items-center gap-2"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">PP</div>
            <span className="hidden sm:inline">Panagiotis Papadopoulos</span>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          {/* Force the container to be a Flex Row */}
          <div className="hidden md:flex space-x-1 bg-slate-100/50 p-1 rounded-lg">
            <NavItems 
              mobile={false} // Use Desktop Styles
            />
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button 
            className="md:hidden text-slate-600 p-2 hover:bg-slate-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      {/* Force the container to be a Flex Column via space-y-2 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <NavItems 
            mobile={true} // Use Mobile Styles
            closeMenu={() => setIsMobileMenuOpen(false)} 
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;