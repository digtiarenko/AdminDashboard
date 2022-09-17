import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './dataTableSource.js';
import { Link } from 'react-router-dom';

export const DataTable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <button className="viewButton">View</button>
            </Link>
            <button className="deleteButton">Delete</button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="dataTableTitle">
        Add New User
        <Link className="link" to="/users/new">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
