import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EXPERIENCES = [
  {
    org: 'Airbus',
    url: 'https://airbus.com',
    logo: '/static/images/airbus-logo.png',
    start: 'Apr 2022',
    end: 'Present',
    title: 'Product Owner',
    icon: 'briefcase',
    event: 'career-weaverse',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
           Proficient in Identity and Access Management, adept at fulfilling stakeholder
            expectations and delivering results in an agile manner with a diverse team,independently
            {/* <a target="_blank" rel="noopener noreferrer" href="https://airbus.com">
              Shopify Hydrogen Theme Customizer
            </a>{' '}
            to help creators build their own high quality and high performance headless storefronts
            easily. */}
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Airbus',
    url: 'https://airbus.com/',
    logo: '/static/images/airbus-logo.png',
    start: 'Apr 2020',
    end: 'Mar 2022',
    title: 'Software Engineer',
    icon: 'man-technologist',
    event: 'career-foxecom',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          Acted as liaison between stakeholders and development team by solving user
          Identity Access & Management problems by developing scalable products
          </li>
          <li>
          Involved in designing/migrating and implementing scalable solutions and
          transformation of IAM products
          </li>
          {/* <li>
            Built{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.shopify.com/foxecom-boost-sales"
            >
              Fox Kit Shopify App
            </a>{' '}
            - The upsells and boost conversion tool built to support Minimog theme
          </li> */}
        </ul>
      )
    },
  },
  {
    org: 'Alten',
    url: 'https://alten.com',
    logo: '/static/images/alten-logo.png',
    start: 'Aug 2018',
    end: 'Mar 2020',
    title: 'Senior Software Engineer',
    icon: 'man-technologist',
    event: 'career-coc-coc',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          Led .net core and angular development initiative as Subject Matter Expert and
          primary point-of-contact for project management staf
          </li>
          <li>
          Worked closely with business stack holder and product owner to understand
          requirements and provide exceptional realistic service</li>
        </ul>
      )
    },
  },
  {
    org: 'Scientific Games India Pvt Ltd',
    url: 'https://www.scientificgames.com/',
    logo: '/static/images/sg-logo.jpg',
    start: 'Aug 2018',
    end: 'Oct 2026',
    title: 'Fullstack Developer',
    icon: 'man-technologist',
    event: 'career-bravebits',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>Collaborated with cross-functional development team members to analyze potential
          system solutions based on evolving client requirements. </li>         
        </ul>
      )
    },
  },
  {
    org: 'Tech Mahindra',
    url: 'https://www.techmahindra.com/',
    logo: '/static/images/tech-mahindra-logo.png',
    start: 'Aug 2014',
    end: 'Oct 2016',
    title: 'Software Engineer',
    icon: 'man-technologist',
    event: 'career-mindx',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
          Researched, designed and implemented scalable applications for information
          identification, extraction, analysis, retrieval and indexing. 
          </li>          
        </ul>
      )
    },
  },
  {
    org: 'Dr. Ambedkar Institute of Technology',
    url: 'https://drait.edu.in/',
    logo: '/static/images/ait-logo.jpg',
    start: 'Oct 2010',
    end: 'June 2014',
    title: 'Bachelor of Engineering - Computer Science',
    icon: 'man-student',
    event: 'career-hust',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Get a good degree at <strong>Computer Science</strong>
          </li>          
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:left-9 before:top-15',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              <span>{start}</span> – <span>{end}</span>
            </div>
            <Link
              href={url}
              className="line-clamp-1 w-fit font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
            >
              <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
            </Link>
            <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
              <Twemoji emoji={icon} className="!-mt-1" />
              <span>{title}</span>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}