import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AdvantagesSection from './components/AdvantagesSection';
import BenefitsSection from './components/BenefitsSection';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <AdvantagesSection />
        <BenefitsSection />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;