If you're getting stuck adding a global component, first check out the Navigation component as it is the other global component that currently exists. If you follow these patterns for the Footer, you should be able to get it to work.

Here's some additional tips for this challenge:

You need to add code into the design-system, studio and website folders in order to get a new component to work.

We'd recommend starting by creating a design system component and determine the props it will accept. This will then guide you on how to build out the data model and the name to use for each field (they need to match the prop names).

In order for the global data to be fetched from the CMS, you'll need to add a formatted type query to the exported getStaticPage function from packages/website/data/index.js. Follow the pattern used for the navigation.

Don't forget to export your design system component from packages/design-system/src/index.ts, and be sure to run `yarn run build` after exporting it.

Don't forget to export your new schema from packages/studio/schemas/schema.js.

Don't forget to import your new design system component to packages/website/utils/buildPage.tsx