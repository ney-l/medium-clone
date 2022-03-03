import { useState } from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import { Footer, Header, PageLoadingBar } from '@/components/layout'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { AuthType } from '@/components/auth/auth.types'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): JSX.Element {
  const [authType, setAuthType] = useState<AuthType | null>(null)

  const showLogin = () => setAuthType('login')

  const showSignup = () => setAuthType('register')

  const hide = () => setAuthType(null)

  return (
    <SessionProvider session={session}>
      <PageLoadingBar />

      {authType && (
        <AuthWrapper
          authType={authType}
          onCloseClick={hide}
          onShowLoginClick={showLogin}
          onShowSignupClick={showSignup}
          providers={pageProps.providers}
        />
      )}

      <Header onSignupClick={showSignup} onLoginClick={showLogin} />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
