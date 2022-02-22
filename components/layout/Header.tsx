import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            src="/medium-logo-full.png"
            alt="Medium Logo"
            width={160}
            height={160}
            className="cursor-pointer object-contain"
          />
        </Link>
      </div>
      <div></div>
    </header>
  )
}
