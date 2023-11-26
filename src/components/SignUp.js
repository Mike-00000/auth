import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    modalContent: {
      position: 'absolute',
      top: '30%',
      left: '85%',
      transform: 'translate(-50%, -50%)',
      width: '12%', 
      backgroundColor: 'white',
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
      borderRadius: 15,
    },
    
  }));

function SignUp() {
    const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [serverError, setServerError] = useState('');
  const [networkError, setNetworkError] = useState('');
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasNonAlphas = /\W/.test(password);
    const isLengthValid = password.length >= 8;
  
    return hasUpperCase && hasLowerCase && hasNumbers && hasNonAlphas && isLengthValid;
  }
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');


    setValidationError('');
    setServerError('');
    setNetworkError('');

    if (!validatePassword(password)) {
        setValidationError('Password must meet the criteria.');
        return;
      }
  
    if (!email.includes('@') || password.length < 8) {
        setValidationError('Invalid email or password. Please try again.');
      return;
    }

    if (password !== confirmPassword) {
        setValidationError('Passwords do not match.');
        return;
      }
  
    try {
      
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, first_name, last_name }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Successful connection:', data);
        localStorage.setItem('accessToken', data.accessToken); 
        event.target.email.value = '';
        event.target.password.value = '';
        event.target.confirmPassword.value = '';
        handleClose();
        navigate('/dashboard');
        const token = localStorage.getItem('accessToken');

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
      <Button color="inherit" onClick={handleOpen}>SignUp</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.modalContent}>
            <form onSubmit={handleSubmit}>
                <TextField name="first_name" label="First Name" type='text' required />
                <TextField name="last_name" label="Last Name" type='text' required />
                <TextField name="email" label="Email" type="email" required />
                <TextField name="password" label="Password" type="password" required />
                <TextField name="confirmPassword" label="Confirm Password" type="password" required />
                {validationError && <div style={{ color: 'red', marginTop: '10px' }}>{validationError}</div>}
                {serverError && <div>{serverError}</div>}
                {networkError && <div>{networkError}</div>}
                <Button type="submit">Create Account</Button>
            </form>
        </div>
        
      </Modal>
    </div>
  );
}

export default SignUp;
