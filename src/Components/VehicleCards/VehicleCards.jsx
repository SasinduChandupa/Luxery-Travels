import React, { useState } from 'react';

const VehicleCards = () => {
    const [modalContent, setModalContent] = useState(null); // Modal content state
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

    // Handles modal opening
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    // Handles modal closing
    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {/* Card 1 */}
                <div style={{ width: '300px', height: '350px', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ width: '100%', height: '200px', backgroundImage: 'url(bmw.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                    <div style={{ padding: '10px' }}>
                        <h3 style={{ color: 'black', margin: '10px 0' }}>Cars</h3>
                        <p style={{ color: '#555', fontSize: '14px', marginBottom: '10px' }}>Only 4 person can travel comfortably (without Driver)</p>
                        <button style={{ padding: '8px 16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }} onClick={() => openModal(
                            <div>
                                <p style={{fontWeight:"lighter", fontSize:"20px", fontFamily:"cursive"}}>Cars we have</p><br/>
                                <p style={{fontFamily:"serif"}}>BMW 520d</p>
                                <p style={{fontFamily:"serif"}}>Axio</p>
                                <p style={{fontFamily:"serif"}}>Premio</p>
                                <p style={{fontFamily:"serif"}}>Prado TX</p>
                                <p style={{fontFamily:"serif"}}>Range Rover</p>
                                <p style={{fontFamily:"serif"}}>WagorR</p>
                                <p style={{fontFamily:"serif"}}>Alto K10</p>
                            </div>
                        )}>
                            What we have
                        </button>

                    </div>
                </div>

                {/* Card 2 */}
                <div style={{ width: '300px', height: '350px', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ width: '100%', height: '200px', backgroundImage: 'url(benz.avif)', backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                    <div style={{ padding: '10px' }}>
                        <h3 style={{ color: 'black', margin: '10px 0' }}>Vans</h3>
                        <p style={{ color: '#555', fontSize: '14px', marginBottom: '10px' }}>Only 5-20 person can travel comfortably<br/>(we giving with Driver)</p>
                        <button style={{ padding: '8px 16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }} onClick={() => openModal(
                            <div>
                                <p style={{fontWeight:"lighter", fontSize:"20px", fontFamily:"cursive"}}>Vans we have</p><br/>
                                <p style={{fontFamily:"serif"}}>KDH (9 person)</p>
                                <p style={{fontFamily:"serif"}}>Mercedes Benz Sprinter (6 person)</p>
                                <p style={{fontFamily:"serif"}}>Rosa A/C Bus (20 person)</p>
                            </div>
                        )}>
                            What we have
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div style={{ width: '300px', height: '350px', borderRadius: '12px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ width: '100%', height: '200px', backgroundImage: 'url(bike.png)', backgroundSize: 'cover', backgroundPosition: 'center', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                    <div style={{ padding: '10px' }}>
                        <h3 style={{ color: 'black', margin: '10px 0' }}>Bikes</h3>
                        <p style={{ color: '#555', fontSize: '14px', marginBottom: '10px' }}>Only 2 person can travel comfortably <br/> (we giving without rider)</p>
                        <button style={{ padding: '8px 16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }} onClick={() => openModal(
                            <div>
                                <p style={{fontWeight:"lighter", fontSize:"20px", fontFamily:"cursive"}}>Bikes we have</p><br/>
                                <p style={{fontFamily:"serif"}}>Royal Enfield</p>
                                <p style={{fontFamily:"serif"}}>Scooters</p>
                            </div>
                        )}>
                            What we have
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}>
                    <h3 style={{ color: "black", fontWeight: 'normal', fontSize:"16px", lineHeight:"18px" }}>{modalContent}</h3> {}
                    <button style={{ marginTop: '20px', padding: '8px 16px', backgroundColor: '#FF4D4D', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={closeModal}>
                        Close
                    </button>
                </div>
            )}

            {/* Overlay */}
            {isModalOpen && (
                <div style={{ position: 'fixed',fontWeight: 'normal', fontSize:"16px", top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }} onClick={closeModal}></div>
            )}
        </div>
    );
};

export default VehicleCards;
