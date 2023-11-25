import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
    const classes = useStyles();
    const theme = useTheme();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      setIsAuthenticated(!!token); // Convertit la présence du token en valeur booléenne
  }, []);
    const handleLogout = () => {
      localStorage.removeItem('accessToken'); // Supprime le jeton d'accès
      setIsAuthenticated(false);
      navigate('/'); // Redirige vers la page d'accueil
  };
    
    return (
        <AppBar position="static" style={{ backgroundColor: theme.palette.customColor1 }}>
          <Toolbar className={classes.toolbar} >
              <img src="/logolo.png" alt="Logo" className={classes.logo} />
              <Typography variant="h6" className={classes.title}>
              Enhance Performance through Better Organization
              </Typography>
              <SignIn />
              <SignUp />
          </Toolbar>
        </AppBar>
    );
}

export default Navbar;
