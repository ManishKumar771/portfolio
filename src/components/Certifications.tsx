import React from 'react';
import { Award, ExternalLink, Download, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certification = {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Mar 15, 2025',
    certificateId: '9fa1646edcbfb0e78184b63265205f3c6afd168ee04aca206b83863a663e30ac',
    description: 'Comprehensive certification covering the fundamentals of generative AI, including practical applications, ethical considerations, and industry best practices.',
    skills: ['Generative AI', 'Machine Learning', 'AI Ethics', 'Business Applications', 'Future Trends']
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development in AI and emerging technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {certification.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                      {certification.issuer}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{certification.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {certification.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Skills & Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Certificate ID:
                    </span>
                  </div>
                  <code className="text-xs text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 px-2 py-1 rounded break-all">
                    {certification.certificateId}
                  </code>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-medium">View Certificate</span>
                  </button>
                  
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200">
                    <Download className="w-4 h-4" />
                    <span className="font-medium">Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};