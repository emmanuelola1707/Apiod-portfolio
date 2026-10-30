
import { motion, useReducedMotion } from "motion/react";

function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const prefersReducedMotion = useReducedMotion();

  const startingPosition = {
    up: { y: 28, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...startingPosition[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.65,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
