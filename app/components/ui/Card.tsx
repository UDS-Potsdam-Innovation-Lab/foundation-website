import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'glass';
}

const Card = ({
  title,
  children,
  icon,
  className = '',
  delay = 0,
  variant = 'default',
}: CardProps) => {
  const variantClass =
    variant === 'glass'
      ? 'card-glass text-white'
      : 'card-blue-gradient text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className={`
        p-6 rounded-2xl border border-white/10
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-glow
        ${variantClass}
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-accent">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="text-body [&_p]:leading-relaxed">{children}</div>
    </motion.div>
  );
};

export default Card;
