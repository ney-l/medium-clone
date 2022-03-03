import { useState } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import { Signup } from '@/components/auth/Signup'
import { Footer, Header, PageLoadingBar } from '@/components/layout'
import { Login } from '@/components/auth/login/Login'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  const [isShowSignup, setShowSignup] = useState(false)
  const [isShowLogin, setShowLogin] = useState(false)

  const handleShowSignup = () => setShowSignup(true)
  return (
    <SessionProvider session={session}>
      <PageLoadingBar />
      {isShowSignup && (
        <Signup
          isShow={isShowSignup}
          onCloseClick={() => setShowSignup(false)}
          {...pageProps}
        />
      )}

      {isShowLogin && (
        <Login
          onCloseClick={() => setShowLogin(false)}
          providers={pageProps.providers}
        />
      )}

      <Header
        onSignupClick={handleShowSignup}
        onLoginClick={() => setShowLogin(true)}
      />
      <Component
        {...pageProps}
        isShowSignup={isShowSignup}
        handleShowSignup={() => setShowSignup(true)}
        handleHideSignup={() => setShowSignup(false)}
      />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
