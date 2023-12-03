import React from "react";
import { Container, Typography, Grid, TextField, Button, FormControl } from "@mui/material";


function FeaturesSection() {
  return (
    <div className="features-section" style={{ position: "relative", minHeight: "110vh" }}>
      <img src="/imgfeatures3.avif" alt="features_image" className="features_bg" style={{ position: "absolute", width: "100%", height: "auto", zIndex: -1 }}></img>
        
        <div className="features_container" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', marginTop: "5%" }}>
            <h1 style={{ textAlign: "center", padding: "5%", fontSize: '35px' }}>Discover our features</h1>
            <div className="features_item" style={{ width: "100%", display: "flex", justifyContent: "space-around", marginBottom: "15%"}} >
                <div className="feature-item1" style={{ textAlign: "center" }}>
                <img src="/imgaddorg2.avif" alt="Feature 1" style={{ maxWidth: "80%", height: "auto" }} />
                <h2>Adding an organisation</h2>
                </div>
                <div className="feature-item2" style={{ textAlign: "center" }}>
                <img src="/imgadduser.avif" alt="Feature 2" style={{ maxWidth: "80%", height: "auto" }} />
                <h2>Adding a user</h2>
                </div>
            </div>

            {/* Formulaire visuel Material-UI */}
            <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "30px" }}>
                
            <Typography variant="h5">Want to know more ? Leave your email:</Typography>
            <TextField
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                InputLabelProps={{
                    style: {
                    //   backgroundColor: "white", // Fond de l'étiquette en blanc
                    borderColor: "white",
                    },
                  }}
                  style={{
                    // backgroundColor: "white", // Fond du champ en blanc
                    borderColor: "white", // Bordure en blanc

                  }}
    
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
            >
                Submit
            </Button>
            </div>
        </div>
      
    </div>
  );
}

export default FeaturesSection;
