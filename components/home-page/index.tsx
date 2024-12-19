import type { Blog, Snippet } from '~/.contentlayer/generated'
import { ProfileCard } from '~/components/cards/profile'
import { Container } from '~/components/ui/container'
import { Twemoji } from '~/components/ui/twemoji'
import type { CoreContent } from '~/types/data'
import { Greeting } from './greeting'
import { Intro } from './intro'
import { LatestPosts } from './latest-posts'
import { BlogLinks } from './links'
import { TypedBios } from './typed-bios'
import { Link } from '../ui/link'
import { ProfileCardInfo } from '../cards/profile/profile-info'
import { SocialAccounts } from '../author/social-accounts'
import { TagsList } from '../blog/tags'

export function Home({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="xl:grid xl:grid-cols-3">
        <div className="md:pr-8 xl:col-span-2 text-left">
          <Greeting />
          <div className="text-base leading-8 text-gray-600 dark:text-gray-400 mt-4 md:text-lg md:leading-9">
             <Intro />             
             {/* <TypedBios /> */}
             <div className="mt-6">
              <h2 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-gray-200 tracking-wide">Welcome to My Notes</h2>
              <p className="mt-4">My Digital repository for Technology & Product Management Insights.</p>                                          
              <p className="mt-2">Sharing lessons learned and experiences from the trenches of tech and product management.
              </p>
            </div>             
            <div className="mt-6">
            <BlogLinks />            
            </div>            
            <div className="mt-6">
      <p className="text-lg font-medium">You can connect with me via <Twemoji emoji="laptop" /></p>
      <div className="flex justify-start space-x-4 mt-4">      
      <SocialAccounts />
      </div>
    </div>
    {/* <div className="my-8 text-center flex justify-start items-center"> 
      <p className="text-lg font-medium mr-2">Happy surfing</p>
      <Twemoji emoji="sparkles" />
    </div>*/}
          </div>
        </div>
        <div className="hidden pl-4 xl:block">
          <ProfileCard />
        </div>
      </div>
      <LatestPosts posts={posts} snippets={snippets} />
      {/* {SITE_METADATA.newsletter?.provider && (
        <div className="flex items-center justify-center py-4 lg:py-10">
          <NewsletterForm />
        </div>
      )} */}
    </Container>
  )
}
