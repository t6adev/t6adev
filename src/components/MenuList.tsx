'use client';
import { Link } from 'waku';

import { menus } from '../menus.js';

import Trail from './Trail.js';

const MenuList = () => (
  <div className="py-8">
    <Trail>
      {menus.map((m) => (
        <Link to={m.pathname} key={m.title} className="text-xl">
          {m.title}
        </Link>
      ))}
    </Trail>
  </div>
);

export default MenuList;
