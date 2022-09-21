import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'y6b522zz',
  dataset: 'production',
  useCdn: true
})