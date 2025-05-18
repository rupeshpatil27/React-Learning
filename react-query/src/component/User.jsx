import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addData, fetchData } from "../api/user"

const User = () => {
    const {
        data: userData,
        isLoading,
        isError,
    } = useQuery({ queryKey: ["users"], queryFn: fetchData, enabled: true });


    const { mutate, reset } = useMutation({ mutationFn: addData, })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const firstName = formData.get("firstName")
        console.log(firstName)
        mutate({ id: userData.length + 1, firstName })

        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="add firstName" />

                <button>Add</button>
            </form>
            {isLoading && "Loading...."}
            {isError?.message && isError?.message}

            {userData?.map((item, index) => (
                <div className="card" key={index}>
                    <span className="txt">{item.firstName}</span>
                </div>
            ))}
        </div>
    );
};

export default User;
