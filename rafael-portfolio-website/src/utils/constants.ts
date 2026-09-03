import type { SiteConfig } from '../types';

export const SITE_CONFIG: SiteConfig = {
    name: 'Rafael Batnag',
    role: 'Full-Stack Software Engineer',
    bio: 'Passionate developer building scalable web applications, sleek user experiences, and modern software solutions.',
    location: 'Philippines',
    resumeUrl: '/resume.pdf',
    socials: {
        github: 'https://github.com/rafaelbatnag',
        facebook: 'https://facebook.com/rafaelbatnag',
        email: 'rafael@example.com',
    },
};

export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
] as const;