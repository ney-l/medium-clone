import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import { Avatar } from '../_common/Avatar'
import { useContext } from 'react'
import { AuthContext } from '@/context/authContext'

export function Header(): JSX.Element {
  const { data: session, status } = useSession()
  const isAuthenticated = status === 'authenticated'
  const { onShowSignupClick, onShowLoginClick } = useContext(AuthContext)

  return (
    <header className=" bg-blue-200 p-1">
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="flex items-center space-x-5">
          <Link href="/">
            <a>
              <Image
                src="/medium-logo-full.png"
                alt="Medium Logo"
                width={180}
                height={78}
                className="cursor-pointer object-contain"
              />
            </a>
          </Link>
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
          {!isAuthenticated && (
            <>
              <button
                className="b-0  text-black"
                onClick={() => onShowLoginClick()}
              >
                Sign In
              </button>
              <button
                className="rounded-full border bg-black px-4 py-2 text-white"
                onClick={() => onShowSignupClick()}
              >
                Get Started
              </button>
            </>
          )}

          {session?.user ? (
            <>
              <Avatar
                user={{
                  image: session.user?.image,
                  name: session.user?.name || '',
                }}
              />
              <button
                className="rounded-full border  px-4 py-1"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </header>
  )
}
