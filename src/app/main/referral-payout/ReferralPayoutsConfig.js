import i18next from 'i18next';

import en from './i18n/en';
import ReferralPayouts from './ReferralPayouts';

i18next.addResourceBundle('en', 'referralPayoutsPage', en);

const ReferralPayoutsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'referral-payouts',
      element: <ReferralPayouts />,
    },
  ],
};

export default ReferralPayoutsConfig;
