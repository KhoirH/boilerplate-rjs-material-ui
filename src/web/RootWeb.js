import React from 'react';
const RootScreen = React.lazy(() => import('../containers/RootScreen'));

export default [
  {
    component: RootScreen,
    path: '/',
    exact: true,
  }
]