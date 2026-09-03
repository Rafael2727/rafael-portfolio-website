import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const scrollY = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (scrollY < 400) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};