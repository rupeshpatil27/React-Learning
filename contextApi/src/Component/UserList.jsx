import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/user/UserContext";

const UserList = () => {
    const { userState, addUser, userList } = useContext(UserContext);

    const [state, setState] = useState({
        firatName: "",
        lastName: "",
        age: "",
    });

    const handleChange = (e, key) => {
        const value = key === "age" ? Number(e.target.value) : e.target.value;
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleAddUser = () => {
        addUser(state);
        setState({ firstName: "", lastName: "", age: "" });
    };


    useEffect(() => {
        async function getUserList() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/users"
                );
                const data = await response.json();
                userList(data.users);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        }
        getUserList();

    }, []);

    useEffect(() => {
        console.log(userState)
    }, [userState])


    return (
        <div className="h-full w-[50rem] bg-white py-5 px-5 rounded-3xl flex flex-col items-center justify-center gap-5">
            User Count:{userState.length}
            <ul className="flex items-center justify-center gap-2">
                {Object.keys(state).map((keys, index) => (

                    <input
                        key={index}
                        className="py-2 px-2 w-50 bg-blue-200 border-0 outline-0"
                        value={state[keys]}
                        onChange={(e) => handleChange(e, keys)}
                        placeholder={keys}
                        type={keys === "age" ? "number" : "text"}
                    />

                ))}
            </ul>

            <button className='px-10 py-4 bg-blue-500 rounded-3xl' onClick={handleAddUser}>Add</button>
            <ul className="overflow-y-scroll h-[20rem]">
                {userState.users.map((item, index) => (
                    <li key={index}>{item.firstName}</li>
                ))}
            </ul>
        </div >
    );
};

export default UserList;
