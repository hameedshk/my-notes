import siteMetadata from '@/data/siteMetadata';
import { Briefcase, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Fragment } from 'react';
import XIcon from '~/public/static/icons/x.svg';
import Twemoji from '../Twemoji';

function getAccountHandle(url = '') {
  const lastPart = url.split('/').pop();
  if (lastPart) {
    return lastPart;
  }
  return url;
}

const SOCIALS = [
  {
    platform: 'github',
    handle: getAccountHandle(siteMetadata.github),
    href: siteMetadata.github,
    Icon: () => <Github size={20} strokeWidth={1.5} />,
    umamiEvent: 'profile-card-github',
  },
  {
    platform: 'linkedin',
    handle: getAccountHandle(siteMetadata.linkedin),
    href: siteMetadata.linkedin,
    Icon: () => <Linkedin size={20} strokeWidth={1.5} />,
    umamiEvent: 'profile-card-linkedin',
  },
  // {
  //   platform: 'x',
  //   handle: getAccountHandle(siteMetadata.x),
  //   href: siteMetadata.x,
  //   Icon: () => <XIcon className="h-4 w-4" fill="#fff" viewBox="0 0 1200 1227" />,
  //   umamiEvent: 'profile-card-x',
  // },
];

export function ProfileInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Syed Hameed K</h3>
      <h5 className="py-2 text-gray-500 dark:text-gray-400">Learner | Builder</h5>
      <div className="mb-2 mt-4 space-y-4">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Briefcase strokeWidth={1.5} size={20} />
          <p className="flex items-center px-2">
            Product Owner @{' '}
            <a
              target="_blank"
              href="https://weaverse.io"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Airbus
            </a>
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <MapPin strokeWidth={1.5} size={20} />
          <p className="px-2">
            Bangalore - India,
            {/* <span className="absolute ml-1 inline-flex pt-px"> */}
            <img
              className="absolute ml-1.5 inline-flex h-5 w-5 pt-[3px]"
              src="my-notes/static/images/svg/1f1ee-1f1f3.svg"
              alt="Indian Flag"
            ></img>
            {/* </span> */}
          </p>
        </div>
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Mail strokeWidth={1.5} size={20} />
          <a className="px-2" href={`mailto:${siteMetadata.email}`}>
            {siteMetadata.email}
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
          {SOCIALS.map(({ platform, handle, href, Icon, umamiEvent }, idx) => (
            <Fragment key={platform}>
              <a
                target="_blank"
                href={href}
                rel="noreferrer"
                className="flex items-center underline-offset-4 hover:underline"
                data-umami-event={umamiEvent}
              >
                <Icon />
                <span className="ml-px text-gray-500">/</span>
                <span className="ml-0.5">{handle}</span>
              </a>
              {idx !== SOCIALS.length - 1 && <span className="text-gray-400 dark:text-gray-500">|</span>}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
