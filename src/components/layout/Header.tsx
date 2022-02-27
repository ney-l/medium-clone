import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Avatar } from '../_common/Avatar'

interface IHeaderProps {
  onSignupClick: Function
}

export function Header({ onSignupClick }: IHeaderProps) {
  const { data: session } = useSession()

  return (
    <header className=" bg-blue-200 p-1">
      <div className="mx-auto flex max-w-7xl justify-between">
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
        <div className="flex items-center space-x-5">
          {!session && (
            <>
              <Link href="/signin">
                <a className="text-green-600">Sign In</a>
              </Link>
              <button
                className="rounded-full border border-green-600 px-4 py-1 text-green-600"
                onClick={() => onSignupClick()}
              >
                Get Started
              </button>
            </>
          )}

          {session?.user ? (
            <Avatar
              user={{ image: session.user?.image, name: session.user?.name }}
            />
          ) : null}
        </div>
      </div>
    </header>
  )
}
