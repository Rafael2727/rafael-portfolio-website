import React from 'react';
import { PROJECTS } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of recent applications, experiments, and developer tools I've built."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};