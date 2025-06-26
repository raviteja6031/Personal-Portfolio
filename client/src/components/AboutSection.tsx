import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto">
            Passionate about creating scalable, high-performance applications and driving innovation through technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern developer workspace with multiple monitors and clean setup" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm an AWS Java Engineer with a strong background in designing and deploying scalable, cloud-native applications. 
              With expertise in Java, Spring Boot, and Microservices, I build robust backend systems integrated with AWS services like EC2,
               Lambda, EKS, and RDS.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in implementing RESTful APIs, automating infrastructure using Terraform and AWS CDK, and managing secure, high-availability deployments through CI/CD pipelines. My focus is on performance optimization, cloud cost-efficiency, and end-to-end automation across the development lifecycle.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-600 dark:text-slate-300">raviteja6031@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-600 dark:text-slate-300">562-824-2747</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-600 dark:text-slate-300">Long Beach, CA</span>
              </div>
            </div>

            {/* Download Resume Button */}
            <a 
              href="/attached_assets/Updated Resume_1750371922076.pdf" 
              download
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl border border-blue-100 dark:border-slate-600">
              <h4 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-300">Master of Science in Computer Science</h4>
              <p className="text-blue-700 dark:text-blue-400 font-medium mb-2">California State University, Long Beach</p>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Jan. 2023 – Dec. 2024</p>
              <p className="text-slate-600 dark:text-slate-300">GPA: 3.6/4.0</p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-2xl border border-violet-100 dark:border-slate-600">
              <h4 className="text-xl font-semibold mb-2 text-violet-900 dark:text-violet-300">Bachelor of Technology in Computer Science</h4>
              <p className="text-violet-700 dark:text-violet-400 font-medium mb-2">Gandhi Institute of Technology and Management</p>
              <p className="text-slate-600 dark:text-slate-300 mb-2">Aug. 2017 – Apr. 2021</p>
              <p className="text-slate-600 dark:text-slate-300">GPA: 3.43/4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
