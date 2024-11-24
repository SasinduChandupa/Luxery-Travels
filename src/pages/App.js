import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import Online from "./Components/Online/Online";
import './App.css';

function App() {

  const styles_dev = {
    color: 'red', fontFamily: 'fancy', fontSize: '2rem'
  }

  return (
    <Router>
      <div id="wrapper">
        <HeaderContent />
        <Routes>
          <Route path="/" element={
            <BodyContent>
              <h1 style={styles_dev}>Educated Premier Online Institute</h1>
              <br />
              <p className="p1">Discover the ultimate online learning experience at Best Learn Education, where quality meets convenience. Our institute offers expertly crafted courses across a wide range of subjects, empowering students to learn at their own pace. Join a vibrant community of learners, gain new skills, and unlock your potential from anywhere in the world.</p>
              <br /><br />
              <Link to="/online">
                <button style={{
                  fontWeight: 'bold',
                  padding: '10px 30px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  border: '1px solid #333',
                  backgroundColor: '#f0f0f0',
                  transition: 'background-color 0.3s ease, transform 0.2s ease',
                  borderRadius: '12px'
                }}>Online Lecturers</button>
              </Link>
              <br /><br />
            </BodyContent>
          } />
          <Route path="/online" element={<Online />} />
        </Routes>
        <FooterContent />
      </div>
    </Router>
  );
}

export default App;
