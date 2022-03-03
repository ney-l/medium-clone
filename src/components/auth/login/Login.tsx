import { useState } from 'react'

import { Modal } from '@/components/_common/Modal'
import { EmailAuth } from '@/components/auth/EmailAuth'
import { Providers } from '@/components/auth/auth.types'
import { AuthOptions } from '@/components/auth/AuthOptions'

interface ISignupProps {
  onCloseClick: () => void
  providers: Providers
}

export function Login({ onCloseClick, providers }: ISignupProps): JSX.Element {
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
                Welcome back.
              </h1>
              <div className="flex flex-col">
                {providers && (
                  <AuthOptions
                    providers={providers}
                    setShowEmailUi={setShowEmailUi}
                    authType="login"
                  />
                )}
                <div className="mt-10">
                  No account?{' '}
                  <button className="font-bold text-green-600">
                    Create one
                  </button>
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
