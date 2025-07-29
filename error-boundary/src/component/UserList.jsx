import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        async function getUserList() {
            try {
                const response = await fetch("https://dummyjson.com/users");

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                setFetchError(error.message);
            }
        }
        getUserList();
    }, []);

    if (fetchError) {
        return (
            <div style={{ color: "crimson" }}>
                <h3>Error fetching users:</h3>
                <p>{fetchError}</p>
            </div>
        );
    }

    if (!users) {
        return <p>Loading users...</p>;
    }

    return (
        <div className="w-full h-full relative py-2 px-2">
            User Count:{users?.length}

            {users.map((item, index) => (
                <div
                    className="bg-white mt-2 py-2.5 px-2.5 rounded-3xl"
                    key={index}
                >
                    {item.firstName}
                </div>
            ))}

        </div>
    );
};

export default UserList;
