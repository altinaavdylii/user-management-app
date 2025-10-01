import { Link } from 'react-router-dom';

function UserCard({ user, onDelete, showDetailsLink }) {
  if (!user) return null;

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      
      <div className="user-card-buttons">
        {showDetailsLink && (
          <Link to={`/user/${user.id}`} className="details-button">
            Details
          </Link>
        )}
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
