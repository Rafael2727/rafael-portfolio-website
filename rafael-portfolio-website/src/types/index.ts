export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Skill {
  name: string;
  level?: SkillLevel;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface SocialLinks {
  github: string;
  linkedin?: string; 
  facebook?: string;
  twitter?: string;
  email: string;
}
export interface SiteConfig {
  name: string;
  role: string;
  bio: string;
  location: string;
  resumeUrl: string;
  socials: SocialLinks;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}