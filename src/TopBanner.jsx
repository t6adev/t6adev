import { useState } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { animated, config, useTransition } from 'react-spring';

import { list } from './introduction';

const titles = list.map((i) => i.title);

const AnimatedText = animated(Text);

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
    <HStack height={[70, 100]} justifyContent="center">
      {transitions((props, i) => (
        <AnimatedText style={props} fontSize={['md', '3xl']} fontStyle="italic">
          {titles[i]}
        </AnimatedText>
      ))}
    </HStack>
  );
};

export default TopBanner;
