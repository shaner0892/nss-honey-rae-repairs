import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllServiceTickets } from "../ApiManager";
import "./Tickets.css"


export const TicketList = () => {
    const [tickets, modifyTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    //save the fetch function to a variable so that you can invoke it multiple places without repeating code
    const fetchServiceTickets = () => {
        getAllServiceTickets()
            .then(modifyTickets)
    }
    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetchServiceTickets()
        },
        []
    )

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    //this function deletes from the API and then invokes the above function to fetch the new service tickets
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(()=> {
            fetchServiceTickets()
        })
    }
    
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
                            <p className={`ticket ${ticket.emergency ? 'emergency' : null}`}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                            <button onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button>
                        </div>
                    }
                )
            }
        </>
    )
}