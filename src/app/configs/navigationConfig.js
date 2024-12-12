import i18next from 'i18next';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Divider from '@mui/material/Divider';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { MdOutlineRadar } from 'react-icons/md';
import authRoles from '../auth/authRoles';
import en from './navigation-i18n/en';
import pt from './navigation-i18n/pt';
import nl from './navigation-i18n/nl';
import ru from './navigation-i18n/ru';
import es from './navigation-i18n/es';
import it from './navigation-i18n/it';
import pl from './navigation-i18n/pl';
import fr from './navigation-i18n/fr';
import de from './navigation-i18n/de';
import el from './navigation-i18n/el';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('pt', 'navigation', pt);
i18next.addResourceBundle('nl', 'navigation', nl);
i18next.addResourceBundle('ru', 'navigation', ru);
i18next.addResourceBundle('es', 'navigation', es);
i18next.addResourceBundle('it', 'navigation', it);
i18next.addResourceBundle('pl', 'navigation', pl);
i18next.addResourceBundle('fr', 'navigation', fr);
i18next.addResourceBundle('de', 'navigation', de);
i18next.addResourceBundle('el', 'navigation', el);

const navigationConfig = [
  {
    id: 'dashboard-component',
    title: 'Dashboard',
    translate: 'Dashboard',
    type: 'item',
    icon: <DashboardOutlinedIcon />,
    url: 'dashboard',
  },
  {
    id: 'customers-component',
    title: 'Customers',
    translate: 'Customers',
    type: 'item',
    icon: <GroupsOutlinedIcon />,
    url: 'customers',
  },
  {
    id: 'referrals-component',
    title: 'Referrals',
    translate: 'Referrals',
    type: 'item',
    icon: <GroupAddOutlinedIcon />,
    url: 'referrals',
    divide: <Divider className="my-[24px]" />
  },
  {
    id: 'reports-statement-component',
    title: 'Reports Statement',
    translate: 'Reports_Statement',
    type: 'group',
    children: [
      {
        id: 'daily-profit-component',
        title: 'Daily Profit',
        translate: 'Daily_Profit',
        type: 'item',
        icon: <AccountBalanceWalletOutlinedIcon />,
        url: 'daily-profit',
      },
      {
        id: 'monthly-profit-component',
        title: 'Monthly Profit',
        translate: 'Monthly_Profit',
        type: 'item',
        icon: <CalendarViewMonthOutlinedIcon />,
        url: 'monthly-profit',
      },
      {
        id: 'profit-receivable-component',
        title: 'Profit Receivable',
        translate: 'Profit_Receivable',
        type: 'item',
        icon: <img className="w-[18px] h-[18px] mr-[16px]" src="assets/icons/profit_chart.svg" alt="profit_chart" />,
        url: 'profit-receivable',
      },
      {
        id: 'referral-payouts-component',
        title: 'Referral Payouts',
        translate: 'Referral_Payouts',
        type: 'item',
        icon: <RedeemOutlinedIcon />,
        url: 'referral-payouts',
      },
    ],
  },
  {
    id: 'administration-component',
    title: 'Administration',
    translate: 'Administration',
    type: 'group',
    children: [
      {
        id: 'global-settings-component',
        title: 'Global Settings',
        translate: 'Global_Settings',
        type: 'item',
        icon: <SettingsOutlinedIcon />,
        url: 'global-settings',
      },
      {
        id: 'trading-settings-component',
        title: 'Trading Settings',
        translate: 'Trading_Settings',
        type: 'item',
        icon: <img className="w-[18px] h-[18px] mr-[16px]" src="assets/icons/trading_icon.svg" alt="trading_icon" />,
        url: 'trading-settings',
      },
      {
        id: 'change-password-component',
        title: 'Change Password',
        translate: 'Change_Password',
        type: 'item',
        icon: <PasswordOutlinedIcon />,
        url: 'change-password',
      },
      {
        id: 'log-out',
        title: 'Logout',
        type: 'item',
        auth: authRoles.user,
        url: 'sign-out',
        icon: <LogoutOutlinedIcon />,
      },
    ],
  },

];

export default navigationConfig;
