import { EmailAuth } from '@/components/auth/EmailAuth'
import { AuthOptions } from '@/components/auth/AuthOptions'
import { useContext } from 'react'
import { AuthContext } from '@/context/authContext'

export function Signup(): JSX.Element {
  const { providers, onShowLoginClick, showEmailUi } = useContext(AuthContext)

  return (
    <>
      {showEmailUi ? (
        <EmailAuth />
      ) : (
        <>
          <h1 className="mb-20 font-serif text-2xl font-bold text-black">
            Join Medium.
          </h1>
          <div className="flex flex-col">
            {providers && <AuthOptions />}
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
