import i18next from 'i18next';

import en from './i18n/en';
import Referrals from './Referrals';

i18next.addResourceBundle('en', 'referralsPage', en);

const ReferralConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'referrals',
      element: <Referrals />,
    },
  ],
};

export default ReferralConfig;
