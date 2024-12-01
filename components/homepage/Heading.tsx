import siteMetadata from '@/data/siteMetadata';

import { Twemoji } from '@/components/Twemoji';

const Heading = () => {
  return (
    <p className="text-[rgb(4, 166, 153)]">
      I'm <span>{siteMetadata.name} - A passionate Software Engineer in </span>
      <img
        className="absolute ml-1.5 inline-flex h-5 w-5 pt-[3px]"
        src="my-notes/static/images/svg/1f1ee-1f1f3.svg"
        alt="Indian Flag"
      ></img>
    </p>
  );
};

export default Heading;
