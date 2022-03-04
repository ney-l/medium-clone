import { createContext, useState, useEffect } from 'react'
import { getProviders } from 'next-auth/react'

import {
  AuthType,
  Providers,
  DispatchStateAction,
} from '@/components/auth/auth.types'

interface AuthContextInterface {
  authType: string | null
  providers: Providers
  onShowLoginClick: () => void
  onShowSignupClick: () => void
  onCloseClick: () => void
  showCheckInboxUi: boolean
  setShowCheckInboxUi?: DispatchStateAction
  showEmailUi: boolean
  setShowEmailUi?: DispatchStateAction
}

const initialAuthState = {
  authType: null,
  providers: [],
  onShowLoginClick: () => {},
  onShowSignupClick: () => {},
  onCloseClick: () => {},
  showCheckInboxUi: false,
  showEmailUi: false,
}

export const AuthContext = createContext<AuthContextInterface>(initialAuthState)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authType, setAuthType] = useState<AuthType | null>(null)
  const [providers, setProviders] = useState<Providers>([])
  const [showCheckInboxUi, setShowCheckInboxUi] = useState(false)
  const [showEmailUi, setShowEmailUi] = useState(false)

  const showLogin = () => setAuthType('login')

  const showSignup = () => setAuthType('register')

  const hideAndReset = () => {
    setAuthType(null)
    setShowCheckInboxUi(false)
    setShowEmailUi(false)
  }

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
        onCloseClick: hideAndReset,
        showCheckInboxUi,
        setShowCheckInboxUi,
        showEmailUi,
        setShowEmailUi,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
