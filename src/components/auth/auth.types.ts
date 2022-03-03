export type Provider = {
  id: 'google' | 'facebook' | 'email'
  name: string
}

export type Providers = Provider[]

export type AuthType = 'register' | 'login'
