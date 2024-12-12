import i18next from 'i18next';

import en from './i18n/en';
import DailyProfit from './DailyProfit';

i18next.addResourceBundle('en', 'dailyProfitPage', en);

const DailyProfitConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'daily-profit',
      element: <DailyProfit />,
    },
  ],
};

export default DailyProfitConfig;
