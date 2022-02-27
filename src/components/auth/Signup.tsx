import { signIn } from 'next-auth/react'
import { EmailIcon } from '../icons/EmailIcon'
import { FacebookIcon } from '../icons/FacebookIcon'
import { GoogleIcon } from '../icons/GoogleIcon'

const PROVIDER_ID = {
  GOOGLE: 'google',
}

export function Signup() {
  const handleSignIn = () => signIn(PROVIDER_ID.GOOGLE)

  return (
    <div className="rounded-md bg-white px-16 py-14 text-center">
      <h1 className="mb-20 font-serif text-4xl font-bold text-black">
        Join Medium.
      </h1>
      <div className="flex flex-col">
        <button
          className="my-2 rounded-full border border-green-600 px-4 py-3"
          onClick={handleSignIn}
        >
          <span className="flex flex-row">
            <span className="px-2">
              <GoogleIcon />
            </span>
            <span className="block">Sign up with Google</span>
          </span>
        </button>
        <button className="my-2 rounded-full border border-green-600 px-4 py-3">
          <span className="flex flex-row">
            <span className="px-2">
              <FacebookIcon />
            </span>
            <span className="block">Sign up with Facebook</span>
          </span>
        </button>
        <button className="my-2 rounded-full border border-green-600 px-4 py-3">
          <span className="flex flex-row">
            <span className="px-2">
              <EmailIcon />
            </span>
            <span className="block">Sign up with email</span>
          </span>
        </button>

        <div className="mt-10">
          Already have an account?{' '}
          <button className="font-bold text-green-600">Sign in</button>
        </div>
      </div>
    </div>
  )
}
