import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '../../theme'
import { BlogCard, BlogCardProps } from './BlogCard'

export type DsBlogCardGridProps = {
  cards: BlogCardProps[]
  frameworkLinkTag?: any
}

const StyledBlogCardGrid = styled.div(() =>
    mq({
      display: 'grid',
      gridTemplateColumns: [
        '1fr',
        '1fr',
        `1fr 1fr`
      ],
      gridTemplateRows: 'auto',
      gap: theme.spacing.small,
      justifyContent: 'center'
    })
)

const StyledBlogCardGridItem = styled.div(() =>
  mq({
    display: 'flex',
  })
)

export const DsBlogCardGrid = ({
  cards,
  frameworkLinkTag
}: DsBlogCardGridProps) => {
  return (
    <div className='ds-blog-card-grid ds-section-spacing'>
      <StyledBlogCardGrid>
        {cards.map((card) => {
          return (
            <StyledBlogCardGridItem
              key={card.blogTitle}
            >
              <BlogCard
                title={card.title}
                frameworkLinkTag={frameworkLinkTag}
                image={card.image}
                slug={`blog/${card.slug}`}
                description={card.description}
              />
            </StyledBlogCardGridItem>
          )
        })}
      </StyledBlogCardGrid>
    </div>
  )
}

export default DsBlogCardGrid
