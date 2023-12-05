import React, { useContext } from 'react';
// import UseUser from './UseUser';
import DashboardContext from './DashboardContext';

function DashboardHeader() {
  const { currentUser } = useContext(DashboardContext);
  // const { user, loading } = UseUser();

  if (!currentUser) {
    return <div>Utilisateur non trouvé</div>;
  }

//   if (loading) {
//     return <div>Chargement...</div>;
// }

//   if (!user) {
//       return <div>Utilisateur non trouvé</div>;
// }
  // const { currentUser } = useContext(DashboardContext);

  // console.log(currentUser);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Dashboard</h1>
      <h3>Welcome, {currentUser.firstName} {currentUser.lastName}!</h3>
      <p>What do you want to do?</p>
    </div>
  );
}

export default DashboardHeader;
