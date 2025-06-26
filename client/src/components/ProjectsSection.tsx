import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection: React.FC = () => {
  const ref = useScrollAnimation();

  const projects = [
    {
      title: "Portfolio Management System",
      description: "Microservices-based portfolio system for real-time investment tracking with Spring Boot and Spring Cloud architecture.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Spring Boot", "Microservices", "JWT"],
      date: "Aug. 2021",
      githubUrl: "https://github.com/raviteja6031/portfolio-management",
      gradient: "from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600"
    },
    {
      title: "Failover-First Load Balancer",
      description: "Kubernetes-based load balancer with health check prioritization using Python and Node.js for high availability.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Kubernetes", "Python", "Node.js"],
      date: "Sep. 2024",
      githubUrl: "https://github.com/raviteja6031/Health-check-load-testing/tree/main/k8s-health-check-load-testing-main",
      gradient: "from-violet-50 to-purple-50 dark:from-slate-700 dark:to-slate-600"
    },
    {
      title: "AI-Generated Email Reply",
      description: "Full-stack application with Chrome extension integration using Gemini API for AI-powered email responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Spring Boot", "Gemini API"],
      date: "Jan. 2025",
      githubUrl: "https://github.com/raviteja6031/AI-Generated-Email-Reply",
      gradient: "from-emerald-50 to-green-50 dark:from-slate-700 dark:to-slate-600"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} technology visualization`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  index === 0 ? 'text-blue-900 dark:text-blue-300' :
                  index === 1 ? 'text-violet-900 dark:text-violet-300' :
                  'text-emerald-900 dark:text-emerald-300'
                }`}>
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index === 0 && techIndex === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        index === 0 && techIndex === 1 ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        index === 0 && techIndex === 2 ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                        index === 1 && techIndex === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        index === 1 && techIndex === 1 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                        index === 1 && techIndex === 2 ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        index === 2 && techIndex === 0 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                        index === 2 && techIndex === 1 ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                        'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{project.date}</span>
                  <div className="flex space-x-2">
                  <a 
  href={project.githubUrl} 
  target="_blank" 
  rel="noopener noreferrer"
  className={`p-2 text-white rounded-lg transition-colors duration-200 ${
    index === 0 ? 'bg-blue-600 hover:bg-blue-700' :
    index === 1 ? 'bg-violet-600 hover:bg-violet-700' :
    'bg-emerald-600 hover:bg-emerald-700'
  }`}
>
  <Github className="w-4 h-4" />
</a>

                    <button className={`p-2 text-white rounded-lg transition-colors duration-200 ${
                      index === 0 ? 'bg-violet-600 hover:bg-violet-700' :
                      index === 1 ? 'bg-indigo-600 hover:bg-indigo-700' :
                      'bg-green-600 hover:bg-green-700'
                    }`}>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
