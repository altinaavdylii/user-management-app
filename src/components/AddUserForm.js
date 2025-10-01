import React, { useState } from 'react';

function AddUserForm({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    const newUser = {
      id: Date.now(),
      name,
      email,
      company: { name: company || 'Unknown Company' }
    };
    onAddUser(newUser);
    setName('');
    setEmail('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Company" 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
