import { useState } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'

import '@/styles/globals.css'
import { Signup } from '@/components/auth/Signup'
import { Footer, Header, PageLoadingBar } from '@/components/layout'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  const [isShowSignup, setShowSignup] = useState(false)

  const handleShowSignup = () => setShowSignup(true)
  return (
    <SessionProvider session={session}>
      <AnimatePresence>
        <PageLoadingBar />
        {isShowSignup && (
          <Signup
            isShow={isShowSignup}
            onCloseClick={() => setShowSignup(false)}
            {...pageProps}
          />
        )}

        <Header onSignupClick={handleShowSignup} />
        <Component
          {...pageProps}
          isShowSignup={isShowSignup}
          handleShowSignup={() => setShowSignup(true)}
          handleHideSignup={() => setShowSignup(false)}
        />
        <Footer />
      </AnimatePresence>
    </SessionProvider>
  )
}

export default MyApp
