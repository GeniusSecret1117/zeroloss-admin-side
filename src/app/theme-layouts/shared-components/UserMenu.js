import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from 'app/store/userSlice';
import { changeLanguage, selectCurrentLanguage, selectLanguages } from 'app/store/i18nSlice';

function UserMenu(props) {
  const user = useSelector(selectUser);
  const currentLanguage = useSelector(selectCurrentLanguage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userMenuClick = (event) => {
    navigate('/profile');
  };

  return (
    <>
      <div
        className="px-0 py-0 md:py-6 cursor-pointer flex items-center rounded-lg "
        onClick={userMenuClick}
        color="inherit"
      >
        {user.data.photoURL ? (
          <Avatar className="md:mx-4" alt="user photo" src={user.data.photoURL} sx={{ width: 48, height: 48, border: '1px solid #41D87B', borderRadius: '50%' }} />
        ) : (
          <Avatar className="md:mx-4" sx={{ width: 48, height: 48, border: '1px solid #41D87B', borderRadius: '50%' }} >{user.data.displayName[0]}</Avatar>
        )}
        <div className="hidden md:flex flex-col justify-start items-start mx-4">
          <Typography component="span" className="font-semibold text-[14px]">
            David
          </Typography>
          <Typography component="span" className="font-normal text-[14px]">
            Admin
          </Typography>
          <Typography component="span" className="font-normal text-[12px]">
            Oct 3, 2024 6:55 AM | utc
          </Typography>
        </div>
      </div>
    </>
  );
}

export default UserMenu;
