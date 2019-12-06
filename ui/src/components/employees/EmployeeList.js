import React from 'react';

import Employee from './Employee'

const EmployeeList = ({ employeeList, loading }) => {
  if (loading) {
    return <h3>Loading . . . . .</h3>;
  }

  return (
    <ul className="list-group mb-4">
      {employeeList.map(employee => {
        console.log(employee)

        return (
          <li key={employee.uuid} className="list-group-item">
            <Employee avatar={employee.avatar} bio={employee.bio} company={employee.company} name={employee.name} title={employee.title} />
          </li>
        )
      })}
    </ul>
  );
};

export default EmployeeList;
