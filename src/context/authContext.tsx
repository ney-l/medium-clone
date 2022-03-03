import { createContext, useState, useEffect } from 'react'
import { getProviders } from 'next-auth/react'

import { AuthType, Providers } from '@/components/auth/auth.types'

interface AuthContextInterface {
  authType: string | null
  providers: Providers
  onShowLoginClick: () => void
  onShowSignupClick: () => void
  onCloseClick: () => void
}

const initialAuthState = {
  authType: null,
  providers: [],
  onShowLoginClick: () => {},
  onShowSignupClick: () => {},
  onCloseClick: () => {},
}

export const AuthContext = createContext<AuthContextInterface>(initialAuthState)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authType, setAuthType] = useState<AuthType | null>(null)
  const [providers, setProviders] = useState<Providers>([])

  const showLogin = () => setAuthType('login')

  const showSignup = () => setAuthType('register')

  const hide = () => setAuthType(null)

  useEffect(() => {
    const loadProviders = async () => {
      try {
        const providerList = (await getProviders()) as unknown as Providers
        setProviders(providerList)
      } catch (err) {
        console.error(err)
      }
    }

    loadProviders()

    return () => {}
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authType,
        providers,
        onShowLoginClick: showLogin,
        onShowSignupClick: showSignup,
        onCloseClick: hide,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
