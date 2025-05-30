import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ variant = 'primary', children, href, onClick, className = '' }: ButtonProps) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const combinedClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
};

export default Button;