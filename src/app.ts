import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import AppError from './errors/AppError';
import router from './routes';

require('./config/db');

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

console.log('Server running on port 3000!');

export default app;
