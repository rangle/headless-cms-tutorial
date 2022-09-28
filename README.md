# Headless CMS Tutorial
The goal of this tutorial is to get you familiar with headless architecture and learn how to use a headless content management system (CMS) to build dynamic webpages. We'll be using Next.js in this tutorial to make a simple blog landing page, using Sanity.io as our headless CMS.

There are three separate directories within the `packages` folder that contain the design system, CMS code, and frontend respectively. After cloning the repo, navigate into each of these directories and run the following commands from your CLI:

## packages/design-system

`yarn install`

`yarn run dev`
*This script will spin up the design system's Storybook development environment at localhost:6006. Here, you can see the reusable components that can be rendered in our frontend.*

`yarn run build`
*This script will compile and build the design system from what is exported in `design-system/src/index.ts`. The output of this build can be found at design-system/dist. This output is used by NextJs to serve the live site with up-to-date changes.*

## packages/website

`yarn install`

`yarn run dev`
*This script will spin up the Next.js static site generator  at localhost:3000. You can see your development changed reflected in this environment.*

## packages/studio

`yarn install`

`sanity start`
*This script will spin up the Sanity.io CMS development environment at localhost:3333. This is where we will create new data models (called schemas in sanity), and add content to display on the frontend.*