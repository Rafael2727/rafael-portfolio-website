import React from 'react';

interface SectionHeaderProps {
title: string;
subtitle?: string;
centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
title,
subtitle,
centered = true,
}) => {
return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
    </h2>
    {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        {subtitle}
        </p>
    )}
    </div>
);
};