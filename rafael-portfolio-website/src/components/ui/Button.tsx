import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
size?: 'sm' | 'md' | 'lg';
children: React.ReactNode;
className?: string;
}

export const Button: React.FC<ButtonProps> = ({
variant = 'primary',
size = 'md',
children,
className = '',
...props
}) => {
const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
    primary:
    'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-500/25 focus:ring-indigo-500',
    secondary:
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 focus:ring-slate-500',
    outline:
    'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 focus:ring-indigo-500',
    ghost:
    'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400',
};

const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
};

return (
    <button
    className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    {...props}
    >
{children}
    </button>
);
};