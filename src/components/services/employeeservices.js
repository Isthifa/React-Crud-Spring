import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {
    
        getEmployees(){
            return axios.get(EMPLOYEE_API_BASE_URL);
        }
    }
const employeeService = new EmployeeService();
console.log(employeeService.getEmployees());
export default employeeService;