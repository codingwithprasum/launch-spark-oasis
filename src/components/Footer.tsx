
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API Documentation', 'Integrations', 'Security'],
    Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
    Resources: ['Help Center', 'Community', 'Tutorials', 'Webinars', 'Status'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Compliance']
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/52ae7abf-818f-435c-ba4f-e94729d783d6.png" 
                alt="Technologia Logo" 
                className="w-8 h-8 mr-3"
              />
              <span className="text-xl font-bold text-white">Technologia</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Empowering businesses with next-generation technology solutions. 
              Transform your operations with our cutting-edge SaaS platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Twitter className="h-5 w-5 text-slate-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-slate-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Github className="h-5 w-5 text-slate-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg transition-colors duration-300">
                <Mail className="h-5 w-5 text-slate-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Technologia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
