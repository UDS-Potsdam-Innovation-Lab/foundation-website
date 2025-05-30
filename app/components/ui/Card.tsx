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
      className={`p-6 rounded-xl bg-white dark:bg-[#002B5C] hover:shadow-glow transition-all duration-300 ${className}`}
    >
      {icon && <div className="text-accent mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-4 gradient-text">{title}</h3>
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </motion.div>
  );
};

export default Card;