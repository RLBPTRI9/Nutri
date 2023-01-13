const path = require('path');
const express = require('express');
require('dotenv').config();
// Create a new Express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./routes/api');
app.use('/api', routes);

const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://matt:codesmith@cluster1.wajxvza.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// const apiRouter = require('./routes/api')
//const databaseRouter = require('./routes/database')

const PORT = 3000;

app.use(express.static('public'));

const leaderList = [{ name: 'Anna', id: 'a0' }];

// Define a route handler for the root path
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// app.get('/api/leaders', async (req, res) => {
//   res.status(200).json('hello');
// });
// app.get('/leaders', (req, res) => {
//   return res.status(200).send(leaderList);
// });

//test purposes to check post route to DB

// Start the server on port 3000
app.listen(PORT, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
