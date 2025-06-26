import React from 'react';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Raviteja Maruri
            </h3>
            <p className="text-slate-300 mb-4">
              AWS Java Developer passionate about creating innovative solutions with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-slate-200 transition-colors duration-200"
              >
                <SiGithub className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <SiX className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-200">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>raviteja6031@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>562-824-2747</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Long Beach, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Raviteja Reddy Maruri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
