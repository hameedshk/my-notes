import siteMetadata from '@/data/siteMetadata';

import { Twemoji } from '@/components/Twemoji';

const Heading = () => {
  return (
    <p className="text-[rgb(4, 166, 153)]">
      Hi,there!I'm <span>{siteMetadata.name}</span> 👋
      {/* <span className="hidden">Bangalore, IN</span> */}
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="viet-nam-vietnam-flag" />
      </span>
    </p>
  );
};

export default Heading;
