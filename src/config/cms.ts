import sanityClient from '@sanity/client'
import { createClient, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  apiVersion: '2021-08-11', // or today's date for latest
  useCdn: process.env.NODE_ENV === 'production',
}

/**
 * This CMS client has API token configured
 * Should be used on the backend while creating a resources for example.
 */
export const cmsClient = sanityClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
})

/**
 * This CMS client does not have a token configured
 * Should be used to fetch data on the server, for eg. in getStaticProps
 */
export const nextCmsClient = createClient(config)

interface ISource {
  _type: string
  asset: {
    _ref: string
    _type: string
  }
}
/**
 * Set up a helper function for generating Image URLs
 * with only the asset reference data in the document
 */
export const urlFor = (source: ISource) =>
  createImageUrlBuilder(config).image(source).url()

/**
 * Helper function for using the current logged in user account
 */
export const userCurrentUser = createCurrentUserHook(config)
