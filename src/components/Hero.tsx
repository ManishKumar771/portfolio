import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto px-6 w-full">
        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-10 border-4 border-blue-200 dark:border-gray-700"
        />
        <div className="text-center md:text-left w-full">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Manish Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-6">
              AI Developer & Data Scientist
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I am Here to Give my Best — Turning Ideas Into Intelligent Solutions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 shadow-lg flex items-center gap-2 justify-center">
              <span className="font-medium">View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 font-medium">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};