import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details-page">
      <Link to="/" className="back-button">← Back</Link>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>Address</h3>
      <p>{user.address?.street}, {user.address?.suite}</p>
      <p>{user.address?.city}, {user.address?.zipcode}</p>
      <p>Geo: Lat {user.address?.geo?.lat}, Lng {user.address?.geo?.lng}</p>

      <h3>Company</h3>
      <p><strong>Name:</strong> {user.company?.name}</p>
      <p><strong>CatchPhrase:</strong> {user.company?.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company?.bs}</p>
    </div>
  );
}

export default UserDetails;
