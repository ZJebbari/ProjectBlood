import React, { useState } from 'react';

const EditProfile = () => {
  // Simulated initial user data
  const initialUserData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    age: 30,
    country: 'USA',
  };

  // State to manage user data
  const [userData, setUserData] = useState(initialUserData);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to update the user data
    console.log('Updated user data:', userData);
  };

  return (
    <div>
      <h2>Modifier le Profil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Prénom:</label>
          <input type="text" name="firstName" value={userData.firstName} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nom:</label>
          <input type="text" name="lastName" value={userData.lastName} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Âge:</label>
          <input type="number" name="age" value={userData.age} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Pays:</label>
          <input type="text" name="country" value={userData.country} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
}

export default EditProfile;
