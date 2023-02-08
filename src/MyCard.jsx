import { Avatar, HStack, Box, Text, Link } from '@chakra-ui/react';
import { useSpring, animated, config } from 'react-spring';
import { FaTwitter, FaYoutube, FaGithub, FaDiscord } from 'react-icons/fa';

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
        <HStack>
          <Link href="https://twitter.com/t6adev" isExternal>
            <FaTwitter mx="2px" />
          </Link>
          <Link href="https://www.youtube.com/@t6adev" isExternal>
            <FaYoutube mx="2px" />
          </Link>
          <Link href="https://discord.com/invite/zPhh4KeBm5" isExternal>
            <FaDiscord mx="2px" />
          </Link>
          <Link href="https://github.com/t6adev" isExternal>
            <FaGithub mx="2px" />
          </Link>
        </HStack>
        <Text fontSize={['sm', 'md']}>Let's say Hi, in Tokyo or Discord.</Text>
        <Text fontSize={['sm', 'md']}>What's your dev style?</Text>
      </Box>
    </AnimatedHStack>
  );
};

export default MyCard;
