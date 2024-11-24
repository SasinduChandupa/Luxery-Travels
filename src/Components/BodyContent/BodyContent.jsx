import React from 'react';

const BodyContent = () => {
  const styles_dev = { color: 'red', fontFamily: 'fancy', fontSize: '2rem', textAlign: 'center' };

  return (
    <main style={{ padding: '20px' }}>
      <div style={{ color: 'blue', fontFamily: '"Dancing Script", cursive', fontSize: '4rem', textAlign: 'center', fontWeight: 'bold', textTransform: 'capitalize' }}> Luxery Travels</div>
      <br />
      <h1 style={styles_dev}>For a Safe & Comfortable journey</h1>
      <br />
      <div className="container" style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '1.5rem', backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '10px', borderRadius: '16px', color: 'black' }}>
        <p className="p1">Rent a car today and enjoy the freedom to explore your destination. Affordable rates, a wide range of vehicles, and reliable service ensure a smooth, comfortable travel experience. Book now!</p>
      </div>
      <br />
      <br />
    </main>
  );
};

export default BodyContent;
