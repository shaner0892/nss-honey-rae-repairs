import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"
import { CustomerList } from "./customers/CustomerList"
import { TicketForm } from "./serviceTickets/TicketForm"
import { HireEmployee } from "./employees/HireEmployee"
import { Ticket } from "./serviceTickets/Ticket"
import { Employee } from "./employees/Employee"
//This is a Controller Component. Its only responsibility to to control the behavior of the system and maps URLs to components.
//In the ApplicationViews component, you will define how your application will respond when the URL matches each of those patterns. When a user clicks on one of the hyperlinks in the navigation bar, this code dictates which component should be rendered.
//responsibility is to determine which view of the application should be rendered 
//route is a component and listens for the event
//The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element.
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>

            <Route path="/employees/hire">
                <HireEmployee />
            </Route>
        </>
    )
}

//to capture whatever comes after, you use "/:ticketId", react captures that number and stores it in the ticketId variable
//(\d+) makes sure it is a number before invoking