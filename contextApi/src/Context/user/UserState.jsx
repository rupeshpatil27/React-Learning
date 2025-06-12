import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = ({ children }) => {
  const [state, setState] = useState(
    []
  )

  const addUser = (data) => {
    setState(() => [...state, data])
  }

  return <UserContext.Provider value={{ userState: state, addUser: addUser }}> {children}</UserContext.Provider >;
};

export default UserState;
