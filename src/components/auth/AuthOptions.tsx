import { signIn } from 'next-auth/react'

import { EmailIcon } from '@/components/icons/EmailIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { GoogleIcon } from '@/components/icons/GoogleIcon'
import { AuthType, Provider } from '@/components/auth/auth.types'

const Icons = {
  google: <GoogleIcon />,
  facebook: <FacebookIcon />,
  email: <EmailIcon />,
}

export function AuthOptions({
  providers,
  authType,
  setShowEmailUi,
}: {
  providers: Provider[]
  authType: AuthType
  setShowEmailUi: (isShow: boolean) => void
}) {
  async function handleSignIn(providerId: Provider['id']): Promise<void> {
    if (providerId !== 'email') {
      signIn(providerId)
      return
    }

    setShowEmailUi(true)
  }
  return (
    <>
      {Object.values(providers)?.map((provider) => (
        <button
          key={provider.id}
          className="my-2 rounded-full border border-gray-400 px-4 py-3 hover:border-gray-600"
          onClick={() => handleSignIn(provider.id)}
        >
          <span className="flex flex-row">
            <span className="px-2">{Icons[provider.id]}</span>
            <span className="block">
              {authType === 'login' ? 'Sign in' : 'Sign up'} with{' '}
              {provider.name}
            </span>
          </span>
        </button>
      ))}
    </>
  )
}
