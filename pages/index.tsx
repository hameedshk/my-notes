import { InferGetStaticPropsType } from 'next';
import Snowfall from 'react-snowfall';
import { formatDate } from 'pliny/utils/formatDate';
// import { NewsletterForm } from 'pliny/ui/NewsletterForm';
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';
import Tag from '@/components/Tag';
import Link from '@/components/Link';
import Twemoji from '@/components/Twemoji';
import { PageSEO } from '@/components/SEO';
import Image from '@/components/Image';
import Greeting from '@/components/homepage/Greeting';
import Heading from '@/components/homepage/Heading';
import TypedBios from '@/components/homepage/TypedBios';
import ShortDescription from '@/components/homepage/ShortDescription';
import BlogLinks from '@/components/homepage/BlogLinks';
import SpotifyNowPlaying from '@/components/homepage/SpotifyNowPlaying';
import PopularTags from '@/components/homepage/PopularTags';
import Avatar from '@/components/homepage/Avatar';

const MAX_DISPLAY = 3;

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[];
  const posts = allCoreContent(sortedPosts);
  console.log('INIT_CWD:', process.env.INIT_CWD);
  return { props: { posts } };
};

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { headerTitle, title, description } = siteMetadata;

  return (
    <div className="relative">
      <PageSEO title={`${headerTitle} - ${title}`} description={description} />

      {/* Introduce myself */}
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        {/* <Greeting /> */}
        {/* <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row"> */}
        {/* <Avatar /> */}
        {/* <div className="max-h-[430px] overflow-hidden rounded-md">
            <Image src={'/static/images/avatar.jpg'} alt="avatar" width={430} height={350} />
          </div> */}
        <div className="text-md my-auto flex flex-col leading-6">
          <Heading />
          {/* <TypedBios /> */}
          <ShortDescription />
          {/* <BlogLinks /> */}
          {/* <SpotifyNowPlaying /> */}
          {/* <p className="flex">
              <span className="mr-2">Happy reading</span>
              <Twemoji emoji="clinking-beer-mugs" />
            </p> */}
        </div>
        {/* </div> */}
      </div>
      {/* <PopularTags /> */}
      {/* List all post */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 py-6 md:space-y-5">
          <h2 className="!mt-0 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
            Recent Posts
          </h2>
          {/* <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">{siteMetadata.description}</p> */}
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, images, summary, tags } = post;
            return (
              <li key={slug} className="py-6">
                <article className="flex flex-col gap-6 xl:flex-row">
                  {/* <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"> */}
                  {/**/}
                  {/* <div className="space-y-5 xl:col-span-3"> */}
                  <div className="flex flex-1 flex-col justify-between space-y-4">
                    <h2 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 md:text-2xl">
                      <Link href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                        <Image
                          src={images[0]} // Render the post image
                          alt={title} // Use meaningful alt text
                          width={400} // Adjust width based on your design
                          height={300} // Adjust height based on your design
                          className="aspect-[4/3] rounded-lg object-cover" // Maintains 4:3 aspect ratio
                          onError={(e) => {
                            e.currentTarget.src = '/static/images/fallback-image.webp'; // Fallback image
                          }}
                        />
                      </Link>
                    </h2>
                  </div>
                  {/* Post Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                      {/* Tags */}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                      {/* Summary */}
                      <div className="prose mt-2 max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                    </div>
                    {/* </div> */}
                    {/* Read More Link */}
                    <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      <Link
                        href={`/blog/${slug}`}
                        className="font-medium text-primary hover:text-sky-600 dark:hover:text-sky-400"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                  {/* </div> */}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-primary hover:text-sky-600 dark:hover:text-sky-400" aria-label="All posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </div>
  );
}
