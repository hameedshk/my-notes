import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Weaverse Hydrogen Customizer',
    description: `The first Hydrogen-driven website builder powered by AI. Weaverse is a Shopify sales channel that allows you to create a website in minutes with no coding required.`,
    imgSrc: '/static/images/weaverse-logo.png',
    url: 'https://www.airbus.com',
    builtWith: ['Shopify', 'Remix', 'TailwindCSS', 'Prisma', 'OpenAI'],
    links: [
      { title: 'Website', url: 'https://www.airbus.com' },
      { title: 'GitHub Org', url: 'https://github.com/weaverse' },
    ],
  },
  {
    type: 'work',
    title: 'Weaverse SDKs',
    description:
      'Open-source toolkits for seamless integration and development of Shopify Hydrogen themes and headless commerce solutions.',
    imgSrc: '/static/images/weaverse-logo.png',
    repo: 'weaverse/weaverse',
    builtWith: ['Turborepo', 'Hydrogen', 'React', 'Typescript'],
  },
  {
    type: 'work',
    title: 'Pilot - Shopify Hydrogen theme',
    description:
      'The first Hydrogen-driven theme for Shopify. Pilot is a Shopify theme that allows you to build a lightning-fast storefront with all the benefits of Hydrogen.',
    imgSrc: '/static/images/theme-100.png',
    repo: 'weaverse/pilot',
    url: 'https://airbus.com/',
    builtWith: ['Hydrogen', 'Remix', 'TailwindCSS', 'HeadlessUI'],
  },
  {
    type: 'work',
    title: 'Minimog - Next-gen Shopify theme',
    description: `The Next Generation of highest-converting and extensible Shopify theme (Weekly bestseller & Top trending in Themeforest eCommerce category).`,
    imgSrc: '/static/images/brush-96.png',
    url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968?ref=kshameed7.dev',
    builtWith: ['ThemeKit', 'Liquid', 'Webpack', 'TailwindCSS'],
    links: [
      { title: 'Demo site', url: 'https://demo.minimog.co' },
      {
        title: 'Envato item',
        url: 'https://themeforest.net/item/minimog-the-high-converting-shopify-theme/33380968',
      },
    ],
  },
  {
    type: 'work',
    title: 'FoxKit AIO Upsell Cross‑sell',
    description: `The upsells and boost conversion tools that is built to support Minimog theme.`,
    imgSrc: '/static/images/sale-price-tag-96.png',
    url: 'https://apps.shopify.com/foxkit?ref=kshameed7.dev',
    builtWith: ['KoaJS', 'JWT', 'MongoDB', 'Polaris'],
    links: [
      { title: 'App store', url: 'https://apps.shopify.com/foxkit' },
      {
        title: 'Product site',
        url: 'https://foxecom.com/products/foxkit-shopify-app',
      },
    ],
  },
  {
    type: 'self',
    title: 'kshameed7.dev',
    imgSrc: '/static/images/writer-96.png',
    repo: 'hta218/kshameed7.dev',
    builtWith: ['NextJS', 'TailwindCSS', 'Typescript', 'Drizzle', 'Umami'],
  },
  {
    type: 'self',
    title: 'Shopify theme starter',
    imgSrc: '/static/images/liquid-96.png',
    repo: 'hta218/shopify-theme-starter',
    builtWith: ['ThemeKit', 'Liquid', 'Webpack', 'TailwindCSS'],
  },
  {
    type: 'self',
    title: 'Exercism solutions',
    imgSrc: '/static/images/average-math-96.png',
    repo: 'hta218/exercism-solutions',
    builtWith: ['Exercism', 'Javascript', 'Bash'],
  },
  {
    type: 'self',
    title: 'Animate loading bar',
    imgSrc: '/static/images/spinner-96.png',
    repo: 'hta218/animate-loading-bar',
    builtWith: ['Javascript', 'CSS'],
  },
  {
    type: 'self',
    title: 'Shopify KoaJS React boilerplate',
    imgSrc: '/static/images/js-96.png',
    repo: 'hta218/shopify-koajs-react-boilerplate',
    builtWith: ['KoaJS', 'JWT', 'MongoDB', 'Polaris'],
  },
  {
    type: 'self',
    title: 'Travel Egypt Picture Puzzle',
    imgSrc: '/static/images/tetris-game-console-100.png',
    repo: 'hta218/Travel_Egypt',
    builtWith: ['Python', 'Pygame'],
  },
  {
    type: 'self',
    title: 'Infinite Loading Gallery',
    imgSrc: '/static/images/image-gallery-96.png',
    repo: 'hta218/infinite-gallery',
    builtWith: ['React', 'SemanticUI', 'Picsum'],
  },
  {
    type: 'self',
    title: 'Store Manager',
    imgSrc: '/static/images/shop-96.png',
    repo: 'hta218/StoreManager',
    builtWith: ['Java', 'MySQL'],
  },
  {
    type: 'self',
    title: 'Tiny retry',
    imgSrc: '/static/images/retry-96.png',
    repo: 'hta218/tiny-retry',
    builtWith: ['Javascript', 'Node'],
  },
]