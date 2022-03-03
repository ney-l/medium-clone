import { useContext } from 'react'

import { EmailAuth } from '@/components/auth/EmailAuth'
import { DispatchStateAction } from '@/components/auth/auth.types'
import { AuthOptions } from '@/components/auth/AuthOptions'
import { AuthContext } from '@/context/authContext'

interface ISignupProps {
  showCheckInboxUi: boolean
  setShowCheckInboxUi: DispatchStateAction
  showEmailUi: boolean
  setShowEmailUi: DispatchStateAction
}

export function Login({
  showCheckInboxUi,
  showEmailUi,
  setShowEmailUi,
  setShowCheckInboxUi,
}: ISignupProps): JSX.Element {
  const { providers, onCloseClick, onShowSignupClick } = useContext(AuthContext)
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
              <button
                onClick={onShowSignupClick}
                className="font-bold text-green-600"
              >
                Create one
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
