import React, { useEffect, useState } from "react";
import axios from "axios";
import employeeService from "./services/employeeservices";
import { Link, useParams,useNavigate } from "react-router-dom";

export default function Listofemployee() {
    const navigate = useNavigate();
  const [employees, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => {
    try {
      const response = await employeeService.getEmployees();
      setUsers(response.data);
    } catch (error) {
      // Handle error if the API request fails
      console.error("Error fetching employees:", error);
    }
  };
//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:8080/api/employees");
//     setUsers(result.data);
//   };

  const addEmployee = async (e) => {
    navigate("/add-employee");
  };

  const deleteUser = async (employeeId) => {
    try {
      await employeeService.deleteEmployee(employeeId);
      loadUsers(); // Reload the employees list after successful deletion
    } catch (error) {
      // Handle error if the API request fails
      console.error(`Error deleting employee with ID ${employeeId}:`, error);
    }
  };

  return (
    <div className="container">
        <h1 className="text-center">List of Employees</h1>
        <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Salary</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employees, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employees.name}</td>
                <td>{employees.address}</td>
                <td>{employees.salary}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/employee/${employees.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/employee/${employees.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(employees.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}