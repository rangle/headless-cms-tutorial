import S from '@sanity/desk-tool/structure-builder'
import {
  Article,
  Browser,
  House,
  Info,
  MessengerLogo,
  Presentation
} from 'phosphor-react'

export const pages = S.listItem()
  .title('Pages')
  .icon(Browser)
  .child(
    S.list()
      .title('Pages')
      .items([
        S.documentListItem()
          .icon(House)
          .id('homePage')
          .title('Home')
          .schemaType('homePage'),
        S.divider()
      ])
  )
