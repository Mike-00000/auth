import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

const DashboardContext = React.createContext();

export const DashboardProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    console.log("currentUser", currentUser);
    const [organizations, setOrganizations] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (token) {
        fetch('http://127.0.0.1:5000/user-info', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Token not valid or expired');
        }
        return response.json();
    })
    .then(data => {
        if (data && data.firstName && data.lastName) {
            setCurrentUser({
                firstName: data.firstName,
                lastName: data.lastName
                // Ajoutez d'autres champs si nécessaire
            });
        }
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('access_token'); // Effacer le token invalide
        navigate('/login'); // Rediriger vers la page de connexion
    });
      }
  }, [navigate]);

  const addOrganization = (newOrg) => {
    setOrganizations(prevOrgs => [...prevOrgs, newOrg]);
};

    const deleteUser = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
};

    return (
        <DashboardContext.Provider value={{ 
            currentUser, 
            setCurrentUser, 
            organizations, 
            addOrganization, 
            users, 
            deleteUser 
        }}>
          {children}
        </DashboardContext.Provider>
      );
    };

export default DashboardContext;
