import React, { useState, useEffect } from "react";

const Employee = ({ name, department, role, alive }) => {
  return (
    <div className="employee">
      <h3>{name}</h3>
      <p>Department: {department}</p>
      <p>Role: {role}</p>
      <p>Status: {alive ? "Alive" : "Deceased"}</p>
    </div>
  );
};



//////////////////
const Employees = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map(employee => ({...employee,alive: employee.id === 1 || employee.id === 2,}));
        setEmployeeList(updatedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);




//////////////////////
  const filteredEmployees = employeeList.filter((employee) => {
    if (filter === "alive") {
      return employee.alive;
    } else if (filter === "deceased") {
      return !employee.alive;
    }
    return true;
  });



//////////////////////
  return (
    <div>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("alive")}>Alive</button>
        <button onClick={() => setFilter("deceased")}>Deceased</button>
      </div>
      <div className="employee-list">
       
        {filteredEmployees.map((user) => (
          <Employee
            key={user.id}
            name={user.name}
            department={user.department}
            role={user.role}
            alive={user.alive}
          />
        ))}
      </div>
    </div>
  );
};

export default Employees;
