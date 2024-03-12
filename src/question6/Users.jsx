import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "./usersSlice";
import { useState } from "react";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);

  const [newUserName, setNewUserName] = useState("");

  const handleAddUser = () => {
    dispatch(addUser(newUserName));
    setNewUserName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter username"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
