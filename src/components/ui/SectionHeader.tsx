import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: ReactNode;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-10 sm:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && <div className="mb-3 inline-block">{badge}</div>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-2 ${
          centered ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-10 h-0.5 bg-primary-600 rounded-full" />
        <span className="w-2.5 h-2.5 bg-secondary-500 rounded-full" />
        <span className="w-10 h-0.5 bg-primary-600 rounded-full" />
      </div>
    </div>
  );
};

