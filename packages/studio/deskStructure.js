import S from '@sanity/desk-tool/structure-builder'
import { pages } from './desk/pages';
import { global } from './desk/global';

export default () =>
  S.list()
    .title('Content')
    .items([
      pages,
      S.divider(),
      global,
      S.divider()
    ])