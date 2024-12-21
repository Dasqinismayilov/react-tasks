import React from 'react';
import './style.css';
const DepartmentFilter = ({ selectedDepartment, setSelectedDepartment, employees }) => {
    const departments = [...new Set(employees.map((employee) => employee.department)
    )];

    return (
        <div className="department-filter">
            <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
            >
                <option value="">Şöbə seçin</option>
                {departments.map((department, index) => (
                    <option key={index} value={department}>
                        {department}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DepartmentFilter;
