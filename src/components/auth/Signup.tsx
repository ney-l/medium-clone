import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { EmailIcon } from '../icons/EmailIcon'
import { FacebookIcon } from '../icons/FacebookIcon'
import { GoogleIcon } from '../icons/GoogleIcon'
import { Modal } from '../_common/Modal'
import { EmailSignup } from './EmailSignup'

interface Provider {
  id: 'google' | 'facebook' | 'email'
  name: string
}

interface ISignupProps {
  isShow: boolean
  onCloseClick: () => void
  providers: Provider[]
}

const Icons = {
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  email: <EmailIcon />,
}

export function Signup({
  isShow,
  onCloseClick,
  providers,
}: ISignupProps): JSX.Element {
  const [showEmailUi, setShowEmailUi] = useState(false)

  async function handleSignIn(providerId: Provider['id']): Promise<void> {
    if (providerId !== 'email') {
      signIn(providerId)
      return
    }

    setShowEmailUi(true)
  }

  return (
    <Modal isShow={isShow} onCloseClick={onCloseClick}>
      <div className="rounded-md bg-white px-16 py-14 text-center">
        <h1 className="mb-20 font-serif text-4xl font-bold text-black">
          Join Medium.
        </h1>
        <div className="flex flex-col">
          {showEmailUi ? (
            <>
              <EmailSignup />
              <div className="mt-10 flex w-full justify-center">
                <button
                  onClick={() => setShowEmailUi(false)}
                  className="flex justify-center text-center font-bold text-green-600"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="rgb(22 163 74)"
                    className="pt-1"
                  >
                    <path
                      d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
                      fillRule="evenodd"
                    ></path>
                  </svg>{' '}
                  All sign up options
                </button>
              </div>
            </>
          ) : (
            <>
              {Object.values(providers).map((provider) => (
                <button
                  key={provider.id}
                  className="my-2 rounded-full border border-gray-400 px-4 py-3 hover:border-gray-600"
                  onClick={() => handleSignIn(provider.id)}
                >
                  <span className="flex flex-row">
                    <span className="px-2">{Icons[provider.id]}</span>
                    <span className="block">Sign up with {provider.name}</span>
                  </span>
                </button>
              ))}
              <div className="mt-10">
                Already have an account?{' '}
                <button className="font-bold text-green-600">Sign in</button>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}
