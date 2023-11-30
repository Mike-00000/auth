import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import UseUser from './UseUser';
import DashboardContext from './DashboardContext';

const useStyles = makeStyles((theme) => ({
    logo: {
      maxWidth: '150px',
      marginRight: '20px'
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    }
}));  
  

function Navbar() {
  const { currentUser, setCurrentUser } = useContext(DashboardContext);
    // const { user, loading, logoutUser } = UseUser();
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();

    const isAuthenticated = !!currentUser;

    const handleLogout = () => {
      setCurrentUser(null);
      localStorage.removeItem('access_token'); // Supprime le jeton d'accès
      // UseUser(null); // Réinitialise l'état de l'utilisateur
      // logoutUser();
      navigate('/'); // Redirige vers la page d'accueil
  };
    
    return (
        <AppBar position="static" style={{ backgroundColor: theme.palette.customColor1 }}>
          <Toolbar className={classes.toolbar} >
              <img src="/logolo.png" alt="Logo" className={classes.logo} />
              <Typography variant="h6" className={classes.title}>
              Enhance Performance through Better Organization
              </Typography>
              {isAuthenticated ? (
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              ) : (
                <>
                  <SignIn />
                  <SignUp />
                </>
              )}
          </Toolbar>
        </AppBar>
    );
}

export default Navbar;
