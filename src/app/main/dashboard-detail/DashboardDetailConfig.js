import i18next from 'i18next';

import en from './i18n/en';
import DashboardDetail from './DashboardDetail';

i18next.addResourceBundle('en', 'dashboardDetailPage', en);

const DashboardDetailConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboard/:id',
      element: <DashboardDetail />,
    },
  ],
};

export default DashboardDetailConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default ExampleConfig;
*/
