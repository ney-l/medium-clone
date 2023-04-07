import { useContext } from 'react'

import { EmailAuth } from '@/components/auth/EmailAuth'
import { AuthOptions } from '@/components/auth/AuthOptions'
import { AuthContext } from '@/context/authContext'

export function Login() {
  const { providers, onShowSignupClick, showEmailUi } = useContext(AuthContext)

  return (
    <>
      {showEmailUi ? (
        <EmailAuth />
      ) : (
        <>
          <h1 className="mb-20 font-serif text-2xl font-bold text-black">
            Welcome back.
          </h1>
          <div className="flex flex-col">
            {providers && <AuthOptions />}
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
