import React,{Component} from "react";
import EmployeeService from "./services/employeeservices";

class Listofemployee extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            employees:[]
        }
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    

    render()
    {
        const { employees } = this.state;

  if (!employees) {
    return <div>Loading...</div>; // Or show a loading indicator
  }

        return(
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Employee Address</th>
                                <th>Employee Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key={employee.id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.salary}</td>
                                        <td>
                                            <button className="btn btn-info">Update</button>
                                            <button className="btn btn-danger">Delete</button>
                                            <button className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            </div>
            </div>
        )
    }
}

export default Listofemployee;