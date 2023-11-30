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
    <div>
      <h1>Dashboard Header</h1>
      <p>Welcome, {currentUser.firstName} {currentUser.lastName}</p>
      {/* {currentUser && (
        <p>Welcome, {currentUser.firstName} {currentUser.lastName}</p>
      )} */}
      {/* Vous pouvez ajouter ici d'autres informations contextuelles si nécessaire */}
    </div>
  );
}

export default DashboardHeader;
