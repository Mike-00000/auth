import React from "react";

function HomeIntro() {
    return (
        <div style={{ position: 'relative', textAlign: 'center' }}>
        <img src="/imgorg.avif" alt="organization_image" style={{ width: '100%', height: 'auto' }} />
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 70%)'
        }}></div>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: '#d3c7ab' }}>
            <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontSize: '3rem', fontFamily: 'Arial, sans-serif' }}>Welcome to our website</h1>
            <h3 style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Discover our unique services and features.</h3>
        </div>
        
        
      </div>
    );
  }

export default HomeIntro;