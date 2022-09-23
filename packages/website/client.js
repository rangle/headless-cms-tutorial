import createSanityClient from '@sanity/client'

export const sanityClient = createSanityClient({
  projectId: 'y6b522zz',
  dataset: 'production',
  useCdn: true
})

export function getSanityClient() {
  return sanityClient
}