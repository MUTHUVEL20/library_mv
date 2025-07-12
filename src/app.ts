import express from 'express';

import dotenv from 'dotenv';

import bookRoutes from './Routes/bookRoutes';


dotenv.config();

const app = express();


app.use(express.json());


app.use('/api/books',bookRoutes)


export default app;