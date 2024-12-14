export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const scaleHover = {
  whileHover: { 
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.2 }
  }
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}; 