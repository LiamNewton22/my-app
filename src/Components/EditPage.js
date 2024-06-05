import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './EditPage.css'; // Make sure to create and link your CSS file
import cowIcon from './Assets/Cow_Back.png'; // Adjust the path based on your actual file location
import logo from './Assets/Our_Meat_Logo.png'; // Adjust the path based on your actual file location

function EditPage() {

    const navigate = useNavigate(); // Initialize useNavigate

    const handleBack = () => {
        navigate('/HomeAdminPage'); // Navigate to the homepage
    };
    
    return (
        <div className="edit-page">
            <img src={logo} alt="Our Meat Logo" className="company-logo" />
            <div className="edit-page-content">
                <h1>Edit Stock</h1>
                <div className="edit-container">
                    <div className="edit-box">
                        <div className="city-name">Sydney</div>
                        <input type="text" className="stock-input" placeholder="Enter stock" />
                        <button className="update-button">Update</button>
                    </div>
                    <div className="edit-box">
                        <div className="city-name">Melbourne</div>
                        <input type="text" className="stock-input" placeholder="Enter stock" />
                        <button className="update-button">Update</button>
                    </div>
                    <div className="edit-box">
                        <div className="city-name">Canberra</div>
                        <input type="text" className="stock-input" placeholder="Enter stock" />
                        <button className="update-button">Update</button>
                    </div>
                    <div className="edit-box">
                        <div className="city-name">Brisbane</div>
                        <input type="text" className="stock-input" placeholder="Enter stock" />
                        <button className="update-button">Update</button>
                    </div>
                </div>
            </div>
            {/* Back button */}
            <button className="back-button" onClick={handleBack}>
                <img src={cowIcon} alt="Cow Back" className="cow-icon" />
            </button>
        </div>
    );
}

export default EditPage;
