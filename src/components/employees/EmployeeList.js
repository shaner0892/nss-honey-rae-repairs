import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllEmployees } from "../ApiManager";


export const EmployeeList = () => {
    const [employees, modifyEmployees] = useState([])
    const [specialties, setSpecial] = useState("")
    const history = useHistory()

    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            getAllEmployees()
                .then(modifyEmployees)
        },
        []
    )

    useEffect(() => {
        /*
            1. Use .map() to get the specialty of each employee
            2. Then update a state variable to be a comma-separated string
                (e.g. "iPhone, Printers, ...")
        */
        const justSpecialties = employees.map(employeeObject => employeeObject.specialty)
        setSpecial(justSpecialties.join(", "))
    }, [employees])

    return (
        <>
        <div>
                <button onClick={() => history.push("employees/hire")}>Hire Employee</button>
            </div>
        <div>
            Specialties: { specialties }
        </div>
            {/* //iterate employees and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}><Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}