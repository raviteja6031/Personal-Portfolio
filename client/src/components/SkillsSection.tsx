import React from 'react';
import { Code, Palette, Server, Cloud, Database, Settings } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SkillsSection: React.FC = () => {
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      color: "text-blue-600 dark:text-blue-400",
      skills: [
        { name: "Java", level: 5 },
        { name: "AWS", level: 4 },
        { name: "Python", level: 4 },
        { name: "Kubernetes", level: 3 },
        {name: "Docker", level: 4}
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      color: "text-amber-600 dark:text-amber-400",
      skills: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Ansible"]
    },
    {
      title: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      color: "text-violet-600 dark:text-violet-400",
      skills: ["React.js", "Angular", "Redux", "HTML/CSS", "Tailwind", "Material-UI"]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      color: "text-emerald-600 dark:text-emerald-400",
      skills: ["Spring Boot", "Spring Cloud", "Hibernate", "Node.js", "RESTful APIs"]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      color: "text-indigo-600 dark:text-indigo-400",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Cassandra", "Redis"]
    },
    {
      title: "Tools & Testing",
      icon: <Settings className="w-5 h-5" />,
      color: "text-rose-600 dark:text-rose-400",
      skills: ["Git", "Postman", "JUnit", "Mockito", "SonarQube"]
    }
  ];

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < level ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
            alt="Clean modern workspace with code on multiple screens and tech gadgets" 
            className="md:col-span-2 lg:col-span-1 rounded-2xl shadow-lg w-full h-auto" 
          />
          
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Languages with skill levels */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className={`text-xl font-bold mb-4 ${skillCategories[0].color} flex items-center`}>
                {skillCategories[0].icon}
                <span className="ml-2">{skillCategories[0].title}</span>
              </h3>
              <div className="space-y-3">
                {skillCategories[0].skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                    {renderSkillLevel(skill.level)}
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className={`text-xl font-bold mb-4 ${skillCategories[1].color} flex items-center`}>
                {skillCategories[1].icon}
                <span className="ml-2">{skillCategories[1].title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategories[1].skills.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm ${
                      index === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      index === 1 ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                      index === 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                      index === 3 ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                      index === 4 ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200' :
                      'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.slice(2).map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
              <h3 className={`text-xl font-bold mb-4 ${category.color} flex items-center`}>
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`block px-3 py-1 rounded-full text-sm ${
                      (index === 0 && skillIndex === 0) || (index === 2 && skillIndex === 0) ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      (index === 0 && skillIndex === 1) || (index === 2 && skillIndex === 1) ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      (index === 0 && skillIndex === 2) || (index === 2 && skillIndex === 2) ? 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200' :
                      (index === 0 && skillIndex === 3) ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      (index === 0 && skillIndex === 4) ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                      (index === 1 && skillIndex === 0) ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                      (index === 1 && skillIndex === 1) || (index === 2 && skillIndex === 3) ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      (index === 1 && skillIndex === 2) ? 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200' :
                      (index === 1 && skillIndex === 3) ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                      (index === 1 && skillIndex === 4) || (index === 2 && skillIndex === 4) ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                      (index === 3 && skillIndex === 0) ? 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200' :
                      (index === 3 && skillIndex === 1) ? 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200' :
                      (index === 3 && skillIndex === 2) ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
