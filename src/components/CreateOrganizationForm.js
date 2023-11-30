import React, { useState } from 'react';

function CreateOrganizationForm() {
  const [orgName, setOrgName] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orgData = { 
      name: orgName, 
      description, 
      country 
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/create-org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(orgData)
      });

      const data = await response.json();
      console.log(data);
      // Gérer la réponse ici, par exemple, afficher un message de succès ou d'erreur
    } catch (error) {
      console.error('Error:', error);
      // Gérer les erreurs de réseau ici
    }

    // Reset des champs du formulaire
    setOrgName('');
    setDescription('');
    setCountry('');
  };

  return (
    <div>
      <h1>Create Organization</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          placeholder="Organization Name"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateOrganizationForm;
