# Headless CMS Tutorial

Welcome to the Headless CMS tutorial! The goal of this tutorial is to get you familiar with headless architecture and learn how to use a headless content management system (CMS) to build dynamic webpages. We'll be using Next.js in this tutorial to tackle 3 challenges, using Sanity.io as our headless CMS.

There are three separate directories within the `packages` folder that are needed to get this app up and running. They contain the design system, CMS data models, and frontend code respectively. After cloning the repo, navigate into each of these directories and run the following commands from your CLI:

## packages/studio

`yarn install`

`sanity start`

This script will spin up the Sanity.io CMS development environment at localhost:3333. This is where we will create new data models (called schemas in sanity), and add content to display on the frontend.

IMPORTANT: To be able to access the Sanity account, you need to log in using the Rangle account. You can access the credentials [here under Sanity (Headless CMS Tutorial)](https://www.notion.so/rangle/8a9eed3bea974169ba0865384a7032fd?v=5270c6a3eab540d98e7452b24718bb52).

_Note: If this is your first time using Sanity, you will need to install the Sanity CLI. Run `npm install -g @sanity/cli` to install._

## packages/website

`yarn install`

`yarn run dev`

_This script will spin up the Next.js static site generator at localhost:3000. You can see your development changed reflected in this environment._

After you have all three of the environments running, you're ready to go! You'll see further instructions at localhost:3000

## packages/design-system

`yarn install`

`yarn storybook`

_This script will spin up the design system's Storybook development environment at localhost:6006. Here, you can see the reusable components that can be rendered in our frontend._

`yarn run build`

_This script will compile and build the design system from what is exported in `design-system/src/index.ts`. The output of this build can be found at design-system/dist, which is used by Next.js to serve the live site with up-to-date changes. Whenever you add a new component to the design system you must run this command for it to be available to the frontend._

## Instructions & Help

The majority of the instructions for the challenges and information about the architecture can be found in your local environment once you have the project up and running. There are also two folders to help you out along the way:

`packages/hints` - Helpful tips and clues if you get stuck on any of the challenges
`packages/solutions` - Our recommended solution to each challenge. You can compare your answers to these once you're finished!
