import React from 'react'
import { getStaticPage, queries } from '../data'
import Layout from '../layout'
import { buildPageProps } from '../utils/buildPage'

const Index = ({data}) => {
  const page = buildPageProps(data.page)
  const global = buildPageProps(data.global)

  const { modules } = page
  
  return (
    <Layout global={global}>
      <div className="ds-page-wrapper">
        { modules }
      </div>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const pageData = await getStaticPage(
    queries.getFormattedTypeQuery(
      'homePage',
      `{
        "id": _id,
        modules[],
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

export default Index;