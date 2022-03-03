import { useState } from 'react'

import { Modal } from '@/components/_common/Modal'
import { AuthType } from '@/components/auth/auth.types'
import { Login } from '@/components/auth/login/Login'
import { Providers } from '@/components/auth/auth.types'
import { Signup } from './Signup'

export function AuthWrapper({
  onCloseClick,
  authType,
  providers,
  onShowSignupClick,
  onLoginClick,
}: {
  onCloseClick: () => void
  authType?: AuthType
  providers: Providers
  onShowSignupClick: () => void
  onLoginClick: () => void
}) {
  const [showCheckInboxUi, setShowCheckInboxUi] = useState(false)

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
            />
          )}
          {authType === 'register' && (
            <Signup
              onCloseClick={onCloseClick}
              providers={providers}
              onLoginClick={onLoginClick}
              showCheckInboxUi={showCheckInboxUi}
              setShowCheckInboxUi={setShowCheckInboxUi}
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
