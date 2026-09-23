import React, { ReactNode } from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}

interface ButtonAsButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never;
  isExternal?: never;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  href: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md',
    secondary:
      'bg-secondary-50 text-secondary-900 border border-secondary-300 hover:bg-secondary-100 hover:border-secondary-400',
    outline:
      'bg-transparent text-primary-700 border-2 border-primary-600 hover:bg-primary-50',
    ghost:
      'bg-transparent text-slate-700 hover:bg-cream-100 hover:text-slate-900',
    whatsapp:
      'bg-whatsapp text-white hover:bg-whatsapp-hover shadow-sm hover:shadow-md',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-sm px-3.5 py-2 min-h-[40px] gap-1.5',
    md: 'text-base px-5 py-2.5 min-h-[48px] gap-2',
    lg: 'text-lg px-6 py-3.5 min-h-[54px] gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, isExternal, target, rel, onClick } = props as ButtonAsLinkProps;
    if (isExternal || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={target || (isExternal ? '_blank' : undefined)}
          rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
          onClick={onClick}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass} onClick={onClick}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type || 'button'} className={combinedClass} {...buttonProps}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
