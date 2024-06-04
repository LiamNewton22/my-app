import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Login from './Components/Login';
import HomeAdminPage from './Components/HomeAdminPage';

const App = () => {
  return (
    <Router> {/* Wrap everything in Router */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomeAdminPage" element={<HomeAdminPage />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
