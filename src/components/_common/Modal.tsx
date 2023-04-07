import { motion } from 'framer-motion'

import { CloseIcon } from '@/components/icons/CloseIcon'
import { Backdrop } from '@/components/layout/Backdrop'
import { useContext } from 'react'
import { AuthContext } from '@/context/authContext'

const modal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
    scale: 1,
  },
  exit: {
    opacity: 0,
  },
}

interface IModalProps {
  children: React.ReactNode
}

export function Modal({ children }: IModalProps): JSX.Element {
  const { onCloseClick } = useContext(AuthContext)

  return (
    <Backdrop>
      <motion.div
        variants={modal}
        className="relative flex h-screen w-screen items-center justify-center bg-white drop-shadow-xl md:m-11 md:h-3/5 md:min-h-[800px] md:w-3/4 md:min-w-[700px] md:max-w-2xl md:p-11"
      >
        <button
          className="absolute  right-5 top-5"
          onClick={() => onCloseClick()}
        >
          <CloseIcon />
        </button>
        {children}
      </motion.div>
    </Backdrop>
  )
}
