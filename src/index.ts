import 'reflect-metadata';

import express from 'express';
import morgan from 'morgan';

import userRoutes from './routes/user.routes';
import { createConnection } from 'typeorm';

const app = express();

// se ejecuta la conexion al ORM
createConnection();

const port = process.env.PORT || 3000;
///////////////////////////////////////
// middlewares
app.use(morgan('dev'));
// Para que pueda interpretar los formatos JSON
app.use(express.json());

// ROUTES
app.use(userRoutes);


//////////////////////////////////////
app.listen(port, ()=>{
    console.log(`Server on port :: ${port}`);
});