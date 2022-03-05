import { mode } from '@chakra-ui/theme-tools';
import { ChakraProvider, extendTheme, theme as chakraTheme } from '@chakra-ui/react';

import '@fontsource/m-plus-rounded-1c'; // M PLUS Rounded 1c

import Layout from '../src/Layout';

const styles = {
  global: (props) => ({
    'html, body': {
      color: props.colorMode === 'dark' ? 'white' : 'gray.600',
      lineHeight: 'tall',
    },
    body: {
      bg: mode('white', '#292929')(props),
    },
    a: {
      color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
    },
  }),
};

const fonts = {
  ...chakraTheme.fonts,
  heading: `"M PLUS Rounded 1c", ${chakraTheme.fonts.heading}`,
  body: `"M PLUS Rounded 1c", ${chakraTheme.fonts.body}`,
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ styles, fonts, config });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
