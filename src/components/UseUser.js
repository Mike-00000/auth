// import { useState, useEffect } from 'react';

// function UseUser() {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         async function fetchUser() {
//             const token = localStorage.getItem('access_token');
//             console.log('Token from localStorage:', token);
//             if (token) {
//                 try {
//                     const response = await fetch('http://127.0.0.1:5000/user-info', {
//                         method: 'GET',
//                         headers: {
//                             'Authorization': `Bearer ${token}`,
//                             'Content-Type': 'application/json'
//                         }
//                     });
//                     console.log('Authorization header:', `Bearer ${token}`);
//                     if (!response.ok) throw new Error('Failed to fetch user');
//                     const data = await response.json();
//                     setUser(data);
//                 } catch (error) {
//                     console.error('Error fetching user:', error);
//                     // Gérer d'autres actions en cas d'erreur
//                 }
//             }
//             setLoading(false);
//         }
//         fetchUser();
//     }, []);

//     const logoutUser = () => {
//         setUser(null);
//         setLoading(false);
//     };

//     return { user, loading, logoutUser };
// }

// export default UseUser;