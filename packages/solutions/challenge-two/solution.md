This folder contains files that have our solution to this challenge.

Within the cms folder there is footer.js, which shows the schema that would be needed for the CMS. In addition, there's an example of global.js within the desk structure, as that would need to be edited in order to see the global footer component in the Sanity UI.

The Footer folder contains an example design system component that this schema would connect to.

For the website, the query to the CMS API needs to be changed to also fetch the footer information. To do this, the  getStaticPage function within packages/website/data/index.js needs to be edited. Within the "global" object, footer needs to be added with the associated formatted type query:

```
export async function getStaticPage(pageData) {
  const query = `
  {
    "page": ${pageData},
    "global": {
      "navigation": ${getFormattedTypeQuery('navigation')},
      "footer": ${getFormattedTypeQuery('footer')},
    }
  }
  `

  const data = await getSanityClient().fetch(query)

  return data
}
```

This query will then have the footer data available within the `global` object. The final piece is to then render this footer within layout.js

Don't forget to export & import all required components and schemas! 