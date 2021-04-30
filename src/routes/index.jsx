import React from 'react';
import Top from '../view/Top/top';
import About from '../view/About/about';

const routes = [
  {
    path: '/',
    exact: true,
    children: <Top />,
  },
  {
    path: '/About',
    children: <About />,
  },
];

export default routes;
