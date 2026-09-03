import React from 'react';
import { SITE_CONFIG } from '../../utils/constants';
import { Button } from '../ui/Button';
import { Mail, ArrowRight, Download } from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> { }

const Github: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
);
const Facebook: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);


const Linkedin: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-sky-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Left Column: Information & Bio */}
                <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Available for new projects
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400">{SITE_CONFIG.name}</span>
                    </h1>

                    <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
                        {SITE_CONFIG.role}
                    </p>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        {SITE_CONFIG.bio}
                    </p>

                    {/* Action Call-To-Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                        <a href="#projects">
                            <Button variant="primary" size="lg" className="gap-2">
                                View My Work <ArrowRight className="w-4 h-4" />
                            </Button>
                        </a>
                        <a href={SITE_CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="lg" className="gap-2">
                                Resume <Download className="w-4 h-4" />
                            </Button>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center lg:justify-start gap-5 pt-6 text-slate-600 dark:text-slate-400">
                        <a href={SITE_CONFIG.socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        {SITE_CONFIG.socials.linkedin && (
                            <a
                                href={SITE_CONFIG.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                        {SITE_CONFIG.socials.facebook && (
                            <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                <Facebook className="w-6 h-6" />
                            </a>
                        )}
                        <a href={`mailto:${SITE_CONFIG.socials.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                {/* Hero Right Column: Profile Picture */}
                <div className="lg:col-span-5 flex justify-center">
                    <div className="relative group p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-500 hover:scale-105">
                        {/* Glowing backdrop effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500" />

                        <div className="relative flex flex-col items-center justify-center p-2 bg-white dark:bg-slate-900 rounded-2xl overflow-hidden">
                            <img
                                src="/profile.png"
                                alt={`${SITE_CONFIG.name}`}
                                className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-102"
                            />
                            <div className="mt-4 text-center pb-2">
                                <span className="block text-xs font-mono uppercase tracking-widest text-slate-400">
                                    {SITE_CONFIG.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
