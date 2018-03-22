/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
// const users = [
//   {
//     caption: 'User1',
//     image: '/test-site/img/docusaurus.svg',
//     infoLink: 'https://www.facebook.com',
//     pinned: true,
//   },
// ];

const siteConfig = {
  title: 'oclif: The Open CLI Framework',
  tagline: 'Create command line tools your users love',
  url: 'https://oclif.github.io',
  baseUrl: '/',
  organizationName: 'oclif',
  projectName: 'oclif',
  headerLinks: [
    {doc: 'introduction', label: 'Docs'},
    {href: 'https://gitter.im/oclif/oclif', label: 'Discuss'},
    {href: 'https://github.com/oclif/oclif', label: 'Github'},
    // {blog: true, label: 'Blog'},
  ],
  // users,
  /* path to images for header/footer */
  // headerIcon: 'img/oclif.svg',
  footerIcon: 'img/oclif.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#394351',
    secondaryColor: '#205C3B',
  },
  fonts: {
    myFont: [
      "Roboto",
      "sans-serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Salesforce.com',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/oclif/oclif',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
  gaTrackingId: 'UA-39697570-45',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono',
  ],
};

module.exports = siteConfig;