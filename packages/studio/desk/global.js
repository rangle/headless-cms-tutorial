import S from '@sanity/desk-tool/structure-builder'

import { Compass, Globe, SquareHalfBottom } from 'phosphor-react'

export const global = S.listItem()
  .title('Global')
  .child(
    S.list()
      .title('Global')
      .items([
        S.listItem()
          .title('Navigation')
          .child(
            S.editor()
              .id('navigation')
              .schemaType('navigation')
              .documentId('navigation')
          )
          .icon(Compass)
      ])
  )
  .icon(Globe)
