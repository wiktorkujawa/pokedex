import { NextFunction } from "express";
import { Response } from "express";
import dotenv from "dotenv";
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from "passport";

const express = require('express');
import bodyParser from "body-parser";
dotenv.config({ path: path.join(__dirname,'../.env' )});
import UserRoute from './routes/user';
import PokemonRoute from './routes/pokemon';

export interface IGetUserAuthInfoRequest extends Request {
    user: string
  }


const app = express();

app.use(function(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
    if (!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
  
app.use(cookieParser());

app.use(bodyParser.json());

app.use(cors({ 
    origin: "http://localhost:4200",
    credentials: true
}));


 // Express session
 app.use(
    session({
      secret: process.env.SESSION_SECRET as string,
      resave: true,
      saveUninitialized: true
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());


// setup express app here
// ...

app.use('/api', [
    UserRoute, 
    PokemonRoute
])
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_:Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '../dist/index.html')) 
}); 

// start express server
const PORT = process.env["PORT"] || 4000; 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));