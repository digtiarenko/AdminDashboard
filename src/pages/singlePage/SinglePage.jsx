import { ChartNormal } from 'components/chartNormal/ChartNormal';
import { Navbar } from 'components/navbar/Navbar';
import { Sidebar } from 'components/sidebar/Sidebar';
import { TableComponent } from 'components/Table/TableComponent';
import './singlePage.scss';

export const SinglePage = () => {
  return (
    <div className="singlePage">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <button className="editButton">Edit</button>
            <h1 className="title">User Info</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">Jane Doe</h2>
                <div className="detailItem">
                  <span className="itemKey"> Email: </span>
                  <span className="itemValue"> janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Phone: </span>
                  <span className="itemValue"> +1 4232 12 43 </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Address: </span>
                  <span className="itemValue"> Maddison St. 23 NewYork</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Country: </span>
                  <span className="itemValue"> USA </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <ChartNormal aspect={3 / 1} title="User Spendings (Last 6 Month)" />
          </div>
        </div>
        <div className="bottom">
          <h2 className="title">Last Transactions</h2>
          <TableComponent />
        </div>
      </div>
    </div>
  );
};
