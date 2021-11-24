import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8093/api/v1/employees";

class EmployeeServices {

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
}

export default new EmployeeServices();