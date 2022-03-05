import { Box, Text, Heading } from '@chakra-ui/react';

import MyCard from '../src/MyCard';
import Trail from '../src/Trail';
import { list } from '../src/introduction';

const About = () => {
  return (
    <div>
      <MyCard />
      <Trail>
        {list.map((i) => (
          <Box key={i.title}>
            <Heading fontStyle="italic" size="xl" marginY={8} textAlign="center">
              {i.title}
            </Heading>
            <Box>
              {i.subs.map((sub) => (
                <Box key={sub.title}>
                  <Heading size="md" marginBottom={4}>
                    {sub.title}
                  </Heading>
                  <Text marginY={4}>{sub.message}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Trail>
    </div>
  );
};
export default About;
