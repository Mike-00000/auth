import React from "react";

function AboutSection() {
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)', 
        zIndex: 1, 
        borderRadius: '15px',
    };

    const h1style = {
        position: 'relative', 
        zIndex: 2, 
        fontSize: '35px',
        color: '#fff', 
        marginTop: '40px',
        marginBottom: '40px',
    }

    const textStyle = {
        position: 'relative',
        zIndex: 2, 
        fontSize: '18px',
        color: '#fff', 
        marginBottom: '45px',
    };
    
    return (
        <div className="about-section">
            <img src="/imgabout.avif" alt="organization_image" className="about-background" style={{ width: '100%', height: 'auto' }} />
            <div className="about-text-container">
                <div style={overlayStyle}></div>
                <h1 style={h1style}>About us</h1>
                <p style={textStyle}>Founded in the early 2000s, Let's Organize has become a leader in optimizing organizational efficiency for businesses.</p>
                <p style={textStyle}>Our mission is to enhance our clients' operational effectiveness through personalized solutions.</p>
                <p style={textStyle}>Leading companies trust us, which is a testament to our success and reputation. Our experienced team works closely with our clients 
                    to create customized strategies that enhance their competitiveness in the market.</p> 
                <p style={textStyle}>Our commitment to excellence and our ability to deliver tangible results have earned us enthusiastic recommendations from satisfied clients.</p> 
                <p style={textStyle}>At Let's Organize, we are committed to remaining at the forefront of organizational efficiency to assist our clients in achieving success.</p>
            </div>
        </div>
      
    );
  }

export default AboutSection;