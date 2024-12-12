import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/userSlice';
import withReducer from 'app/store/withReducer';
import TPersonal from './components/tpersonal';
import TActive from './components/tactive';
import Personal from './components/personal';
import Active from './components/active';
import CustomersTable from './components/customersTable';
import { getSelectedCustomer } from './store/stateSlice';
import reducer from './store';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
}));

function Customers(props) {
  const { t } = useTranslation('customersPage');
  const user = useSelector(selectUser);
  const selectedCustomer = useSelector(getSelectedCustomer);

  return (
    <Root
      content={
        <div className="w-full container p-12">
          <div className="mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {selectedCustomer === '' ? <TPersonal /> : <Personal />}
            {selectedCustomer === '' ? <TActive /> : <Active />}
          </div>
          <div className="mt-[24px]">
            <CustomersTable />
          </div>
        </div>
      }
      scroll="content"
    />
  );
}

export default withReducer('customers', reducer)(Customers);
