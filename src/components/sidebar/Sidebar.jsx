import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul className="list">
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleAltIcon />
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Stats</span>
          </li>
          <li>
            <span>Notification</span>
          </li>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};
