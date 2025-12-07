import React from 'react';
import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-4 animate-in fade-in duration-500">
      
      {/* Large Decorative 404 */}
      <div className="relative flex items-center justify-center mb-2">
        <h1 className="text-9xl md:text-[12rem] font-bold text-slate-100 select-none">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="px-4 py-1.5 rounded-full bg-red-50 text-red-500 text-sm font-bold tracking-widest uppercase border border-red-100">
            Error
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-md">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-500 mb-8 leading-relaxed text-lg">
          Oops! The page you are looking for doesn't exist or has been moved to a different universe.
        </p>

        {/* Action Button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 group"
        >
          <MoveLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

    </div>
  );
};

export default NotFoundPage;