import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 1234 Street Name, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.facebook.com" className="footer-link">Facebook</a> | 
            <a href="https://www.twitter.com" className="footer-link"> Twitter</a> | 
            <a href="https://www.instagram.com" className="footer-link"> Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Redux store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
