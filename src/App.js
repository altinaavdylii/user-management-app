import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              users={users} 
              onAddUser={handleAddUser} 
              onDeleteUser={handleDeleteUser} 
            />
          } 
        />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
