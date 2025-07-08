import React from 'react';
import { ExternalLink, Github, Mail, Lock } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Email Automation via Streamlit Dashboard',
      description: 'A comprehensive email automation solution built with Streamlit, featuring an intuitive dashboard for managing automated email campaigns and workflows.',
      tech: ['Python', 'Streamlit', 'SMTP', 'Pandas', 'Email APIs'],
      githubUrl: 'https://github.com/ManishKumar771',
      icon: Mail,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Caesar Cipher Text Encoder & Decoder',
      description: 'A classical cryptography implementation featuring Caesar cipher encryption and decryption with customizable shift values and text processing capabilities.',
      tech: ['Python', 'Cryptography', 'Algorithm', 'GUI', 'Text Processing'],
      githubUrl: 'https://github.com/ManishKumar771',
      icon: Lock,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my expertise in AI development, automation, and problem-solving through practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-200`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/ManishKumar771"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};