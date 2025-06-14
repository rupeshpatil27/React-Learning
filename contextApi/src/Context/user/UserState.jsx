import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = ({ children }) => {
  const [state, setState] = useState(
    { users: [] }
  );

  const addUser = (data) => {
    setState(prevState => ({
      ...prevState,
      users: [...prevState.users, data]
    }));
  };

  const userList = (data) => {
    setState(prevState => ({
      ...prevState,
      users: [...prevState.users, ...data]
    }));
  };

  return (
    <UserContext.Provider value={{ userState: state, addUser: addUser, userList: userList }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
