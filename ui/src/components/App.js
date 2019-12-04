import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EmployeeList from './employees/EmployeeList';
import Pagination from './pagination/Pagination';

// API URL and credentials
const baseUrl = 'http://hiring.rewardgateway.net';
const credentials = {
  username: 'hard',
  password: 'hard'
};

const employeesPerPage = 20;

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);

      const response = await axios.get(`${baseUrl}/list`, {
        auth: credentials
      });

      setEmployees(response.data);
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  const indexLastEmployee = currentPage * employeesPerPage;
  const indexFirstEmployee = indexLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(
    indexFirstEmployee,
    indexLastEmployee
  );

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Reward Gateway</h1>
      <EmployeeList employeeList={currentEmployees} loading={loading} />
      <Pagination
        totalEmployees={employees.length}
        employeesPerPage={employeesPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
