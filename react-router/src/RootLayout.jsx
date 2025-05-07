import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Component/NavBar";
const RootLayout = () => {
    return (
        <>

            <NavBar />

            <Outlet />

        </>
    );
};

export default RootLayout;
