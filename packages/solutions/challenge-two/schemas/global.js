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
          .icon(Compass),
        S.divider(),
        S.listItem()
          .title('Footer')
          .child(
            S.editor().id('footer').schemaType('footer').documentId('footer')
          )
          .icon(SquareHalfBottom)
      ])
  )
  .icon(Globe)
