import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const HireEmployee = () => {
    const history = useHistory()
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    });

    const hireEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //you cannot send JavaScript objects across HTTP so you have to send it in strings/stringify
            body: JSON.stringify(newEmployee)
        }

        //fetch the list of employees from the API
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        //this onChange function is an event listener that uses the setter function from above 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Technical Specialty"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-hire" onClick={hireEmployee}>
                Finish Hiring
            </button>
        </form>
    )
}