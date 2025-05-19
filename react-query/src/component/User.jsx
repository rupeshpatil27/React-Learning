import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addData, fetchData } from "../api/user";

const User = () => {
    const [page, setPage] = useState(1);

    const {
        data: userData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["users", page],
        queryFn: () => fetchData(page),
        enabled: true,
        // gcTime:1000,   default time is 5 sec
        staleTime: 10000
    });

    const queryClient = useQueryClient();

    const { mutate, reset } = useMutation({
        mutationFn: addData,
        onMutate: () => {
            return { id: 1 };
        },
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ["users"], exact: true });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get("firstName");
        console.log(firstName);
        mutate({ id: userData.data.length + 1, firstName });

        e.target.reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
                <input type="text" name="firstName" placeholder="add firstName" />

                <button>Add</button>
            </form>
            {isLoading && "Loading...."}
            {isError?.message && isError?.message}
            <div className="pages">
                <button
                    onClick={() => setPage((oldPage) => Math.max(oldPage - 1, 0))}
                    disabled={!userData?.prev}
                >
                    Prev
                </button>
                <span>{page}</span>
                <button
                    onClick={() => setPage((oldPage) => oldPage + 1)}
                    disabled={!userData?.next}
                >
                    next
                </button>
            </div>
            {userData?.data?.map((item, index) => (
                <div className="card" key={index}>
                    <span className="txt">{item.firstName}</span>
                </div>
            ))}
        </div>
    );
};

export default User;
