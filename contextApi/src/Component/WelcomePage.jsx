import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
// import { Consumer } from "../Context";

const WelcomePage = () => {
    const name = useContext(UserContext)
    return (
        <div>
            <h1>Welcome User :</h1>
            {/* <Consumer> */}
            {/* {(value) => ( */}
            <h2>
                Name: {name.name} (use Context hook)
            </h2>
            {/* )} */}
            {/* </Consumer> */}
        </div>
    );
};

export default WelcomePage;