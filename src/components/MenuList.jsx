'use client';
import Link from 'next/link';

import { menus } from '../menus';

import Trail from './Trail';

const MenuList = () => (
  <div className="py-8">
    <Trail>
      {menus.map((m) => (
        <Link href={m.pathname} key={m.title} className='text-xl'>
          {m.title}
        </Link>
      ))}
    </Trail>
  </div>
);

export default MenuList;
