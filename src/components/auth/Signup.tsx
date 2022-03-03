import { EmailAuth } from '@/components/auth/EmailAuth'
import { AuthOptions } from '@/components/auth/AuthOptions'
import { DispatchStateAction } from '@/components/auth/auth.types'
import { useContext } from 'react'
import { AuthContext } from '@/context/authContext'

export function Signup({
  showCheckInboxUi,
  showEmailUi,
  setShowEmailUi,
  setShowCheckInboxUi,
}: {
  showCheckInboxUi: boolean
  showEmailUi: boolean
  setShowEmailUi: DispatchStateAction
  setShowCheckInboxUi: DispatchStateAction
}): JSX.Element {
  const { providers, onCloseClick, onShowLoginClick } = useContext(AuthContext)
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
