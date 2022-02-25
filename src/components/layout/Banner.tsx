import Link from 'next/link'

export function Banner() {
  return (
    <div className="flex items-center justify-between border-y border-black bg-blue-200 py-10 lg:py-0">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write, read, and connect
        </h1>
        <h2 className="font-sans">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
        <Link href="signup">
          <a>Start Writing</a>
        </Link>
      </div>
      <img
        className="hidden h-32 pt-3 md:inline-flex md:w-1/3 lg:h-full"
        src="/images/banner.png"
      />
    </div>
  )
}
