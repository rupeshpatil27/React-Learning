import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function UserTable() {

  const [userData, SetUserData] = useState([]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
    async function getUserList() {
      const response = await fetch(
        "https://dummyjson.com/users"
      );
      const data = await response.json();
      SetUserData(data.users);
    }
    getUserList();
  }, []);

  const columns = [
    { field: 'id', headerName: 'id' },
    { field: 'firstName', headerName: 'firstName' },
    { field: 'lastName', headerName: 'lastName' },
    { field: 'maidenName', headerName: 'maidenName' },
    { field: 'age', headerName: 'age' },
    { field: 'gender', headerName: 'gender' },
    { field: 'email', headerName: 'email' },
    { field: 'phone', headerName: 'phone' },
    { field: 'username', headerName: 'username' },
    { field: 'password', headerName: 'password' },
    { field: 'birthDate', headerName: 'birthDate' },
    { field: 'image', headerName: 'image' },
    { field: 'bloodGroup', headerName: 'bloodGroup' },
    { field: 'height', headerName: 'height' },
    { field: 'weight', headerName: 'weight' },
    { field: 'eyeColor', headerName: 'eyeColor' },
    {
      field: 'address', headerName: 'address',
      valueGetter: (value, row) => `${row.address.address || ''}, ${row.address.city || ''}, ${row.address.state || ''}, ${row.address.stateCode || ''}, ${row.address.postalCode || ''}`,
      width: 200,
    },
    { field: 'role', headerName: 'role' },
  ]

  const paginationModel = { page: 0, pageSize: 5 };


  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userData}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  )
}

export default UserTable