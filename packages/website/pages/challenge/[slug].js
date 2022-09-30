import React from 'react'
import styled from 'styled-components'

import Layout from '../../layout'
import { getAllDocSlugs, getStaticPage, queries } from '../../data'
import { buildPageProps } from '../../utils/buildPage'

const StyledWrapper = styled.div`
  padding-top: 2rem;
`

const Index = ({data}) => {
  const page = buildPageProps(data.page)
  const global = buildPageProps(data.global)

  const { content } = page
  
  return (
    <Layout global={global}>
      <StyledWrapper className="ds-page-wrapper">
        { content }
      </StyledWrapper>
    </Layout>
  )
}

export async function getStaticProps({ params, preview }) {
  const pageData = await getStaticPage(
    queries.getFormattedTypeQuery(
      'challengePage',
      `{
        "id": _id,
        content[],
        title,
      }`,
      `slug == "${params.slug}"`
    )
  )

  return {
    props: {
      data: pageData,
      isPreviewMode: preview || false
    }
  }
}

export async function getStaticPaths() {
  const allPages = await getAllDocSlugs('challengePage')
  return {
    paths:
      allPages?.map((page) => {
        const slug = page.slug.split('/').filter(Boolean)[0]
        return {
          params: {
            slug: slug
          }
        }
      }) || [],
    fallback: false
  }
}

export default Index;