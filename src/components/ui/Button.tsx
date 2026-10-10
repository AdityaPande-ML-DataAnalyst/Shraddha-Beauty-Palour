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
    'inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap';

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md border border-transparent font-bold',
    secondary:
      'bg-primary-soft text-primary border border-[#f2d7dc] hover:bg-primary hover:text-white font-bold',
    outline:
      'bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary-soft font-bold',
    ghost:
      'bg-transparent text-muted hover:bg-cream-100 hover:text-ink',
    whatsapp:
      'bg-whatsapp text-white hover:bg-whatsapp-hover shadow-wa-btn font-bold',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs sm:text-[13px] px-4 py-1.5 min-h-[36px] gap-1.5',
    md: 'text-[13.5px] sm:text-sm px-5 py-2.5 min-h-[42px] gap-2',
    lg: 'text-sm sm:text-base px-6 py-3 min-h-[46px] gap-2.5',
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
