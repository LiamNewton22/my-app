import React, { useState, useEffect } from 'react';
import './HomeAdminPage.css';

const HomeAdminPage = () => {
  const navItems = ['Home', 'About', 'Contact'];
  const [searchTerm, setSearchTerm] = useState('');
  const [projectId, setProjectId] = useState('');
  const [location, setLocation] = useState('Loading...');

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

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const handleProjectSearch = () => {
    alert(`Searching for Project ID: ${projectId}`);
  };

  const handleButtonClick = (boxNumber) => {
    alert(`Button clicked in Meat ${boxNumber}`);
  };

  const handleLogout = () => {
    alert('Logged out');
  };

  return (
    <div className="HomeAdminPage-container">
      <nav className="navigation">
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
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="content">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="box" key={index}>
            <h2>Meat {index + 1}</h2>
            <ul>
              <li>Location: {location}</li>
              <li>Stock: Blah</li>
              <li>Info: Cheese</li>
            </ul>
            <button onClick={() => handleButtonClick(index + 1)}>Click Me</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAdminPage;