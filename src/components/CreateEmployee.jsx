import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import employeeService from "./services/employeeservices";

export default function CreateEmployee() {
  let navigate = useNavigate();

  const [employee, setUser] = useState({
    name: "",
    address: "",
    salary: "",
  });
  const [addressError, setAddressError] = useState("");
  const [nameError, setNameError] = useState("");
  const [salaryError, setSalaryError] = useState("");

  const { name, address, salary } = employee;

  const onInputChange = (e) => {
    setUser({ ...employee, [e.target.name]: e.target.value });
    console.log(employee);
    if (!address.trim()) {
      setAddressError("Address cannot be empty.");
    } else {
      setAddressError("");
    }
    if (!name.trim()) {
      setNameError("Name cannot be empty.");
    } else {
      setNameError("");
    }
    if (!salary.trim()) {
      setSalaryError("Salary cannot be empty.");
    } else {
      setSalaryError("");
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    let emp={name,address,salary};
    console.log(emp);
    if (!address.trim()) {
      setAddressError("Address cannot be empty.");
      return;
    }
    employeeService.createEmployee(emp).then((res)=>{
        setUser(res.data);

    // await axios.post("http://localhost:8080/api/save", employee);
  })
  navigate("/");
  }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              <p className="text-danger">{nameError}</p>
            </div>
            
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Employee address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            <p className="text-danger">{addressError}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Salary
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Employee Salary"
                name="salary"
                value={salary}
                onChange={(e) => onInputChange(e)}
              />
              <p className="text-danger">{salaryError}</p>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/employees">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};