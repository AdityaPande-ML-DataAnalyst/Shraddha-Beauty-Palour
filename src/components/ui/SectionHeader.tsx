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
    <div className={`mb-10 sm:mb-11 ${centered ? 'text-center' : 'text-left'} reveal ${className}`}>
      {badge && <div className="mb-2 inline-block">{badge}</div>}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold text-ink leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-[15px] text-muted max-w-[560px] mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
