import Link from 'next/link'
import Image from 'next/image'

interface IHeaderProps {
  onSignupClick: Function
}

export function Header({ onSignupClick }: IHeaderProps) {
  return (
    <header className="mx-auto flex max-w-7xl justify-between  p-1">
      <div className="flex items-center space-x-5">
        <a href="/">
          <Image
            src="/medium-logo-full.png"
            alt="Medium Logo"
            width={180}
            height={78}
            className="cursor-pointer object-contain"
          />
        </a>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/follow">
            <a className="rounded-full bg-green-600 px-4 py-1 text-white">
              Follow
            </a>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <Link href="/signin">
          <a>Sign In</a>
        </Link>
        <button className="rounded-full border border-green-600 px-4 py-1" onClick={() => onSignupClick()}>
          Get Started
        </button>
      </div>
    </header>
  )
}
