import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    modalContent: {
      position: 'absolute',
      top: '20%',
      left: '85%',
      transform: 'translate(-50%, -50%)',
      width: '12%', 
      backgroundColor: 'white',
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
      borderRadius: 15,
    },
    
  }));

function SignIn() {
    const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [serverError, setServerError] = useState('');
  const [networkError, setNetworkError] = useState('');
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setValidationError('');
    setServerError('');
    setNetworkError('');
  
    if (!email.includes('@') || password.length < 6) {
        setValidationError('Invalid email or password. Please try again.');
      return;
    }
  
    try {
      
      const response = await fetch('http://127.0.0.1:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Successful connection:', data);
        localStorage.setItem('accessToken', data.accessToken); 
        handleClose();
        navigate('/dashboard');

      } else {
        console.error('Server error:', data.message);
        setServerError(data.message || "An error occurred during the connection. Please try again.");
      }
    } catch (error) {
        console.error('Network error:', error.message);
        setNetworkError("Unable to connect to the server. Please check your internet connection and try again.");

    }
  };
  

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>SignIn</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modalContent}>
            <form onSubmit={handleSubmit}>
            <TextField name="email" label="Email" type="email" required />
            <TextField name="password" label="Password" type="password" required />
            {validationError && <div>{validationError}</div>}
            {serverError && <div>{serverError}</div>}
            {networkError && <div>{networkError}</div>}
            <Button type="submit">Login</Button>
            </form>
        </div>
        
      </Modal>
    </div>
  );
}

export default SignIn;
