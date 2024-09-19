import '../App.css';

function EmployeeDetails({ employee }) {
    return (
      <div className="employee-details">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt={employee.name}
        />
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
        <p>Call Office: 123-456-7890</p>
        <p>Call Mobile: 123-456-7890</p>
        <p>SMS: 123-456-7890</p>
        <p>Email: 123@gmail.com</p>
      </div>
    );
  }
  
  export default EmployeeDetails;