// src/components/footer.tsx
import React from 'react';
// import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#121212', color: '#E0E0E0', padding: '20px', marginTop: '100px' }}>
      <div className="container">
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
            <h4 style={{ marginRight: '10px' }}>Follow Us</h4>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px' }}>
              <FaFacebook size={24} color="#E0E0E0" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px' }}>
              <FaTwitter size={24} color="#E0E0E0" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px' }}>
              <FaInstagram size={24} color="#E0E0E0" />
            </a>
          </div>
          <div className="col" style={{ textAlign: 'right' }}>
            <h4>Contact Us</h4>
            <p>Email: info@educationalapp.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>&copy; 2024 Educational App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;