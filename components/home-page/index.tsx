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
          <div className="text-base leading-7 text-gray-600 dark:text-gray-400 mt-4 md:text-lg md:leading-8">
             <Intro /> 
             {/* <TypedBios /> */}
             <div className="mt-4">
              {/* <p className="font-semibold text-lg md:text-xl">Welcome to My Notes</p> */}
              <p className="text-gray-500">My Digital repository for Technology & Product Management Insights.</p>                                          
            </div>             
            <div className="mt-4">
            <BlogLinks />
            </div>            
            <div className="mt-4">
      <p className="text-lg font-medium">You can connect with me via</p>
      <div className="flex justify-start space-x-2 mt-6">
      <Twemoji emoji="laptop" />
      <SocialAccounts />
      </div>
    </div>
    <div className="my-4 text-center flex justify-start items-center">
      <p className="text-lg font-medium mr-2">Happy reading</p>
      <Twemoji emoji="sparkles" />
    </div>
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
