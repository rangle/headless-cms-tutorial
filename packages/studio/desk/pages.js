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
        S.divider(),
        S.documentListItem()
          .icon(Info)
          .id('infoPage')
          .title('Info')
          .schemaType('infoPage'),
        S.divider(),
        S.listItem()
          .title('Challenges')
          .icon(Article)
          .child(S.documentTypeList('challengePage').title('Challenges'))

      ])
  )
