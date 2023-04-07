import { Dispatch, SetStateAction } from 'react'

export type Provider = {
  id: 'google' | 'facebook' | 'email'
  name: string
}

export type Providers = Provider[]

export type AuthType = 'register' | 'login'

export type DispatchStateAction = Dispatch<SetStateAction<boolean>>
