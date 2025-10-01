import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-details-page">
      <Link to="/" className="back-button">Back</Link>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email || "N/A"}</p>
      <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
      <p><strong>Website:</strong> {user.website || "N/A"}</p>
      <p>
        <strong>Address:</strong> 
        {user.address?.street ? `${user.address.street}, ${user.address.city}` : "N/A"}
      </p>
      <p>
        <strong>Company:</strong> {user.company?.name || "N/A"}
      </p>
    </div>
  );
}

export default UserDetailsPage;
