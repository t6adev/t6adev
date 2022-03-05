import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Box, Text, Link, HStack } from '@chakra-ui/react';

import { iconLink } from './introduction';
import { menus } from './menus';
import Trail from './Trail';

const baseTitle = 'Tell-y - Teruhisa Yamamoto';
const baseUrl = 'https://tell-y.com';
const baseDescription = `This is Teruhisa Yamamoto's personal web site.`;

const Layout = ({ children }) => {
  const outerPaddingXs = [6, 8, 16, 24];
  const { pathname } = useRouter();

  const thisPage = menus.find((m) => m.pathname === pathname);

  return (
    <div>
      <Head>
        <title>{baseTitle}</title>
        <meta name="description" content={baseDescription} />
        <link rel="icon" href={iconLink} type="image/jpg"></link>
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content={baseTitle} />
        <meta property="og:description" content={baseDescription} />
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta name="twitter:site" content="@tell_y_t" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Box paddingX={outerPaddingXs} paddingY={6}>
        <Box paddingY={8}>
          {pathname !== '/' && thisPage && (
            <Trail>
              <HStack paddingY={8}>
                <NextLink href="/" passHref>
                  <Link fontSize="2xl" fontStyle="italic">
                    Top
                  </Link>
                </NextLink>
                <Text fontSize="2xl" fontStyle="italic">
                  {`>`} {thisPage.title}
                </Text>
              </HStack>
            </Trail>
          )}
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
