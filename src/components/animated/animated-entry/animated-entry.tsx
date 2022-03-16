import { HTMLMotionProps, motion } from 'framer-motion'

type AnimatedEntryProps = {
  children: React.ReactNode
} & HTMLMotionProps<'div'>

export const AnimatedEntry = ({ children, ...props }: AnimatedEntryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', bounce: 0.4 },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
