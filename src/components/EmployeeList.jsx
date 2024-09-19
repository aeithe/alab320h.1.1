import '../App.css';
import EmployeeItems from './EmployeeItems';

const employees = [
    { id: 1, name: "James King", title: "President and CEO" },
    { id: 2, name: "Julie Taylor", title: "VP of Marketing" },
    { id: 3, name: "Eugene Lee", title: "CFO" },
    { id: 4, name: "John Williams", title: "VP of Engineering" },
    { id: 5, name: "Ray Moore", title: "VP of Sales" },
    { id: 6, name: "Paul Jones", title: "GA Manager" },
  ];
  
  function EmployeeList({ onSelectEmployee }) {
    return (
      <div className="employee-list">
        {employees.map((employee) => (
          <EmployeeItems
            key={employee.id}
            employee={employee}
            onClick={() => onSelectEmployee(employee)}
          />
        ))}
      </div>
    );
  }
  
  export default EmployeeList;