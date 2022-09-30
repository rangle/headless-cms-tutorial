import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import challengePage from './challenge-page'
import figure from './figure'
import homePage from './home-page'
import infoPage from './info-page'
import link from './link'
import mediaModule from './media-module'
import navigation from './navigation'
import quote from './quote'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    challengePage,
    figure,
    homePage,
    infoPage,
    link,
    mediaModule,
    navigation,
    quote
  ]),
})
