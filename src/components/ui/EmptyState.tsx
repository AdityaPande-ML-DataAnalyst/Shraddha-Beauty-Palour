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
    <Card className={`text-center py-12 px-6 max-w-xl mx-auto border-dashed border-2 border-cream-300 ${className}`}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
        {description}
      </p>
      {action && <div className="flex justify-center">{action}</div>}
    </Card>
  );
};

