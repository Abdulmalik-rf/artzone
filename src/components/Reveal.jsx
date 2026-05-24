import { motion } from 'framer-motion';

const variants = {
  up:    { hidden: { opacity: 0, y: 28 },  show: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -28 }, show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 28 },  show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -28 }, show: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },         show: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
};

export default function Reveal({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className,
  style,
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Component>
  );
}

export function StaggerGroup({ children, as = 'div', stagger = 0.08, delay = 0, amount = 0.2, once = true, className, style }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ children, as = 'div', variant = 'up', duration = 0.6, className, style, onClick }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      style={style}
      onClick={onClick}
      variants={variants[variant]}
      transition={{ duration, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Component>
  );
}
