import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Navbar at the top */}
      <Navbar />

      {/* 2. Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        
        {/* This is where pages are injected */}
        <Outlet />
        
      </main>

    </div>
  );
};

export default MainLayout;