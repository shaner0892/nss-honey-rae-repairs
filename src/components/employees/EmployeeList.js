import React, { useEffect, useState } from "react";
//this module is responsible for displaying the employee list

export const EmployeeList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [employees, modifyEmployees] = useState([])
    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    modifyEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
            {/* //iterate employees and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                employees.map(
                    (employeeObject) => {
                        return <h2 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h2>
                    }
                )
            }
        </>
    )
}