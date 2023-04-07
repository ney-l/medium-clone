import { useContext } from 'react'

import { Modal } from '@/components/_common/Modal'
import { Login } from '@/components/auth/login/Login'
import { Signup } from './Signup'
import { AuthContext } from '@/context/authContext'

export function AuthWrapper() {
  const { authType, showCheckInboxUi } = useContext(AuthContext)

  if (authType !== 'login' && authType !== 'register') return null

  return (
    <Modal>
      <div className="relative flex items-center justify-center sm:h-full md:m-10 md:h-fit">
        <div className="max-w-[316px] rounded-md bg-white py-14 text-center">
          {authType === 'login' && <Login />}
          {authType === 'register' && <Signup />}
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
