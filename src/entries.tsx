import { createPages } from 'waku';

import RootLayout from './app/layout.js';
import HomePage from './app/page.js';
import AboutPage from './app/about/page.js';
import LinksPage from './app/links/page.js';

export default createPages(async ({ createPage, createLayout }) => {
  createLayout({
    render: 'static',
    path: '/',
    component: RootLayout,
  });

  createPage({
    render: 'static',
    path: '/',
    component: HomePage,
  });

  createPage({
    render: 'static',
    path: '/about',
    component: AboutPage,
  });

  createPage({
    render: 'static',
    path: '/links',
    component: LinksPage,
  });
});
