import type { Project } from '../types';

export const PROJECTS: Project[] = [
    {
        id: 'portfolio-website',
        title: 'Personal Portfolio Web Application',
        description: 'Modern, responsive portfolio built with React, TypeScript, and Tailwind CSS v4 featuring automated GitHub Actions CI/CD deployment.',
        tags: ['React', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'GitHub Actions'],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/Rafael12727/rafael-portfolio-website',
        liveUrl: 'https://Rafael2727.github.io/rafael-portfolio-website/',
        featured: true,
    },
    {
        id: 'pulse-commerce',
        title: 'Pulse Commerce Analytics',
        description: 'A real-time e-commerce dashboard featuring automated sales reporting, dynamic metric charts, and inventory threshold alerts.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/Rafael2727',
        liveUrl: 'https://example.com',
        featured: true,
    },
    {
        id: 'promptcraft-studio',
        title: 'PromptCraft Studio',
        description: 'Collaborative workspace for engineers to design, test, and version-control complex LLM system prompts.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/Rafael2727',
        liveUrl: 'https://example.com',
        featured: true,
    },
    {
        id: 'taskflow-cli',
        title: 'TaskFlow CLI',
        description: 'A lightweight terminal tool built for developers to manage local task backlogs, sync git hooks, and track time.',
        tags: ['Node.js', 'TypeScript', 'CLI'],
        imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
        githubUrl: 'https://github.com/Rafael2727',
        featured: false,
    },
];