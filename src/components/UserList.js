import React from "react";
import { Link } from "react-router-dom";

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid gray",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company?.name || "N/A"}</p>
          <Link to={`/user/${user.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
