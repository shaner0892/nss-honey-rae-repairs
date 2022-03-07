import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";

//this module is your new main.js, it should be general layout
//Repairs is a container component. It renders no HTML itself. It simply contains other components that are responsible for the presentation and behavior of the application. In the case of our Kennel, it contains two different kinds of components.
//In JSX you don't need curly braces or parentheses for a function; you just need the fragment syntax
export const Repairs = () => <>
    <Route
        render={() => {
            if (localStorage.getItem("honey_customer")) {
                return (
                <>
                    <NavBar />
                    <ApplicationViews />
                </>
                );
            } else {
                return <Redirect to="/login" />;
            }
        }}
    />

    <Route path="/login">
        <Login />
    </Route>
    <Route path="/register">
        <Register />
    </Route>
    </>
;