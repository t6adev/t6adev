import { Box, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import MyCard from '../src/MyCard';
import Trail from '../src/Trail';
import { links } from '../src/introduction';

const Links = () => (
  <div>
    <MyCard />
    <Box paddingY={8}>
      <Trail>
        {links.map((l) => (
          <Box key={l.title} marginBottom={6}>
            <Link href={l.href} isExternal fontSize="lg">
              {l.title}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        ))}
      </Trail>
    </Box>
  </div>
);
export default Links;
