import { BrandIconType } from '@/components/BrandIcon';

type PopularTag = {
  href: string;
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const popularTags: PopularTag[] = [
  {
    href: '/tags/product',
    iconType: 'Product',
    slug: 'product',
    title: 'Product',
  },
  {
    href: '/tags/dotnet',
    iconType: 'Dotnet',
    slug: 'dotnet',
    title: 'Dotnet',
  },
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/tags/angular',
    iconType: 'Angular',
    slug: 'angular',
    title: 'Angular',
  },
  // {
  //   href: '/tags/nestjs',
  //   iconType: 'NestJS',
  //   slug: 'nestjs',
  //   title: 'NestJS',
  // },

  {
    href: '/tags/database',
    iconType: 'Mongodb',
    slug: 'database',
    title: 'Database',
  },
  {
    href: '/tags/devops',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
];

export default popularTags;
