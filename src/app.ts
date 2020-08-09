import express from 'express';
import 'dotenv/config';
import router from './routes';

require('./config/db');

const app = express();

app.use(express.json());
app.use(router);

console.log('Server running on port 3000!');

export default app;
