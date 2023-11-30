import React, { useContext } from 'react';
// import { DashboardProvider, DashboardContext } from './DashboardContext';
import DashboardContext from './DashboardContext';
import { DashboardProvider } from './DashboardContext';
import DashboardHeader from './DashboardHeader';
import CreateOrganizationForm from './CreateOrganizationForm';
import AddUserToOrganizationForm from './AddUserToOrganizationForm';
import OrganizationList from './OrganizationList';
// import UseUser from './UseUser'

function Dashboard() {
  // const { user, loading } = UseUser();
  const { currentUser } = useContext(DashboardContext);

  // if (loading) {
  //     return <div>Loading...</div>;
  // }

  // if (!user) {
  //     return <div>Utilisateur non trouvé</div>;
  // }

  if (!currentUser) {
    return <div>Utilisateur non trouvé</div>;
  }

  return (
    <div>
        <DashboardHeader />
        {/* <h1>Tableau de bord</h1>
        <p>Bienvenue, {user.firstName} {user.lastName}</p> */}
        {/* Autres éléments de votre tableau de bord */}
        <CreateOrganizationForm user={currentUser} />
        <AddUserToOrganizationForm user={currentUser} />
        <OrganizationList user={currentUser} />
    </div>
  );
}
 
export default Dashboard;
