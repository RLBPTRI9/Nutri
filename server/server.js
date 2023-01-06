
const path = require('path');
const express = require('express');
// Create a new Express app
const app = express();
// const apiRouter = require('./routes/api')

const PORT = 3000;

app.use(express.static("public"));






const leaderList = [
  { name: 'Anna', id: 'a0' },
  { name: 'Ben', id: 'b0' },
  { name: 'Clara', id: 'c0' },
  { name: 'David', id: 'd0' },
];


app.get('/api/leaders', (req, res) => {
  return res.status(200).send(leaderList);
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;