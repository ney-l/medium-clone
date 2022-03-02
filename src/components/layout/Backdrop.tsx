import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

interface IBackdropProps {
  isShow: Boolean
  children: React.ReactNode
}

export function Backdrop({ isShow, children }: IBackdropProps): JSX.Element {
  const classes = isShow
    ? `bg-white bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0`
    : ``

  const backdrop = {
    hidden: { opacity: 0, backgroundColor: 'transparent' },
    visible: { opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0.95)' },
  }

  useEffect(() => {
    if (!isShow) {
      document.body.classList.remove('overflow-hidden')
    }

    document.body.classList.add('overflow-hidden')
  }, [isShow])

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className={classes}
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
