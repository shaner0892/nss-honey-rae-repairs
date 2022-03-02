import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Tickets.css"

//this module is responsible for displaying the employee list

export const TicketList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [tickets, modifyTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

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

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    return (
        <>
            <div>
                <button onClick={() => history.push("tickets/create")}>Create Ticket</button>
            </div>
            { active }
            {/* //iterate tickets and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                tickets.map(
                    (ticket) => {
                        //Write a ternary condition in the string template to apply the emergency CSS class if the ticket is an emergency.
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`ticket`} className={ticket.emergency ? 'emergency' : null}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}