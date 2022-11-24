import { Avatar, HStack, Box, Text } from '@chakra-ui/react';
import { useSpring, animated, config } from 'react-spring';

import { iconLink } from './introduction';

const AnimatedHStack = animated(HStack);

const MyCard = () => {
  const props = useSpring({
    from: { opacity: 0, y: -10 },
    to: { opacity: 1, y: 0 },
    config: config.molasses,
  });
  return (
    <AnimatedHStack flexDirection={['column', 'row']} style={props}>
      <Box paddingX={4}>
        <Avatar name="Teruhisa Yamamoto" src={iconLink} size="xl" />
      </Box>
      <Box>
        <Text
          fontWeight="bold"
          fontSize={['md', 'lg']}
          textAlign={['center', 'start']}
          paddingY={[2, 'inherit']}
        >
          Teruhisa Yamamoto
        </Text>
        <Text fontSize={['sm', 'md']}>
          Software Developer / Father / Enthusiast of fishing and beer
        </Text>
        <Text fontSize={['sm', 'md']}>What's your dev style?</Text>
      </Box>
    </AnimatedHStack>
  );
};

export default MyCard;
