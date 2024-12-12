import i18next from 'i18next';

import en from './i18n/en';
import ProfitReceivable from './ProfitReceivable';

i18next.addResourceBundle('en', 'profitReceivablePage', en);

const ProfitReceivableConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'profit-receivable',
      element: <ProfitReceivable />,
    },
  ],
};

export default ProfitReceivableConfig;
