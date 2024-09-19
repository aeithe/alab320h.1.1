import EmployeeList from "./components/EmployeeList";
import { useState } from "react";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div>
      <EmployeeList
          employee={selectedEmployee}
          goBack={() => setSelectedEmployee(null)}
        />
    
    </div>
  
)}

export default App;