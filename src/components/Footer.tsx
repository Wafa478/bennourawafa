
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Sarah Dev
            </h3>
            <p className="text-gray-300 mb-4">
              Frontend Developer passionate about creating beautiful, 
              user-friendly web experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                GitHub
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-300 mb-4">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sarah Dev. Built with React & Tailwind CSS. Made with 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
