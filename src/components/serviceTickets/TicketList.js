import React, { useEffect, useState } from "react";
//this module is responsible for displaying the employee list

export const TicketList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [tickets, modifyTickets] = useState([])

    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    modifyTickets(data)
                })
        },
        []
    )

    return (
        <>
            {/* //iterate tickets and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                tickets.map(
                    (ticketObject) => {
                        return <div key={`ticket--${ticketObject.id}`}>
                            <p>{ticketObject.description} submitted by {ticketObject.customer.name} and worked on by {ticketObject.employee.name}</p>
                            </div>
                    }
                )
            }
        </>
    )
}