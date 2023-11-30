import React, { useState } from 'react';

function AddUserToOrganizationForm() {
  const [userEmail, setUserEmail] = useState('');
  const [orgName, setOrgName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logique pour ajouter un utilisateur à une organisation
    console.log({ userEmail, orgName });
    const userData = { userEmail, orgName };

    try {
      const response = await fetch('http://127.0.0.1:5000/add-user-to-org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Ajouter le token JWT ici si nécessaire
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }

      const responseData = await response.json();
      console.log(responseData);
      // Ici, vous pouvez gérer la réponse, par exemple, afficher un message de succès

      // Réinitialisation du formulaire
      // Reset des champs du formulaire
      setUserEmail('');
      setOrgName('');
    } catch (error) {
      console.error('Error during submission:', error);
      // Gérer les erreurs, par exemple, afficher un message d'erreur
    }
  };

  return (
    <div>
      <h1>Add User to Organization</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="User Email"
          required
        />
        <input
          type="text"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder="Organization Name"
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserToOrganizationForm;
