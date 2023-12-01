import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { styled } from '@mui/styles';


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
      if (response.ok) {
        alert(data.message); // ou utiliser un composant de notification
        // Réinitialiser le formulaire ici si nécessaire
        setOrgName('');
        setDescription('');
        setCountry('');
      } else {
        alert(`Erreur : ${data.message}`); // ou utiliser un composant de notification pour afficher l'erreur
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur réseau s\'est produite'); // ou utiliser un composant de notification
    }

    // Reset des champs du formulaire
    setOrgName('');
    setDescription('');
    setCountry('');
  };

//   return (
//     <div>
//       <h1>Create Organization</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={orgName}
//           onChange={(e) => setOrgName(e.target.value)}
//           placeholder="Organization Name"
//           required
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Description"
//         />
//         <input
//           type="text"
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           placeholder="Country"
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }
return (
  <Paper style={{ padding: '2rem', margin: '2rem auto', width: '35%' }}>
    <Typography variant="h5">Create Organization</Typography>
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <TextField
        label="Organization Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Country"
        variant="outlined"
        fullWidth
        margin="normal"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <Box marginTop={2}>
        <Button type="submit" color="primary" variant="contained">
          Create
        </Button>
      </Box>
    </form>
  </Paper>
);
}

export default CreateOrganizationForm;
