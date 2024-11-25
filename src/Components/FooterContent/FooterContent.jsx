import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterContent = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#f8f9fa', padding: '30px 20px', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', maxWidth: '1200px', margin: '0 auto', }}>
        {/* Column 1 (Left) */}
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '1.5em', fontWeight: 'bold' }}>Luxury Travels</h3>
          <p style={{ lineHeight: '1.6' }}>For a Safe & Comfortable Journey</p>
        </div>


        {/* Column 2 (Center) */}
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'center', }}>
          <h3 style={{ marginBottom: '10px', fontSize: '1.5em', fontWeight: 'bold' }}>We Are Located At</h3>
          <p style={{ lineHeight: '1.6' }}>12-5/A Albut Building</p>
          <p style={{ lineHeight: '1.6' }}>Colombo 07, Sri Lanka</p>
        </div>

        {/* Column 3 (Right) */}
        <div style={{ flex: '1', minWidth: '250px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '1.5em', fontWeight: 'bold' }}>Connect With Us</h3>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f8f9fa', textDecoration: 'none', marginBottom: '8px' }}>
              <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px', color: '#4267B2' }} />Facebook
            </a>
          </p>
          <p>
            <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f8f9fa', textDecoration: 'none', marginBottom: '8px' }}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', color: '#25D366' }} />WhatsApp
            </a>
          </p>
          <p>
            <a href="mailto:info@luxurytravels.com" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f8f9fa', textDecoration: 'none', marginBottom: '8px' }}>
              📧 Email Us
            </a>
          </p>
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>📞 Phone: +123-456-7890</p>
        </div>

      </div>

      <div style={{ marginTop: '30px', textAlign: 'center', borderTop: '1px solid #495057', paddingTop: '10px', fontSize: '0.9em', color: '#adb5bd', }}>
        &copy; 2024 Luxury Travels. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterContent;
