import React, { ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'neutral' | 'success';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    primary: 'bg-primary-50 text-primary-800 border border-primary-200/90 font-semibold',
    secondary: 'bg-secondary-100 text-secondary-900 border border-secondary-300 font-semibold',
    neutral: 'bg-cream-100 text-slate-800 border border-cream-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

