import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Component/NavBar";
const RootLayout = () => {
    return (
        <>

            <div className="w-full h-full">
                <NavBar />

                <Outlet />
            </div>


        </>
    );
};

export default RootLayout;
