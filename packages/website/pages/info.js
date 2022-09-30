import React from 'react'
import styled from 'styled-components'

import Layout from '../layout'
import { getStaticPage, queries } from '../data'
import { buildPageProps } from '../utils/buildPage'

const StyledWrapper = styled.div`
  padding-top: 2rem;
`

const Info = ({data}) => {
  const page = buildPageProps(data.page)
  const global = buildPageProps(data.global)

  const { content } = page
  
  return (
    <Layout global={global}>
      <StyledWrapper className="ds-page-wrapper">
        {content}
      </StyledWrapper>
    </Layout>
  )
}

export async function getStaticProps({ preview }) {
  const pageData = await getStaticPage(
    queries.getFormattedTypeQuery(
      'infoPage',
      `{
        "id": _id,
        content[],
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

export default Info