
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 80 }
      ]
    },
    {
      title: 'Styling & Design',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'CSS Animations', level: 80 },
        { name: 'Figma', level: 75 }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Webpack/Vite', level: 80 },
        { name: 'npm/yarn', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Chrome DevTools', level: 90 }
      ]
    }
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          {skill.name}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm constantly learning and staying up-to-date with the latest technologies 
            and best practices in frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile/Scrum',
              'REST APIs',
              'GraphQL',
              'Testing (Jest)',
              'Accessibility',
              'SEO Optimization',
              'Performance Optimization',
              'Cross-browser Testing',
              'Mobile-first Design',
              'Progressive Web Apps'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
