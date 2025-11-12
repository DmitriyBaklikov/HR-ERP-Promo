import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="bg-gradient-to-br from-gray-900 to-blue-800 text-white"
    >
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          HR:ERP
        </h1>
        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Революция в управлении персоналом
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Комплексная ERP-система для автоматизации HR-процессов, удержания талантов и принятия решений на основе данных.
        </p>
        <a
          href="#demo-form"
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Узнать больше
        </a>
      </div>
    </section>
  );
};

export default Hero;