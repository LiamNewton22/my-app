import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import HomeAdminPage from './Components/HomeAdminPage';
import EditPage from './Components/EditPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomeAdminPage" element={<HomeAdminPage />} />
        <Route path="/EditPage" element={<EditPage />} />
      </Routes>
    </Router>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
