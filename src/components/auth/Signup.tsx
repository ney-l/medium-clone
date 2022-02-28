import { signIn } from 'next-auth/react'
import { EmailIcon } from '../icons/EmailIcon'
import { FacebookIcon } from '../icons/FacebookIcon'
import { GoogleIcon } from '../icons/GoogleIcon'
import { Modal } from '../_common/Modal'

const PROVIDER_ID = {
  GOOGLE: 'google',
}

interface ISignupProps {
  isShow: boolean
  onCloseClick: Function
}

const Icons = {
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  email: <EmailIcon />,
}

export function Signup({ isShow, onCloseClick }: ISignupProps) {
  const handleSignIn = () => signIn(PROVIDER_ID.GOOGLE)

  return (
    <Modal isShow={isShow} onCloseClick={onCloseClick}>
      <div className="rounded-md bg-white px-16 py-14 text-center">
        <h1 className="mb-20 font-serif text-4xl font-bold text-black">
          Join Medium.
        </h1>
        <div className="flex flex-col">
          <button
            className="my-2 rounded-full border border-green-600 px-4 py-3"
            onClick={handleSignIn}
          >
            <span className="flex flex-row">
              <span className="px-2">{Icons['google']}</span>
              <span className="block">Sign up with Google</span>
            </span>
          </button>
          <button className="my-2 rounded-full border border-green-600 px-4 py-3">
            <span className="flex flex-row">
              <span className="px-2">{Icons['facebook']}</span>
              <span className="block">Sign up with Facebook</span>
            </span>
          </button>
          <button className="my-2 rounded-full border border-green-600 px-4 py-3">
            <span className="flex flex-row">
              <span className="px-2">{Icons['email']}</span>
              <span className="block">Sign up with email</span>
            </span>
          </button>

          <div className="mt-10">
            Already have an account?{' '}
            <button className="font-bold text-green-600">Sign in</button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
