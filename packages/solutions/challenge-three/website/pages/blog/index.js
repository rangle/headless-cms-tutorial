import React from 'react'

import Layout from '../layout'
import { getStaticPage, queries } from '../data'
import { buildPageProps } from '../utils/buildPage'

const Blog = ({ data }) => {
  const page = buildPageProps(data.page)
  const global = buildPageProps(data.global)

  const { content } = page

  return (
    <Layout global={global}>
      <div className='ds-page-wrapper'>
        {content}
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const pageData = await getStaticPage(
    queries.getFormattedTypeQuery(
      'blogPage',
      `{
        "id": _id,
        modules[] {
          ...,
          cards[]->
        },
        title,
      }`
    )
  )

  return {
    props: {
      data: pageData,

      isPreviewMode: preview || false
    }
  }
}

export default Blog
