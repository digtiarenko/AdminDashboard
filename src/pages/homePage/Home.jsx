import { ChartFeatured } from 'components/chartFeatured/ChartFeatured';
import { ChartNormal } from 'components/chartNormal/ChartNormal';
import { Navbar } from 'components/navbar/Navbar';
import { Sidebar } from 'components/sidebar/Sidebar';
import { TableComponent } from 'components/Table/TableComponent';
import { Widget } from 'components/widget/Widget';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <ChartFeatured />
          <ChartNormal />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transactions</div>
          <TableComponent />
        </div>
      </div>
    </div>
  );
};
