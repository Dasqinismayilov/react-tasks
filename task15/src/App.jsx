import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import DepartmentFilter from './components/DepartmentFilter';
import EmployeeCard from './components/EmployeeCard';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

 
  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 
  const filteredEmployees = employees.filter((employee) => {
    const matchesName = employee.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment ? employee.department === selectedDepartment : true;
    return matchesName && matchesDepartment;
  });

  return (
    <div className="app">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DepartmentFilter 
        selectedDepartment={selectedDepartment} 
        setSelectedDepartment={setSelectedDepartment} 
        employees={employees} 
      />
      <div className="employee-list">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default App;
