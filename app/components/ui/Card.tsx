import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ title, children, icon, className = '', delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`p-6 rounded-xl card-blue-gradient text-white hover:shadow-glow transition-all duration-300 ${className}`}
    >
      {icon && <div className="text-accent mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="text-body">{children}</div>
    </motion.div>
  );
};

export default Card;