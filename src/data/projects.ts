import type { Project } from '../types';

export const PROJECTS: Project[] = [
{
    id: 'pulse-commerce',
    title: 'Pulse Commerce Analytics',
    description: 'A real-time e-commerce dashboard featuring automated sales reporting, dynamic metric charts, and inventory threshold alerts.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/rafaelbatnag',
    liveUrl: 'https://example.com',
    featured: true,
},
{
    id: 'promptcraft-studio',
    title: 'PromptCraft Studio',
    description: 'Collaborative workspace for engineers to design, test, and version-control complex LLM system prompts.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/rafaelbatnag',
    liveUrl: 'https://example.com',
    featured: true,
},
{
    id: 'taskflow-cli',
    title: 'TaskFlow CLI',
    description: 'A lightweight terminal tool built for developers to manage local task backlogs, sync git hooks, and track time.',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/rafaelbatnag',
    featured: false,
},
];