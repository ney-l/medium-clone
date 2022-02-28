import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'

import { db } from '@/lib/db'

const googleClientId = process.env.GOOGLE_OAUTH_CLIENT_ID
const googleSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
const facebookAppId = process.env.FACEBOOK_APP_ID
const facebookAppSecret = process.env.FACEBOOK_APP_SECRET
const emailServer = process.env.EMAIL_SERVER
const fromEmail = process.env.EMAIL_FROM
const secret = process.env.SIGNING_SECRET

// Because everyone keeps forgetting to inject the env variables 😤
if (
  !googleClientId ||
  !googleSecret ||
  !facebookAppId ||
  !facebookAppSecret ||
  !emailServer ||
  !fromEmail ||
  !secret
) {
  // 🚨 make a noise 🚨
  throw new Error(
    `ATTENTION!! One or more of Auth env variables are not provided!`
  )
}

export default NextAuth({
  adapter: MongoDBAdapter(db),
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleSecret,
    }),
    FacebookProvider({
      clientId: facebookAppId,
      clientSecret: facebookAppSecret,
    }),
    EmailProvider({
      server: emailServer,
      from: fromEmail,
    }),
  ],
  secret,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret,
  },
  pages: {
    signIn: '/',
  },
})
