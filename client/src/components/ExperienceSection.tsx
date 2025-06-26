import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ExperienceSection: React.FC = () => {
  const ref = useScrollAnimation();

  const experiences = [
    {
      title: "Jr. Software Engineer",
      company: "Cognizant Technology Solutions Pvt. Ltd",
      location: "Hyderabad, India",
      period: "Mar. 2021 – Dec. 2022",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      achievements: [
        "Migrated a monolithic Java/Spring Boot application to microservices on AWS using Terraform and AWS CDK, reducing deployment time by 85%.",
        "Automated Kubernetes deployments with Docker and ArgoCD, enabling fast and reliable rollbacks for production workloads.",
        "Built and optimized CI/CD pipelines using Jenkins, GitHub Actions, and SonarQube, cutting release cycles by 60%.",
        "Implemented observability stack using Prometheus, Grafana, and ELK, which reduced mean time to detect (MTTD) by 70%."
      ]
    },
    // {
    //   title: "Full-Stack Developer",
    //   company: "Legacy Health",
    //   location: "Bangalore, India",
    //   period: "Mar. 2020 – Jul. 2021",
    //   image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    //   achievements: [
    //     "Developed secure RESTful APIs with JWT and OAuth 2.0 authentication",
    //     "Automated CI/CD pipelines using AWS with SonarQube integration",
    //     "Achieved 30% system efficiency improvement and 40% deployment time reduction",
    //     "Deployed full-stack applications on AWS (EC2, RDS, S3) using Terraform"
    //   ]
    // }
  ];

  return (
    <section 
      id="experience" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Building innovative solutions across diverse technology stacks
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                  <img 
                    src={exp.image} 
                    alt={`Professional software development team at ${exp.company}`} 
                    className="rounded-xl shadow-lg w-full h-auto" 
                  />
                </div>
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{exp.title}</h3>
                        <p className={`text-xl font-semibold mb-2 ${index === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-violet-600 dark:text-violet-400'}`}>
                          {exp.company}
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.location}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        index === 0 
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                          : 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default ExperienceSection;
