import React, { useState, useEffect } from 'react';
import axios from 'axios';

import EmployeeList from './employees/EmployeeList';

// API URL and credentials
const baseUrl = 'http://hiring.rewardgateway.net';
const credentials = {
  username: 'hard',
  password: 'hard'
};

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
      <EmployeeList employeeList={employees} loading={loading} />
    </div>
  );
};

export default App;
