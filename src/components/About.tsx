
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with a love for creating beautiful, 
              functional web experiences. At 30, I've found my calling in transforming 
              ideas into interactive digital solutions that make a real difference.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in web development has been driven by curiosity and a desire 
              to constantly learn and grow. I specialize in modern JavaScript frameworks, 
              responsive design, and creating user interfaces that are both aesthetically 
              pleasing and highly functional.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, 
              contributing to open-source projects, or mentoring other women in tech. 
              I believe in the power of technology to create positive change and 
              am always excited to work on projects that make an impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-purple-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-pink-50 dark:bg-gray-800 rounded-lg">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                What I Do Best
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Responsive Web Design
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Modern JavaScript Frameworks
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    User Experience Design
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Performance Optimization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Cross-browser Compatibility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
