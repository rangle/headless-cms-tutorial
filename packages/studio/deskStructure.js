import S from '@sanity/desk-tool/structure-builder'
import { pages } from './desk/pages';

export default () =>
  S.list()
    .title('Content')
    .items([
      pages,
      S.divider()
    ])