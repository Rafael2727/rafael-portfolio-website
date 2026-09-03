import React from 'react';
import { SITE_CONFIG } from '../../utils/constants';
import { SectionHeader } from '../ui/SectionHeader';
import { Code2, Terminal, Cpu, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Clean Architecture',
      description: 'Writing scalable, modular, and maintainable TypeScript and React code bases.',
    },
    {
      icon: <Terminal className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Full-Stack Engineering',
      description: 'Connecting performant client UIs with robust RESTful APIs and modern databases.',
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: 'Problem Solver',
      description: 'Transforming complex product requirements into clean, user-centric software solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="A quick look into who I am, what drives me, and how I approach engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Hello! I'm <strong className="text-slate-900 dark:text-white">{SITE_CONFIG.name}</strong>, a dedicated software engineer based in the {SITE_CONFIG.location}. I specialize in crafting modern web applications that pair intuitive visual design with solid frontend and backend architecture.
            </p>
            <p>
              My focus is centered around modern web standards—leveraging React, TypeScript, and modern styling solutions like Tailwind CSS to build fast, accessible, and responsive user experiences.
            </p>
            <p>
              When I'm not writing code, you can usually find me exploring new tech stacks, optimizing build pipelines, or working on custom side projects.
            </p>

            <div className="pt-4 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <Globe className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Based in {SITE_CONFIG.location} &bull; Open for Remote Work</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-4 transition-all duration-300 hover:border-indigo-500/50"
              >
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};