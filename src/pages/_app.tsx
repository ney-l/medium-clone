import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

import '@/styles/globals.css'
import { Footer, Header, PageLoadingBar } from '@/components/layout'
import { AuthWrapper } from '@/components/auth/AuthWrapper'
import { AuthProvider } from '@/context/authContext'

function MyApp({
  Component,
  pageProps: { session, providers, ...pageProps },
}: AppProps): JSX.Element {
  return (
    <SessionProvider session={session}>
      <PageLoadingBar />
      <AuthProvider>
        <AuthWrapper />
        <Header />
      </AuthProvider>

      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
