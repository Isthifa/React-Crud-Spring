import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api";

class EmployeeService {
    
        getEmployees(){
            return axios.get(EMPLOYEE_API_BASE_URL+"/employees");
        }

        createEmployee(employee){
            return axios.post(EMPLOYEE_API_BASE_URL+"/save", employee);
        }
        deleteEmployee(employeeId){
            return axios.delete(EMPLOYEE_API_BASE_URL +"/delete/"+ employeeId);
        }
    }
const employeeService = new EmployeeService();
console.log(employeeService.getEmployees());
export default employeeService;