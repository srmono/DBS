import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from './services/EmployeeService';

function ListEomployee() {

    const [employees, setEmployees ] = useState([]);

    useEffect( () => {
        EmployeeService
            .getAllEmployees()
            .then( response => {
                setEmployees(response.data);
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    return (
        <div className="container">
            <h2 className="text-center">Employees List</h2>
            <Link to="/add-employee" className="btn btn-primary mb-2"> Add Employee </Link>
            <table className="table table-bordered table-striped">
                <thead class="table-dark">
                    <tr>
                        <th> Emplyee Id</th>
                        <th> Employee First Name</th>
                        <th> Employee Last Name</th>
                        <th> Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employees.map(
                                employee => (
                                    <tr key={employee.id}>
                                        <td>{ employee.id}</td>
                                        <td> {employee.firstName} </td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default ListEomployee
