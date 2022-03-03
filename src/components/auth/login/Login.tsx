import { EmailAuth } from '@/components/auth/EmailAuth'
import { Providers, DispatchStateAction } from '@/components/auth/auth.types'
import { AuthOptions } from '@/components/auth/AuthOptions'

interface ISignupProps {
  onCloseClick: () => void
  providers: Providers
  onShowSignupClick: () => void
  showCheckInboxUi: boolean
  setShowCheckInboxUi: DispatchStateAction
  showEmailUi: boolean
  setShowEmailUi: DispatchStateAction
}

export function Login({
  showCheckInboxUi,
  onCloseClick,
  providers,
  showEmailUi,
  setShowEmailUi,
  onShowSignupClick,
  setShowCheckInboxUi,
}: ISignupProps): JSX.Element {
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
