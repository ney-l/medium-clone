import { motion } from 'framer-motion'

import { CloseIcon } from '@/components/icons/CloseIcon'
import { Backdrop } from '@/components/layout/Backdrop'

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
  isShow: Boolean
  onCloseClick: Function
  children: JSX.Element | [JSX.Element]
}

export function Modal({ isShow, onCloseClick, children }: IModalProps) {
  return (
    <Backdrop isShow={isShow}>
      <motion.div
        variants={modal}
        className="relative flex h-full w-full items-center justify-center bg-white drop-shadow-xl md:m-11 md:h-fit md:w-3/4 md:max-w-2xl md:p-11"
      >
        <button
          className="absolute  right-5 top-5"
          onClick={() => onCloseClick()}
        >
          <CloseIcon />
        </button>
        <div className="relative flex items-center justify-center sm:h-full md:m-10 md:h-fit">
          {children}
        </div>
      </motion.div>
    </Backdrop>
  )
}
