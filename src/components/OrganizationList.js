import React, { useEffect, useState, useContext } from 'react';
import DashboardContext from './DashboardContext';
import { List, ListItem, ListItemText } from '@mui/material';

function OrganizationList() {
  const [organizations, setOrganizations] = useState([]);
  const { currentUser } = useContext(DashboardContext);

  useEffect(() => {
    if (currentUser) {
      fetch('http://127.0.0.1:5000/dashboard', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.organizations) {
          setOrganizations(data.organizations);
        }
      })
      .catch(error => console.error('Error:', error));
    }
  }, [currentUser]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '600px' }}>
      <h1>Organization List</h1>
      <h4>You will find below the organisations to which you belong</h4>
      {organizations.length === 0 ? (
        <p>You are not yet part of an organization</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {organizations.map(org => (
            <li key={org.id} className="organization-item" style={{ border: '1px solid #ddd', padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
            {org.name}
          </li>
          ))}
        </ul>
        // <List>
        //   {organizations.map(org => (
        //     <ListItem key={org.id}>
        //       <ListItemText primary={org.name} />
        //     </ListItem>
        //   ))}
        // </List>
      )}
    </div>
  );
}


export default OrganizationList;
