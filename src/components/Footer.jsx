import React from 'react';

import { FaLinkedinIn, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import FloatChatLogo from '../assets/FloatChat_logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center text-white">
            <img src={FloatChatLogo} alt="FloatChat Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">FloatChat</span>
          </div>
          <p className="text-sm">
            AI-powered ocean data exploration platform
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">API Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">ARGO Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Tutorials</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1e2a44] rounded-md text-gray-400 hover:text-white hover:bg-[#2d3a5a] transition-colors duration-200">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1e2a44] rounded-md text-gray-400 hover:text-white hover:bg-[#2d3a5a] transition-colors duration-200">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1e2a44] rounded-md text-gray-400 hover:text-white hover:bg-[#2d3a5a] transition-colors duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-[#1e2a44] rounded-md text-gray-400 hover:text-white hover:bg-[#2d3a5a] transition-colors duration-200">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;