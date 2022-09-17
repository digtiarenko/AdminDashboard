import { Navbar } from 'components/navbar/Navbar';
import { Sidebar } from 'components/sidebar/Sidebar';
import './newPage.scss';

export const NewPage = () => {
  return (
    <div className="newPage">
      <Sidebar />
      <div className="newPageContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};
