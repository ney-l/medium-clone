import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

interface IBackdropProps {
  children: React.ReactNode
}

export function Backdrop({ children }: IBackdropProps): JSX.Element {
  const classes = `bg-white bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0`

  const backdrop = {
    hidden: { opacity: 0, backgroundColor: 'transparent' },
    visible: { opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0.95)' },
  }

  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className={classes}
        variants={backdrop}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
