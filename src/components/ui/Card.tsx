import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-cream-200 shadow-warm p-6 ${
        hoverEffect ? 'transition-all duration-300 hover:shadow-warm-lg hover:border-primary-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

