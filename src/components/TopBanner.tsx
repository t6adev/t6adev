'use client';
import { useState } from 'react';
import { animated, config, useTransition } from '@react-spring/web';

import { list } from '../introduction';

const titles = list.map((i) => i.title);

const TopBanner = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    from: {
      opacity: 0,
      display: 'none',
    },
    enter: {
      opacity: 1,
      display: 'block',
    },
    leave: { opacity: 0, display: 'none' },
    config: { ...config.molasses, friction: 300 },
    onRest: () => setIndex((i) => (i + 1) % titles.length),
  });

  return (
    <div className="flex justify-center h-[70px] md:h-[100px]">
      {transitions((props, i) => (
        <animated.p style={props} className="text-md md:text-3xl italic">
          {titles[i]}
        </animated.p>
      ))}
    </div>
  );
};

export default TopBanner;
