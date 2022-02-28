import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

const googleClientId = process.env.GOOGLE_OAUTH_CLIENT_ID
const googleSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET
const facebookAppId = process.env.FACEBOOK_APP_ID
const facebookAppSecret = process.env.FACEBOOK_APP_SECRET
const secret = process.env.SIGNING_SECRET

// Because everyone keeps forgetting to inject the env variables 😤
if (
  !googleClientId ||
  !googleSecret ||
  !facebookAppId ||
  !facebookAppSecret ||
  !secret
) {
  // 🚨 make a noise 🚨
  throw new Error(
    `ATTENTION!! One or more of Auth env variables are not provided!`
  )
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleSecret,
    }),
    FacebookProvider({
      clientId: facebookAppId,
      clientSecret: facebookAppSecret,
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
