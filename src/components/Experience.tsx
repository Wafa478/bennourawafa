
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description: 'Leading frontend development for multiple client projects, implementing modern React applications and ensuring optimal user experiences.'
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Innovations Inc.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React, Vue.js, and modern CSS frameworks. Collaborated with UX/UI designers to implement pixel-perfect designs.'
    },
    {
      type: 'education',
      title: 'Advanced Web Development Bootcamp',
      company: 'CodeAcademy Pro',
      period: '2019 - 2020',
      description: 'Intensive 12-month program covering full-stack development with focus on modern JavaScript, React, and Node.js.'
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'StartUp Creative',
      period: '2019 - 2020',
      description: 'Built and maintained company websites, learned version control with Git, and gained experience in agile development methodologies.'
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'State University',
      period: '2015 - 2019',
      description: 'Focused on software engineering principles, data structures, and computer systems. Graduated with honors.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        item.type === 'work' 
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          : 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
                      }`}>
                        {item.type === 'work' ? 'Work' : 'Education'}
                      </span>
                      <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      {item.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
