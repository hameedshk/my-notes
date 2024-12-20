import { clsx } from 'clsx'
import { AreaChart, Github, Rss } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
import { SITE_METADATA } from '~/data/site-metadata'
import MadeInIndia from '~/icons/miv.svg'
import { Twemoji } from '../ui/twemoji'

const fullYear = new Date().getFullYear();

export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row gap-16',
        'border-t border-gray-200 dark:border-gray-700 ',
      ])}
    >
      {/* <SpotifyNowPlaying
        className="w-full justify-center truncate [--artist-color:theme(colors.gray.500)] md:max-w-[50%] md:justify-start"
        songEffect="underline"
        showCover
      /> */}
      <div className="flex items-center">
      <span className="mx-2.5 text-dark-400">SHK Inc © {fullYear}</span>
        {/* <Link >         */}
          {/* <span data-umami-event="made-in-india"> */}
            {/* <h1 className="absolute ml-1.5 inline-flex pt-[3px]">Made In India  */}
              <Twemoji emoji="flag-india" />
            {/* </h1> */}
          {/* </span> */}
        {/* </Link>        */}
        {/* <Github className="h-5 w-5" /> */}
        <span className="mx-2.5 text-dark-400">|</span>
        <Link href="/feed.xml" aria-label="RSS Feed" data-umami-event="rss-feed" prefetch={false}>
          <Rss strokeWidth={1.5} size={20} />
        </Link>
        {/* <Link
          href={SITE_METADATA.analytics.umamiAnalytics.shareUrl}
          aria-label="Open analytics"
          data-umami-event="footer-analytics"
          className="ml-2"
        > 
          <AreaChart strokeWidth={1.5} size={22} />
        </Link> */}
      </div>
    </div>
  )
}
