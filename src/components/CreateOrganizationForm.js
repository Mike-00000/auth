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
        alert(data.message); 
        setOrgName('');
        setDescription('');
        setCountry('');
      } else {
        alert(`Erreur : ${data.message}`); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Une erreur réseau s\'est produite'); 
    }

    setOrgName('');
    setDescription('');
    setCountry('');
  };

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
