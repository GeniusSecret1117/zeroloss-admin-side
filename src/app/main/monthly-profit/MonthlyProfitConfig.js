import i18next from 'i18next';

import en from './i18n/en';
import MonthlyProfit from './MonthlyProfit';

i18next.addResourceBundle('en', 'monthlyProfitPage', en);

const MonthlyProfitConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'monthly-profit',
      element: <MonthlyProfit />,
    },
  ],
};

export default MonthlyProfitConfig;
