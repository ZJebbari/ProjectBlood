import React from 'react';

const Profile = () => {
  // Simulated user data
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    age: 30,
    country: 'USA',
  };

  return (
    <div>
      <h2>Mon Profil</h2>
      <p><strong>Prénom:</strong> {userData.firstName}</p>
      <p><strong>Nom:</strong> {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Âge:</strong> {userData.age}</p>
      <p><strong>Pays:</strong> {userData.country}</p>
    </div>
  );
}

export default Profile;
