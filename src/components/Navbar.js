import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import SignIn from './SignIn';
import SignUp from './SignUp';
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
    const classes = useStyles();
    const theme = useTheme();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      setIsAuthenticated(!!token); // Convertit la présence du token en valeur booléenne
  }, []);
    const handleLogout = () => {
      setCurrentUser(null);
      localStorage.removeItem('accessToken'); // Supprime le jeton d'accès
      navigate('/'); // Redirige vers la page d'accueil
  };
    
    return (
        <AppBar position="static" style={{ backgroundColor: theme.palette.customColor1 }}>
          <Toolbar className={classes.toolbar} >
              <img src="/logolo.png" alt="Logo" className={classes.logo} />
              <Typography variant="h6" className={classes.title}>
              Enhance Performance through Better Organization
              </Typography>
              {currentUser ? (
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
