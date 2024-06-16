import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';

const UserDashboardTable = ({ data, onViewMore, onDelete }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Filename</TableCell>
          <TableCell>File Type</TableCell>
          <TableCell>Uploaded At</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.file}</TableCell>
            <TableCell>{row.file_type}</TableCell>
            <TableCell>{new Date(row.uploaded_at).toLocaleString()}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onViewMore(row.id)}
              >
                View More
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onDelete(row.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

UserDashboardTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      file: PropTypes.string.isRequired,
      file_type: PropTypes.string.isRequired,
      uploaded_at: PropTypes.string.isRequired,
    })
  ).isRequired,
  onViewMore: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const UserDashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/files/')
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const handleViewMore = (id) => {
    console.log(`View more clicked for user with id: ${id}`);
    // Add functionality for viewing more details
  };

  const handleDelete = (id) => {
    console.log(`Delete clicked for user with id: ${id}`);
    // Add functionality for deleting a user
  };

  return (
    <UserDashboardTable
      data={userData}
      onViewMore={handleViewMore}
      onDelete={handleDelete}
    />
  );
};

export default UserDashboard;

