import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of employeeId change
    )

    return (
        <>
            <section className="employee">
                <h2 className="employee__name">{employee.name}</h2>
                <p className="employee__specialty">Specialty is {employee.specialty}</p>
            </section>
        </>
    )
}
//adding a ? after customer and employee is called optional chaining; only if that property exists will it show up