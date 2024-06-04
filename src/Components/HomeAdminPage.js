import React, { useState } from 'react';
import './Login.css';
import Our_Meat_logo from './Assets/Our_Meat_Logo.png'; // Import the logo image


const HomeAdminPage = () => {
const navItems = ['Home', 'About', 'Contact'];
const [searchTerm, setSearchTerm] = useState('');
const [projectId, setProjectId] = useState('');


const handleSearch = () => {
  alert(`Stock From: ${searchTerm}\nMeat 1: 1\nMeat 2: 12\nMeat 3: 123\nMeat 4: 1234\nMeat 5: 12345\nMeat 6: 123456`);
};


const handleProjectSearch = () => {
  alert(`Searching for Item ${projectId}\nLocation: Blacktown`);
};


const handleButtonClick = (boxNumber) => {
  alert(`Button clicked in Box ${boxNumber}`);
};


return (
  <div className="HomeAdminPage-container">
    <nav className="navigation">
      <div className="logo-container">
        <img src={Our_Meat_logo} alt="Our Meat Logo" className="logo" />
      </div>
      <ul>
        {navItems.map(item => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Location Stock..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Item ID..."
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
        <button onClick={handleProjectSearch}>Search</button>
      </div>
      <div className="logout-button">
        <button>Logout</button>
      </div>
    </nav>
    <div className="content">
      <div className="box">
        <h2>Meat 1</h2>
        <ul>
          <li>Location:</li>
          <li>Stock:</li>
          <li>Info:</li>
        </ul>
        <button onClick={() => handleButtonClick(1)}>Update</button>
      </div>
      <div className="box">
        <h2>Meat 2</h2>
        <ul>
          <li>Location:</li>
          <li>Stock:</li>
          <li>Info:</li>
        </ul>
        <button onClick={() => handleButtonClick(2)}>Update</button>
      </div>
      <div className="box">
        <h2>Meat 3</h2>
        <ul>
          <li>Location:</li>
          <li>Stock:</li>
          <li>Info:</li>
        </ul>
        <button onClick={() => handleButtonClick(3)}>Update</button>
      </div>
      <div className="box">
        <h2>Meat 4</h2>
        <ul>
          <li>Location:</li>
          <li>Stock:</li>
          <li>Info:</li>
        </ul>
        <button onClick={() => handleButtonClick(4)}>Update</button>
      </div>
      <div className="box">
        <h2>Meat 5</h2>
        <ul>
          <li>Location:</li>
          <li>Stock:</li>
          <li>Info:</li>
        </ul>
        <button onClick={() => handleButtonClick(5)}>Update</button>
      </div>
      <div className="box">
        <h2>Meat 6</h2>
        <ul>
          <li>Location:</li>
          <li>Stock:</li>
          <li>Info:</li>
        </ul>
        <button onClick={() => handleButtonClick(6)}>Update</button>
      </div>
    </div>
  </div>
);
};


export default HomeAdminPage;