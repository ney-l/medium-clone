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
      <motion.div variants={modal}>
        <div className="absolute right-8 top-5">
          <button onClick={() => onCloseClick()}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </motion.div>
    </Backdrop>
  )
}
