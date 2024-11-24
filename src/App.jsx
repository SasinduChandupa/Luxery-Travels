import React from 'react';
import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import RentCarForm from "./Components/RentCarForm/RentCarForm";
import VehicleCards from "./Components/VehicleCards/VehicleCards";
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <HeaderContent />
      <BodyContent />
      <VehicleCards />
      <br />
      <br />
      <RentCarForm />
      <FooterContent />
    </div>
  );
}

export default App;
