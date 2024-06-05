<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import './HomeAdminPage.css';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeAdminPage.css';
import Our_Meat_logo from './Assets/Our_Meat_Logo.png';
>>>>>>> 15eb50b4cdac59bf42e47df244b1c08d52d7cfe2

const HomeAdminPage = () => {
  const navItems = ['Home', 'About', 'Contact'];
  const [searchTerm, setSearchTerm] = useState('');
  const [projectId, setProjectId] = useState('');
  const [location, setLocation] = useState('Loading...');

<<<<<<< HEAD
  useEffect(() => {
    // Fetch location data from the server when the component mounts
    fetch('http://localhost:3001/meat') // Ensure the correct URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Debugging line
        setLocation(data.location);
      })
      .catch(error => {
        console.error('Error fetching location:', error); // Debugging line
        setLocation('Error loading location');
      });
  }, []);

=======
>>>>>>> 15eb50b4cdac59bf42e47df244b1c08d52d7cfe2
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
              <li>Location: {location}</li>
              <li>Stock: Blah</li>
              <li>Info: Cheese</li>
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

<<<<<<< HEAD
export default HomeAdminPage;
=======
export default HomeAdminPage;
>>>>>>> 15eb50b4cdac59bf42e47df244b1c08d52d7cfe2
