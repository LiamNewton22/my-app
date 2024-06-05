import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeAdminPage.css';
import Our_Meat_logo from './Assets/Our_Meat_Logo.png';

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
    console.log(`Button clicked in Box ${boxNumber}`);
    // Perform actions here, such as updating state or making API calls
  };

  const handleLogout = () => {
    // Perform logout actions here
    // For example, clearing session storage, removing tokens, etc.
    // Then redirect the user to the login page
    // window.location.href = '/login'; // Or use React Router's history for navigation
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
          {/* Link to the logout page or handle logout action */}
          <Link to="/logout" onClick={handleLogout}>
            <button>Logout</button>
          </Link>
        </div>
      </nav>
      <div className="content">
        {[1, 2, 3, 4, 5, 6].map(boxNumber => (
          <div key={boxNumber} className="box">
            <h2>Meat {boxNumber}</h2>
            <ul>
              <li>Location:</li>
              <li>Stock:</li>
              <li>Info:</li>
            </ul>
            <Link to="/EditPage">
              <button onClick={() => handleButtonClick(boxNumber)}>Update</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAdminPage;
