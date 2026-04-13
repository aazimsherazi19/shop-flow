import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition font-medium">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
