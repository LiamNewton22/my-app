import React from 'react';
import './EditPage.css'; // Make sure to create and link your CSS file
import cowIcon from './Componenets/Assets/Cow_Back.png'; // Adjust the path based on your actual file location
import logo from './Componenets/Assets/Our_Meat_Logo.png'; // Adjust the path based on your actual file location

function EditPage() {
    return (
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
    );
}


export default EditPage;
