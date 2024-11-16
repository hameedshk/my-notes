// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "Hameed's Personal notes",
  author: 'Hameed Syed',
  name:"Hameed",
  fullName: 'Syed Hameed K',
  headerTitle: "shk's Blog",
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://hameedshk.github.io/my-notes/',
  analyticsURL:
    "https://analytics.us.umami.is/share/LwbQOMMcBOK9zcwU/hameed's%20Blog%20-%hameed's%20Coding%20Adventure",
  siteRepo: 'https://github.com/hameedshk',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/hameed-blog.png',
  email: 'kshameed7@gmail.com',
  github: 'https://github.com/hameedshk',
  facebook: 'https://www.facebook.com/hameed.dev',
  linkedin: 'https://www.linkedin.com/in/syedhameedk',
  twitter: 'https://twitter.com/hameed',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  socialAccounts: {
    github: 'Hameed',
    linkedin: 'Hameed',
    facebook: 'Hameed.dev',
  },
  analytics: {
    umamiWebsiteId: '42b243ca-d23e-427a-b295-2b68e047925',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: "hameedshk/my-notes",
      repositoryId: "R_kgDONK4GnA",
      category: "comments",
      categoryId: "DIC_kwDONK4GnM4CkQXo",
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
