import React, { useContext } from 'react';
import DashboardContext from './DashboardContext';

function DashboardHeader() {
  const { currentUser } = useContext(DashboardContext);

  console.log(currentUser);

  return (
    <div>
      <h1>Dashboard Header</h1>
      {currentUser && (
        <p>Welcome, {currentUser.firstName} {currentUser.lastName}</p>
      )}
      {/* Vous pouvez ajouter ici d'autres informations contextuelles si nécessaire */}
    </div>
  );
}

export default DashboardHeader;
