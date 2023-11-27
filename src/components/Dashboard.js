import React from 'react';
import { DashboardProvider } from './DashboardContext';
import DashboardHeader from './DashboardHeader';
import CreateOrganizationForm from './CreateOrganizationForm';
import AddUserToOrganizationForm from './AddUserToOrganizationForm';
import OrganizationList from './OrganizationList';

function Dashboard() {
  return (
      <DashboardProvider>
        <DashboardHeader />
        <CreateOrganizationForm />
        <AddUserToOrganizationForm />
        <OrganizationList />
      </DashboardProvider>
  );
}
 
export default Dashboard;
