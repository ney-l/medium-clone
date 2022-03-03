import { useState } from 'react'

import { Modal } from '@/components/_common/Modal'
import { AuthType } from '@/components/auth/auth.types'
import { Login } from '@/components/auth/login/Login'
import { Providers } from '@/components/auth/auth.types'
import { Signup } from './Signup'

export function AuthWrapper({
  authType,
  providers,
  onCloseClick,
  onShowLoginClick,
  onShowSignupClick,
}: {
  authType?: AuthType
  providers: Providers
  onCloseClick: () => void
  onShowLoginClick: () => void
  onShowSignupClick: () => void
}) {
  const [showCheckInboxUi, setShowCheckInboxUi] = useState(false)
  const [showEmailUi, setShowEmailUi] = useState(false)

  if (authType !== 'login' && authType !== 'register') return null

  return (
    <Modal onCloseClick={onCloseClick}>
      <div className="relative flex items-center justify-center sm:h-full md:m-10 md:h-fit">
        <div className="max-w-[316px] rounded-md bg-white py-14 text-center">
          {authType === 'login' && (
            <Login
              onCloseClick={onCloseClick}
              providers={providers}
              onShowSignupClick={onShowSignupClick}
              showCheckInboxUi={showCheckInboxUi}
              setShowCheckInboxUi={setShowCheckInboxUi}
              showEmailUi={showEmailUi}
              setShowEmailUi={setShowEmailUi}
            />
          )}
          {authType === 'register' && (
            <Signup
              onCloseClick={onCloseClick}
              providers={providers}
              onShowLoginClick={onShowLoginClick}
              showCheckInboxUi={showCheckInboxUi}
              setShowCheckInboxUi={setShowCheckInboxUi}
              showEmailUi={showEmailUi}
              setShowEmailUi={setShowEmailUi}
            />
          )}
        </div>
      </div>

      <div
        className="absolute bottom-0"
        style={{
          display: !showCheckInboxUi ? 'none' : 'block',
        }}
      >
        <img src="/images/open-up-ideas.png" />
      </div>
    </Modal>
  )
}
