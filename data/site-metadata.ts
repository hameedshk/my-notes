export const SITE_METADATA = {
  title: `Hameed's dev blog – stories, insights, and ideas`,
  author: 'Hameed Syed K',
  headerTitle: `Hameed's dev blog`,
  description:
    'A personal space on the digital world where I document my programming & Product management journey, sharing lessons, insights, expereince and resources.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.hameedshk.github.io/my-notes',
  siteRepo: 'https://github.com/my-notes/my-notes/',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'kshameed7@gmail.com',
  github: 'https://github.com/hameedshk',
  x: 'https://x.com/kshameed7',
  facebook: 'https://facebook.com/hameed',
  youtube: 'https://www.youtube.com/hameed',
  linkedin: 'https://linkedin.com/in/hameedshk/',
  threads: 'https://www.threads.net/syedhameedk',
  instagram: 'https://www.instagram.com/hmd.exe',
  locale: 'en-US',
  stickyNav: true,
  goodreadsBookshelfUrl: 'https://www.goodreads.com/',
  goodreadsFeedUrl: 'https://www.goodreads.com/',
  imdbRatingsList: 'https://www.imdb.com/',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl: 'https://us.umami.is/websites/42b243ca-d23e-427a-b295-2b68e0479257',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/',
    paypal: 'https://paypal.me/',
    kofi: 'https://ko-fi.com/',
  },
}
