import { motion } from 'framer-motion'

import { Signup } from '@/components/auth/Signup'
import { CloseIcon } from '../icons/CloseIcon'
import { Backdrop } from './Backdrop'

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
}

export function Modal({ isShow, onCloseClick }: IModalProps) {
  return (
    <Backdrop isShow={isShow}>
      <div className="absolute right-8 top-5">
        <button onClick={() => onCloseClick()}>
          <CloseIcon />
        </button>
      </div>
      <motion.div variants={modal}>
        <Signup />
      </motion.div>
    </Backdrop>
  )
}
