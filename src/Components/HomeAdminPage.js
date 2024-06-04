import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import './HomeAdminPage.css';

function HomeAdminPage() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>This is the Home Admin Page</h1>
      </div>
      <div className="content">
        <div className="logs-table">
          <h2>Logs Table</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Login Time</th>
                <th>Logout Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>09:00 AM</td>
                <td>05:00 PM</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>09:00 AM</td>
                <td>05:00 PM</td>
              </tr>
            </tbody>            
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>09:00 AM</td>
                <td>05:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="news">
          <h2>Updates</h2>
          <textarea
            readOnly
            value="Content or updates important to admin users"
            rows={20}
            cols={60} /* Adjust cols to make the news box thinner */
            style={{ resize: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAdminPage;
