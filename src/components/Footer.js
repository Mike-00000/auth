import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>Founded in 2003</p>
          <p>Enhance Performance through Better Organization</p>
        </div>
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
            {/* Add other links as needed */}
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><strong>Email:</strong> contact@letsorganize.com</p>
          <p><strong>Phone:</strong> +972 53 331 1979</p>
          {/* Add other contact information if needed */}
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} LET'S ORGANIZE | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
