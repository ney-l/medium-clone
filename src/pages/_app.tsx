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

  const showLogin = () => {
    hide()
    setShowLogin(true)
  }

  const showSignup = () => {
    hide()
    setShowSignup(true)
  }

  const hide = () => {
    setShowLogin(false)
    setShowSignup(false)
  }

  return (
    <SessionProvider session={session}>
      <PageLoadingBar />
      {isShowSignup && (
        <Signup
          isShow={isShowSignup}
          onCloseClick={hide}
          onLoginClick={showLogin}
          {...pageProps}
        />
      )}

      {isShowLogin && (
        <Login
          onCloseClick={hide}
          providers={pageProps.providers}
          onShowSignupClick={showSignup}
        />
      )}

      <Header onSignupClick={showSignup} onLoginClick={showLogin} />
      <Component
        {...pageProps}
        isShowSignup={isShowSignup}
        handleShowSignup={setShowLogin}
        handleHideSignup={hide}
      />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
