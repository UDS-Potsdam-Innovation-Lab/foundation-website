import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  /** Use for light background pages (e.g. about, contact) */
  variant?: 'default' | 'content';
}

const SectionTitle = ({
  title,
  subtitle,
  centered = true,
  variant = 'default',
}: SectionTitleProps) => {
  const titleClass =
    variant === 'content'
      ? 'text-4xl font-bold mb-4 gradient-text-content'
      : 'text-4xl font-bold mb-4 gradient-text';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={titleClass}>{title}</h2>
      {variant === 'content' && centered && (
        <span className="section-title-accent mx-auto block" aria-hidden />
      )}
      {variant !== 'content' && centered && (
        <span className="section-title-accent mx-auto block" aria-hidden />
      )}
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl mt-4 ${
            variant === 'content' ? 'text-[#0a0f4a]/90 mx-auto' : 'text-body mx-auto'
          } ${centered ? 'text-center' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;