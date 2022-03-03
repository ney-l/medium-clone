import { useState } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import { Footer, Header, PageLoadingBar } from '@/components/layout'
import { AuthWrapper } from '@/components/auth/AuthWrapper'

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

  const getAuthType = () => {
    if (isShowLogin) return 'login'
    if (isShowSignup) return 'register'
    return undefined
  }

  return (
    <SessionProvider session={session}>
      <PageLoadingBar />

      {getAuthType() && (
        <AuthWrapper
          authType={getAuthType()}
          onCloseClick={hide}
          onShowLoginClick={showLogin}
          onShowSignupClick={showSignup}
          providers={pageProps.providers}
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
