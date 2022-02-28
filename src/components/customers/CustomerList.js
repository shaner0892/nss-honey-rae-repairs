import React, { useEffect, useState } from "react";
//this module is responsible for displaying the customer list

export const CustomerList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [customers, modifyCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")
    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetch("http://localhost:8080/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    modifyCustomers(customerArray)
                })
        },
        []
    )
    // useEffect watches state variables and we define logic that should run when that state changes
    // so every time the customers array changes this runs again
    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
        <div>{totalCustomerMessage}</div>
            {/* //iterate customers and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                // slice is an array method that only shows a certain amount of an array (1-5)
                customers.slice(0, 5).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}