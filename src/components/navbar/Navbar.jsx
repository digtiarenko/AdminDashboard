import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useContext } from 'react';
import { DarkModeContext } from 'context/darkModeReducer';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" name="" id="search" placeholder="Search..." />
          <SearchIcon />
        </div>
        <ul className="navItems">
          <li className="navItem">
            Language
            <LanguageIcon className="icon" />
          </li>
          <li className="navItem">
            <MessageIcon className="icon" />
            <div className="counter">1</div>
          </li>
          <li className="navItem">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">2</div>
          </li>
          <li className="navItem" onClick={() => dispatch({ type: 'TOGGLE' })}>
            <Brightness4Icon className="icon" />
          </li>
          <li className="navItem">
            <img
              src="https://gravatar.com/avatar/375fe6c10e1a14988d5bf564742bd201?s=400&d=robohash&r=x"
              alt="avatar"
              className="avatar"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
