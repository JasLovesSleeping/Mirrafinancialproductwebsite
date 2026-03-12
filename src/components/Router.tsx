import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'security' | 'methodology' | 'assessment' | 'how-it-works' | 'product';

interface RouterContextType {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  // Handle browser back button basic support
  React.useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
       if (event.state?.page) {
         setCurrentPage(event.state.page);
       } else {
         setCurrentPage('home');
       }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setPage = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', `/#${page === 'home' ? '' : page}`);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ currentPage, setPage }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
