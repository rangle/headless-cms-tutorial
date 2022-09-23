const isProduction =
  process.env.NODE_ENV === 'production' && process.env.BUILD_ENV !== 'draft'

export const getFormattedTypeQuery = (
  type,
  projections = '',
  additionalFilters,
  returnAll = false
) =>
  `*[_type == "${type}"
${isProduction ? ` && !(_id in path('drafts.**'))` : ''}${
    additionalFilters ? ` && ${additionalFilters}` : ''
  }] | order(_updatedAt desc)[${returnAll ? '' : '0'}]${projections}`

export const getRefQuery = (refId) => `
coalesce(
  ${isProduction ? '' : `*[_id == "drafts." + ${refId}][0],`}
  *[_id == ${refId}][0]
)
`
