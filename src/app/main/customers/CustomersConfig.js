import i18next from 'i18next';

import en from './i18n/en';
import Customers from './Customers';

i18next.addResourceBundle('en', 'customersPage', en);

const CustomersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'customers',
      element: <Customers />,
    },
  ],
};

export default CustomersConfig;
