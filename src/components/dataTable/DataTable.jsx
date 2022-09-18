import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from './dataTableSource.js';
import { Link } from 'react-router-dom';
import { DarkModeContext } from 'context/darkModeReducer';
import { useContext, useState } from 'react';

export const DataTable = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setData] = useState(userRows);

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <button className="viewButton">View</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
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
        sx={darkMode ? { color: '#999' } : { color: 'inherit' }}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};
