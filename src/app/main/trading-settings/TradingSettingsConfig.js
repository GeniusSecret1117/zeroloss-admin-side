import i18next from 'i18next';

import en from './i18n/en';
import TradingSettings from './TradingSettings';

i18next.addResourceBundle('en', 'tradingSettingsPage', en);

const TradingSettingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'trading-settings',
      element: <TradingSettings />,
    },
  ],
};

export default TradingSettingConfig;
