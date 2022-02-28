import React, { useEffect, useState } from "react";
//this module is responsible for displaying the employee list

export const EmployeeList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [employees, modifyEmployees] = useState([])
    const [specialties, setSpecial] = useState("")
    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetch("http://localhost:8080/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    modifyEmployees(employeeArray)
                })
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
            Specialties: { specialties }
        </div>
            {/* //iterate employees and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                employees.map(
                    (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                    }
                )
            }
        </>
    )
}