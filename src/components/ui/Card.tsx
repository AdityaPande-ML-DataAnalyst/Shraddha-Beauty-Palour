import React, { ReactNode, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style,
  hoverEffect = false,
}) => {
  return (
    <div
      style={style}
      className={`bg-white/90 backdrop-blur-xs rounded-2xl border border-cream-200/80 shadow-warm p-5 sm:p-6 ${
        hoverEffect
          ? 'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5 hover:border-primary-200/60'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
