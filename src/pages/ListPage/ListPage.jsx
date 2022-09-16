import { Navbar } from 'components/navbar/Navbar';
import { Sidebar } from 'components/sidebar/Sidebar';
import './listPage.scss';

export const ListPage = () => {
  return (
    <div className="listPage">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        datatable
      </div>
    </div>
  );
};
