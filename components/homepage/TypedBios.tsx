import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">hameed</b> at work.
        </li>
        <li>
          I live in <b className="font-medium">Bangalore, India</b>.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C#</b>.
        </li>
        <li>I love Product Management & web development.
        </li>
        <li>
          I'm focusing on learning <b className="font-medium">Product Management</b>.
        </li>
        <li>
          I work mostly on <b className="font-medium">Product Management and Dotnet</b> technologies.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
