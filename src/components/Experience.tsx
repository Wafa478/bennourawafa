import React from 'react';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'Master\'s in Web Development',
      company: 'Current Training Program',
      period: '2024 - Present (9 months)',
      description: 'Currently enrolled in a comprehensive 9-month Master\'s program focused on web development technologies, modern frameworks, and full-stack development practices.'
    },
    {
      type: 'education',
      title: 'Bachelor\'s Degree in Computer Networks',
      company: 'Higher Institute of Computer Science and Communication Technologies (ISITCom), Hammam Sousse, Tunisia',
      period: '2017 - 2020',
      description: 'Completed a 3-year program specializing in Information and Network Technologies. Gained strong foundation in computer science, networking principles, and information technology systems.'
    },
    {
      type: 'education',
      title: 'Tunisian Baccalaureate in Experimental Sciences',
      company: 'Secondary School of Sidi El Hani, Sousse, Tunisia',
      period: '2016',
      description: 'Successfully earned the national diploma in Experimental Sciences, providing a solid foundation in mathematics, physics, and scientific methodology.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning Journey
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
