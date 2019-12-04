import React from 'react';

const EmployeeList = ({ employeeList, loading }) => {
  if (loading) {
    return <h3>Loading . . . . .</h3>;
  }

  return (
    <ul className="list-group mb-4">
      {employeeList.map(employee => (
        <li key={employee.uuid} className="list-group-item">
          {employee.name}
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
