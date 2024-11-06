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
    title: 'product',
  },
  {
    href: '/tags/dotnet',
    iconType: 'Dotnet',
    slug: 'dotnet',
    title: 'dotnet',
  },
  {
    href: '/tags/javascript',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/tags/typescript',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/tags/nestjs',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS',
  },

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
