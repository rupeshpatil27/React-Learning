import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function getUserList() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/uses"
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                throw new Error("Failed to fetch users:", error);
            }
        }
        getUserList();

    }, []);

    // Log usersList after it's updated
    useEffect(() => {
        if (users) {
            console.log("Fetched users list:", users);
        }
    }, [users]);

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            User Count:{users?.length}

            {users ? (
                <ul className="w-full">
                    {users.map((item, index) => (
                        <li className="bg-white w-full mt-2 py-5 px-5 rounded-3xl" key={index}>{item.firstName}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading users...</p>
            )}

        </div >
    );
};

export default UserList;
