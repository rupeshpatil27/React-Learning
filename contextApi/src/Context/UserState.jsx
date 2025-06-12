import React from "react";
import UserContext from "./UserContext";

const UserState = ({ children }) => {
  const user = {
    name: "test1",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserState;
