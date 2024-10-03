import React from 'react';

function Table({ data }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>No</th>  
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>RegNumber</th>
          <th>Age</th>
          <th>Class</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((student, index) => (
            <tr key={index}>
              <td>{student.serial}</td>         {/* Display serial number */}
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.number}</td>
              <td>{student.RegNumber}</td>
              <td>{student.age}</td>
              <td>{student.className}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">No student found with that RegNumber</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
