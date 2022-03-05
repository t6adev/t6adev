import NextLink from 'next/link';
import { Link, VStack } from '@chakra-ui/react';

import { menus } from './menus';

import Trail from './Trail';

const MenuList = () => (
  <VStack alignItems="start" paddingY={16}>
    <Trail>
      {menus.map((m) => (
        <NextLink href={m.pathname} passHref key={m.title}>
          <Link fontSize="2xl">{m.title}</Link>
        </NextLink>
      ))}
    </Trail>
  </VStack>
);

export default MenuList;
