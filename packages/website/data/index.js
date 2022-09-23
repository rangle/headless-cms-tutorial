import { getSanityClient } from '../client'
import * as queries from './queries'

const isProduction =
  process.env.NODE_ENV === 'production' && process.env.BUILD_ENV !== 'draft'

// const { getFormattedTypeQuery } = queries
// 
// Fetch a static page with our global data
export async function getStaticPage(pageData) {
  const query = `
  {
    "page": ${pageData},
  }
  `

  const data = await getSanityClient().fetch(query)

  return data
}

// Fetch all dynamic docs
export async function getAllDocSlugs(doc) {
  const data = await getSanityClient().fetch(
    `*[_type == "${doc}" && wasDeleted != true ${
      isProduction ? '&& isDraft != true' : ''
    }]{ "slug": slug }`
  )
  return data
}

export { queries }
