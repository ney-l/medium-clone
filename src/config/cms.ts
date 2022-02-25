import sanityClient from '@sanity/client'

import { config } from '@/config/sanity'

export const cmsClient = sanityClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
})
