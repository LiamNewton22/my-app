const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON request bodies

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "user",
  database: "example" // Specify your database name here
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

// API endpoint to handle login requests
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  con.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    } else {
      if (result.length > 0) {
        // User found, send success response
        res.json({ message: 'Login successful' });
      } else {
        // User not found or invalid credentials, send error response
        res.status(401).json({ message: 'Invalid username or password' });
      }
    }
  });
});

app.get('/meat', (req, res) => {
  const query = 'SELECT CutType FROM meat WHERE meatID = 4'; 

  con.query(query, (err, results) => { // Use 'con' instead of 'connection'
      if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Server error');
          return;
      }

      if (results.length > 0) {
          res.json({ location: results[0].CutType }); // Correct field name
      } else {
          res.status(404).send('Location not found');
      }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});