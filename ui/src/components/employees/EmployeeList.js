import React from 'react';

const EmployeeList = ({ employeeList, loading }) => {
  if (loading) {
    return <h3>Loading . . . . .</h3>;
  }

  return (
    <ul>
      {employeeList.map(employee => (
        <li key={employee.uuid}>{employee.name}</li>
      ))}
    </ul>
  );
};

export default EmployeeList;
