import React, { useState } from "react";
import '../../App.css';

const carPrices = {
  "BMW 520d": 100,
  "AXIO": 70,
  "Premio": 80,
  "Prado TX": 120,
  "Range Rover": 150,
  "Alto K10": 40,
  "WagonR": 50,
  "KDH": 90,
  "Mercedes Benz Sprinter": 140,
  "Rosa A/C Bus": 200,
  "Bike(M)": 30,
  "Bike(F)": 25,
};

function RentCarForm() {
  const [carModel, setCarModel] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [days, setDays] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [pno, setPno] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
    calculatePrice(event.target.value, days);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
    calculateDays(event.target.value, dropoffDate);
  };

  const handleDropoffDateChange = (event) => {
    setDropoffDate(event.target.value);
    calculateDays(pickupDate, event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNicChange = (event) => {
    setNic(event.target.value);
  };

  const handlePnoChange = (event) => {
    setPno(event.target.value);
  };

  const calculateDays = (startDate, endDate) => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInTime = end - start;

      if (differenceInTime >= 0) {
        const calculatedDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
        setDays(calculatedDays);
        calculatePrice(carModel, calculatedDays);
      } else {
        setDays(0);
        setPrice(0);
      }
    }
  };

  const calculatePrice = (model, numDays) => {
    if (model && carPrices[model] && numDays > 0) {
      setPrice(carPrices[model] * numDays);
    } else {
      setPrice(0);
    }
  };

  const handleSubmit = () => {
    if (carModel && pickupDate && dropoffDate && days > 0 && name && nic && pno) {
      alert(
        `Booking Confirmed...!
         Full Name:____${name}
         NIC NO:_______${nic}
         Phone No:_____${pno}
         Car:____________${carModel}
         Pick-up:________${pickupDate}
         Drop-off:_______${dropoffDate}
         Days:___________${days}
         Price:___________$${price}`
      );
    } else {
      alert("Please complete the form correctly.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div style={{ backgroundColor: "#ff6a00", color: "white", width: "90%", maxWidth: "500px", margin: "0px 0px", padding: "20px", borderRadius: "8px", textAlign: "center", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <h1 style={{ fontSize: "20px", marginBottom: "20px" }}>RENT A CAR NOW!</h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", marginBottom: "20px" }}>
          <div style={{ display: "block", marginBottom: "8px" }}>
            <label htmlFor="car-model" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>CAR MODEL</label>
            <select id="car-model" value={carModel} onChange={handleCarModelChange} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
              <option value="" disabled>Select Car Model</option>
              {Object.keys(carPrices).map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          <div style={{ display: "block", marginBottom: "8px" }}>
            <label htmlFor="pickup-date" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>PICK-UP DATE</label>
            <input type="date" id="pickup-date" value={pickupDate} min={today} onChange={handlePickupDateChange} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "block", marginBottom: "8px" }}>
            <label htmlFor="dropoff-date" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>DROP-OFF DATE</label>
            <input type="date" id="dropoff-date" value={dropoffDate} min={pickupDate || today} onChange={handleDropoffDateChange} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "block", marginBottom: "8px" }}>
            <label htmlFor="pickup-location" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>PICK-UP LOCATION</label>
            <input type="text" id="pickup-location" placeholder="Enter pickup location" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "block", marginBottom: "8px" }}>
            <label htmlFor="dropoff-location" style={{ display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "bold" }}>DROP-OFF LOCATION</label>
            <input type="text" id="dropoff-location" placeholder="Enter drop-off location" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label htmlFor="name" style={{ fontSize: "14px", fontWeight: "bold" }}>Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Enter your full name" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label htmlFor="nic" style={{ fontSize: "14px", fontWeight: "bold", paddingRight:"12px" }}>NIC</label>
            <input type="text" id="nic" value={nic} onChange={handleNicChange} placeholder="Enter your NIC (000000000000V)" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
          <div style={{ display: "flex", alignItems:"center", gap: "8px", textAlign:"left" }}>
            <label htmlFor="phone" style={{ fontSize: "14px", fontWeight: "bold"}}>Phone No</label>
            <input type="text" id="pno" value={pno} onChange={handlePnoChange} placeholder="Enter your Phone number" style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <strong style={{ display: "block", fontSize: "16px", marginBottom: "10px" }}>Number of Days: {days}</strong>
          <strong style={{ display: "block", fontSize: "16px", marginBottom: "10px" }}>Price: ${price}</strong>
        </div>
        <button onClick={handleSubmit} style={{ backgroundColor: "white", color: "#ff6a00", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>SUBMIT</button>
      </div>
    </div>
  );
}

export default RentCarForm;
