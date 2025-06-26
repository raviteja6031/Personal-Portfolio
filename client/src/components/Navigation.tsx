import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200/20 dark:border-slate-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Raviteja Maruri
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/20 dark:border-slate-700/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
