import { useState } from 'react'
import { signIn } from 'next-auth/react'

export function EmailSignup({
  askToCheckEmail,
  setShowCheckInboxUi,
  onCloseClick,
  setShowEmailUi,
}: {
  askToCheckEmail: boolean
  setShowCheckInboxUi: (show: boolean) => void
  onCloseClick: () => void
  setShowEmailUi: (show: boolean) => void
}): JSX.Element {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const email = e.currentTarget.email.value

    setIsLoading(true)

    const { ok, error } = (await signIn('email', {
      email,
      redirect: false,
    })) as unknown as { ok: string; error: string }

    setIsLoading(false)

    if (ok) {
      setShowCheckInboxUi(true)
      setEmail(email)
    }

    console.log(error)
  }

  if (!askToCheckEmail) {
    return (
      <>
        <h1 className="mb-8 font-serif text-2xl font-bold text-black">
          Sign up with email
        </h1>
        <h2 className="mb-16">
          Enter your email address to create an account.
        </h2>
        <div className="flex flex-col">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="mt-1 mb-6 block w-full border-0 border-b-[0.5px] border-gray-900 bg-white px-3 py-2 text-center placeholder-gray-500 focus:outline-none focus:ring-1  sm:text-sm"
              placeholder="email@example.com"
              required
            />

            <button
              className="my-2 block w-full rounded-full border bg-black py-3 text-center  text-sm  font-normal text-white disabled:bg-gray-600"
              type="submit"
              disabled={isLoading}
            >
              Continue
            </button>
          </form>
        </div>
        <div className="mt-10 flex w-full justify-center">
          <button
            onClick={() => setShowEmailUi(false)}
            className="flex justify-center text-center font-bold text-green-600"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="rgb(22 163 74)"
              className="pt-1"
            >
              <path
                d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
                fillRule="evenodd"
              ></path>
            </svg>{' '}
            All sign up options
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <h1 className="p-b-20 pb-6 font-serif text-2xl font-bold text-black">
        Check your inbox
      </h1>
      <h2 className="mb-16">
        Click the link we sent to {email} to complete your account set-up.
      </h2>

      <button
        className="my-2 rounded-full border border-gray-400 bg-black px-4 py-3 text-white hover:border-gray-600"
        onClick={() => onCloseClick()}
      >
        Ok
      </button>
    </>
  )
}
