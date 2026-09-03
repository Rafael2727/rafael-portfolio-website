import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
{
    category: 'Frontend Development',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'HTML5/CSS3', level: 'Expert' },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'Prisma ORM', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'Vercel / Netlify', level: 'Advanced' },
    ],
  },
];