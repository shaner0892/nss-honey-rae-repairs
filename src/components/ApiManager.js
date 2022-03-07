// This modules single responsibility is to define all fetch calls

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllServiceTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}

export const createTicket = (newTicket) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicket)
    }
    return fetch("http://localhost:8088/serviceTickets", fetchOption)
}

export const registerCheck = (customer) => {
    return fetch(`http://localhost:8088/customers?email=${customer.email}`)
    .then(res => res.json())
}
