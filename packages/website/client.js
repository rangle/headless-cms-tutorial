import createSanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

export const sanityClient = createSanityClient({
  projectId: 'y6b522zz',
  dataset: 'production',
  useCdn: true
})
export const imageBuilder = sanityImage(sanityClient)

export function getSanityClient() {
  return sanityClient
}