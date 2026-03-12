import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RouterProvider, useRouter } from './components/Router';
import { HomePage } from './components/pages/HomePage';
import { SecurityPage } from './components/pages/SecurityPage';
import { MethodologyPage } from './components/pages/MethodologyPage';
import { AssessmentPage } from './components/pages/AssessmentPage';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { ProductPage } from './components/pages/ProductPage';
import { OutputsPage } from './components/pages/OutputsPage';
import { FAQPage } from './components/pages/FAQPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { Toaster } from './components/ui/sonner';

const AppContent = () => {
  const { currentPage } = useRouter();

  return (
    <div className="min-h-screen font-sans bg-[#FDFCF8] text-[#1A1A1A] selection:bg-[#2E2E48] selection:text-white">
      <Navbar />
      <main className="relative z-10">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'security' && <SecurityPage />}
        {currentPage === 'methodology' && <MethodologyPage />}
        {currentPage === 'outputs' && <OutputsPage />}
        {currentPage === 'faq' && <FAQPage />}
        {currentPage === 'resources' && <ResourcesPage />}
        {currentPage === 'how-it-works' && <HowItWorksPage />}
        {currentPage === 'product' && <ProductPage />}
        {currentPage === 'assessment' && <AssessmentPage />}
      </main>
      {currentPage !== 'assessment' && <Footer />}
      <Toaster />
    </div>
  );
};

const App = () => {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
};

export default App;