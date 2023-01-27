import * as path from 'path';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiRoute from './routes/api.route';

// import * as routes from './routes/api';
env.config();
// Create a new Express app
const app = express();
const PORT = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Server/database initilization
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('Connected to database ✅');
    // Start the server on port 3000
    app.listen(PORT, () => {
      console.log(`Server is listening at http://localhost:${PORT}/ ✅`);
    });
  })
  .catch((e) => console.log(`🛑 Failed to start server: ${e}`));

app.use('/api', apiRoute);

// Routes
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//Error Handling
type ErrorObject = {
  log: string;
  status: number;
  message: { error: string };
};

app.use((err: ErrorObject, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ErrorObject = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Exported for testing
export default app;
