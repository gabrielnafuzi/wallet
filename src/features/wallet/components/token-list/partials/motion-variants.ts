import { Variants } from 'framer-motion'

export const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: {
    y: 40,
    x: -20,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
  },
}
