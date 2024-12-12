import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import SignInConfig from '../main/sign-in/SignInConfig';
import SignUpConfig from '../main/sign-up/SignUpConfig';
import SignOutConfig from '../main/sign-out/SignOutConfig';
import Error404Page from '../main/404/Error404Page';
import DashboardConfig from '../main/dashboard/DashboardConfig';
import DashboardDetailConfig from '../main/dashboard-detail/DashboardDetailConfig';
import CustomersConfig from '../main/customers/CustomersConfig';
import ReferralConfig from '../main/referrals/ReferralsConfig';
import ProfileConfig from '../main/profile/ProfileConfig';
import ForgotPasswordConfig from '../main/forgot-password/ForgotPasswordConfig';
import VerifyCodeConfig from '../main/verify-code/VerifyCodeConfig';
import NotificationConfig from '../main/notification/NotificationConfig';
import ChangePasswordConfig from '../main/change-password/ChangePasswordConfig';
import SettingsConfig from '../main/settings/SettingsConfig';
import ProfitReceivableConfig from '../main/profit-receivable/ProfitReceivableConfig';
import TradingSettingsConfig from '../main/trading-settings/TradingSettingsConfig';
import DailyProfitConfig from '../main/daily-profit/DailyProfitConfig';
import MonthlyProfitConfig from '../main/monthly-profit/MonthlyProfitConfig';
import ReferralPayoutsConfig from '../main/referral-payout/ReferralPayoutsConfig';


const routeConfigs = [
  DashboardConfig,
  CustomersConfig,
  ReferralConfig,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  ProfileConfig,
  ForgotPasswordConfig,
  VerifyCodeConfig,
  NotificationConfig,
  ChangePasswordConfig,
  SettingsConfig,
  DashboardDetailConfig,
  ProfitReceivableConfig,
  TradingSettingsConfig,
  DailyProfitConfig,
  MonthlyProfitConfig,
  ReferralPayoutsConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
