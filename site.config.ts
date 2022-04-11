import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'a38a9988b9bc4d2d952c582b8efb872d',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Nextjs Notion Testing',
  domain: 'nextjsnotion.paulapplegate.com',
  author: 'Paul Applegate',

  // open graph metadata (optional)
  description: 'Follow my daily hijinks here. A lot of science-related stuff, and some serious subjects like cancer. Fuck cancer.',

  // social usernames (optional)
  twitter: 'papplegate',
  github: 'theapplegates',
  linkedin: 'null',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
     {
       title: 'About',
       pageId: 'e738cf827e204fa7b705114ac36d421e'
     },
     {
       title: 'Contact',
       pageId: '757558c71dbc40dbbf9cb3734889bfe8'
     }
   ]
})
