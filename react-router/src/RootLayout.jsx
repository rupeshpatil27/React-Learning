import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Component/NavBar";
const RootLayout = () => {
    return (
        <>

            <div className="w-full h-full">
                <NavBar />

               <div className="pt-40">
                 <Outlet />
               </div>
            </div>


        </>
    );
};

export default RootLayout;
