import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-primary origin-left shadow-glow"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
