import React, { ReactNode } from 'react';
import { Card } from './Card';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = '',
}) => {
  return (
    <Card hoverEffect className={`reveal text-center py-8 px-5 max-w-lg mx-auto bg-white/95 border border-cream-200/90 shadow-warm ${className}`}>
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-soft text-primary flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-serif text-lg sm:text-xl font-bold text-ink mb-1">{title}</h3>
      <p className="text-muted text-xs sm:text-sm leading-relaxed mb-4 max-w-sm mx-auto">
        {description}
      </p>
      {action && <div className="flex justify-center">{action}</div>}
    </Card>
  );
};
