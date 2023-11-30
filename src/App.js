import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import { DashboardProvider } from './components/DashboardContext';
import theme from './components/theme';
import './App.css';



function App() {
  return (
    <DashboardProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </DashboardProvider>
    
  );
}

export default App;
