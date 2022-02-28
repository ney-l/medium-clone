import { signIn } from 'next-auth/react'

export function EmailSignup() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    signIn('email', { email: e.target.email.value })
  }
  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="text" name="email" id="email" /> */}
      <input
        type="email"
        name="email"
        className="mt-1 mb-6 block w-full border-0 border-b-[0.5px] border-gray-900 bg-white px-3 py-2 text-center placeholder-gray-500 focus:outline-none focus:ring-1  sm:text-sm"
        placeholder="email@example.com"
      />

      <button
        className="my-2 block w-full rounded-full border bg-black py-2 text-center  text-sm  font-normal text-white"
        type="submit"
      >
        Continue
      </button>
    </form>
  )
}
