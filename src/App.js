import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (uId, uName, uAge) => {
    setUserList((prevState) => {
      return [...prevState, { key: uId, name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
