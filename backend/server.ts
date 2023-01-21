import * as path from 'path';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
const routes = require('./routes/api');
// import * as routes from './routes/api';
env.config();
// Create a new Express app
const app = express();
const PORT = 3000;



//TODO: finish off userController
//TODO: connect to frontend
//TODO: figure out sessions

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set('strictQuery', false);

//template literal is required or else you get Typescript error of passed in value Argument of type 'string | undefined' is not assignable to parameter of type 'string'.  Type 'undefined' is not assignable to type 'string'

mongoose.connect(`${process.env.MONGO_URI}`);

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use('/api', routes);

// const apiRouter = require('./routes/api')
//const databaseRouter = require('./routes/database')

app.use(express.static('public'));

const leaderList = [{ name: 'Anna', id: 'a0' }];

// Define a route handler for the root path
app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//Error Handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start the server on port 3000
app.listen(PORT, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;

// app.get('/api/leaders', async (req, res) => {
//   res.status(200).json('hello');
// });
// app.get('/leaders', (req, res) => {
//   return res.status(200).send(leaderList);
// });

//test purposes to check post route to DB
