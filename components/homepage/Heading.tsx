import siteMetadata from '@/data/siteMetadata';

import { Twemoji } from '@/components/Twemoji';

const Heading = () => {
  return (
    <h1 >
      Hi,there!I'm <span>{siteMetadata.name}</span> 👋
      {/* <span className="hidden">Bangalore, IN</span> */}
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="viet-nam-vietnam-flag" />
      </span>
    </h1>
  );
};

export default Heading;
