import React, { useState, useEffect } from 'react';
import AddUserForm from '../components/AddUserForm';
import UserCard from '../components/UserCard';
import '../App.css';

function Home() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = (newUser) => {
    const userWithDefaults = {
      id: Date.now(), 
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone || "N/A",
      website: newUser.website || "N/A",
      address: {
        street: newUser.address?.street || "N/A",
        suite: newUser.address?.suite || "",
        city: newUser.address?.city || "",
        zipcode: newUser.address?.zipcode || "",
      },
      company: {
        name: newUser.company?.name || "N/A",
        catchPhrase: newUser.company?.catchPhrase || "",
        bs: newUser.company?.bs || ""
      }
    };
    setUsers([userWithDefaults, ...users]);
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowModal(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter(u => u.id !== userToDelete.id));
    setShowModal(false);
    setUserToDelete(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setUserToDelete(null);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>User Management</header>

      <AddUserForm onAddUser={handleAddUser} />

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by name, email, or company..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="users-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <UserCard 
              key={user.id} 
              user={user} 
              onDelete={() => handleDeleteClick(user)} 
              showDetailsLink={true} 
            />
          ))
        ) : (
          <p style={{color: 'white', textAlign: 'center'}}>No users found.</p>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Are you sure?</h2>
            <p>Do you really want to delete {userToDelete?.name}?</p>
            <div className="modal-buttons">
              <button className="confirm" onClick={confirmDelete}>Yes</button>
              <button className="cancel" onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
