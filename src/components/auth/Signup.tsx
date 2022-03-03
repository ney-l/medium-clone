import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { EmailIcon } from '@/components/icons/EmailIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { Modal } from '@/components/_common/Modal'
import { EmailAuth } from './EmailAuth'
import { AuthOptions } from './AuthOptions'

interface Provider {
  id: 'google' | 'facebook' | 'email'
  name: string
}

interface ISignupProps {
  onCloseClick: () => void
  providers: Provider[]
}

const Icons = {
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  email: <EmailIcon />,
}

export function Signup({ onCloseClick, providers }: ISignupProps): JSX.Element {
  const [showEmailUi, setShowEmailUi] = useState(false)
  const [showCheckInboxUi, setShowCheckInboxUi] = useState(false)

  return (
    <Modal onCloseClick={onCloseClick}>
      <div className="relative flex items-center justify-center sm:h-full md:m-10 md:h-fit">
        <div className="max-w-[316px] rounded-md bg-white py-14 text-center">
          {showEmailUi ? (
            <EmailAuth
              onCloseClick={onCloseClick}
              askToCheckEmail={showCheckInboxUi}
              setShowCheckInboxUi={setShowCheckInboxUi}
              setShowEmailUi={setShowEmailUi}
            />
          ) : (
            <>
              <h1 className="mb-20 font-serif text-2xl font-bold text-black">
                Join Medium.
              </h1>
              <div className="flex flex-col">
                {providers && (
                  <AuthOptions
                    providers={providers}
                    authType="register"
                    setShowEmailUi={setShowEmailUi}
                  />
                )}
                <div className="mt-10">
                  Already have an account?{' '}
                  <button className="font-bold text-green-600">Sign in</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="absolute bottom-0"
        style={{ opacity: showCheckInboxUi ? 1 : 0 }}
      >
        <img src="/images/open-up-ideas.png" />
      </div>
    </Modal>
  )
}
