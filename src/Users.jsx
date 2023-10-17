import User from "./User";
import React, { useState } from "react";

function Users() {
  const initUsers = [
    { id: 1, name: "djamal", surname: "balaev", age: 24, isEdit: false },
    { id: 2, name: "vova", surname: "smirnov", age: 31, isEdit: false },
    { id: 3, name: "halid", surname: "deniev", age: 35, isEdit: false },
  ];

  const [users, setUsers] = useState(initUsers);

  function toggleMode(idUser) {
    setUsers(
      users.map((user) => {
        if (user.id === idUser) {
          return { ...user, isEdit: !user.isEdit };
        }
        return user;
      })
    );
  }

  function editUser(id, field, value) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, [field]: value };
        }
        return user;
      })
    );
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <User user={user} toggleMode={toggleMode} editUser={editUser} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
