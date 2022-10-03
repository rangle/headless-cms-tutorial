This is the most difficult challenge, as it requires building multiple design system components along with adding a new page to the site.

When adding a new page, following the Homepage setup (packages/website/pages/index.js) should point you in the right direction. 

You'll also need to create the page data model within a new file called blog-page.js and add it into packages/studio/schemas. You'll also need to add schemas for the new design system components that you're building.

The recommended approach in building this out is to create a BlogCard component and a BlogCardGrid component that is responsible for the desktop vs mobile layout.

One of the biggest tricks in this challenge is that you'll likely need to edit the actual API call to get all of the data that you need from Sanity. This will need to be done within packages/website/pages/blog.js (after you create this file). It is the `getFormattedTypeQuery` that needs editing, both to determine the right page to pull the data from and to ensure all of the components and their data are being returned from the API.