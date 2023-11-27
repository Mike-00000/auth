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
      const token = localStorage.getItem('accessToken');
      if (token) {
        fetch('http://127.0.0.1:5000/user-info', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
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
        // Gérer les erreurs, par exemple en effaçant le token si non valide
    });
      }
  }, []);


    return (
        <DashboardContext.Provider value={{ currentUser, setCurrentUser, organizations, setOrganizations, users, setUsers }}>
          {children}
        </DashboardContext.Provider>
      );
    };

export default DashboardContext;
