import { useState, Dispatch, SetStateAction } from 'react'

import { EmailAuth } from '@/components/auth/EmailAuth'
import { AuthOptions } from '@/components/auth/AuthOptions'
import { Providers } from '@/components/auth/auth.types'

export function Signup({
  showCheckInboxUi,
  providers,
  onCloseClick,
  onShowLoginClick,
  setShowCheckInboxUi,
}: {
  showCheckInboxUi: boolean
  providers: Providers
  onCloseClick: () => void
  onShowLoginClick: () => void
  setShowCheckInboxUi: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
  const [showEmailUi, setShowEmailUi] = useState(false)

  return (
    <>
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
              <button
                onClick={onShowLoginClick}
                className="py-5 font-bold text-green-600"
              >
                Sign in
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
