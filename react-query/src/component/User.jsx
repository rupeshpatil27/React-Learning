import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api/user"

const User = () => {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["users"], queryFn: fetchData, enabled: true });
  return (
    <div>
      {isLoading && "Loading...."}
      {isError?.message && isError?.message}

      {userData?.users?.map((item, index) => (
        <div className="card" key={index}>
          <span className="txt">{item.firstName}</span>
        </div>
      ))}
    </div>
  );
};

export default User;
