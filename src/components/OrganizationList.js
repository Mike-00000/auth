import React, { useEffect, useState } from 'react';

function OrganizationList() {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    // Ici, vous feriez une requête au backend pour obtenir les organisations
    // Exemple :
    // fetch('/api/organizations').then(res => res.json()).then(data => setOrganizations(data));
  }, []);

  return (
    <div>
      <h1>Organization List</h1>
      <ul>
        {organizations.map(org => (
          <li key={org.id}>{org.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrganizationList;
