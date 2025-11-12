import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-blue-600">HR</span><span className="text-red-500 animate-blink">:</span><span className="text-blue-600">ERP</span>
        </div>
        <nav>
          <a
            href="#demo-form"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md"
          >
            Запросить демо
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
