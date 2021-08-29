import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector(state => state.users)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {
          users?.map?.((user, i) => <li key={i}>{user.username}</li>)
        }
        {/* In addition, display the total number of users curently in the store */}
        Total Users: {users?.length ?? 0}
      </ul>
    </div>
  );
}

export default Users;
