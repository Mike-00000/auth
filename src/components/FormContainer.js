import React from "react";
import { Box } from '@mui/material';
import CreateOrganizationForm from "./CreateOrganizationForm";
import AddUserToOrganizationForm from "./AddUserToOrganizationForm";

function FormContainer({ currentUser }) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        flexWrap="wrap" 
        gap={0} 
        padding={0} 
        style={{ width: '80%', margin: '0 auto' }}> 
        <CreateOrganizationForm user={currentUser} style={{ width: '45%' }} />
        <AddUserToOrganizationForm user={currentUser} style={{ width: '45%' }} /> 
      </Box>
    );
  }
  
  export default FormContainer;