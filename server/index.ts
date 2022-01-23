import express from "express";
import { Response } from "express";
import dotenv from "dotenv";
import path from 'path';
import cors from 'cors'
import bodyParser from "body-parser";
dotenv.config({ path: path.join(__dirname,'../.env' )});
import UserRoute from './routes/user';
import PokemonRoute from './routes/pokemon';


const app = express();

app.use(cors({ origin: "http://localhost:4000"}));
app.use(bodyParser.json());
// setup express app here
// ...

app.use('/api', [
    UserRoute, 
    PokemonRoute
])
app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_, res: Response) => { 
    res.sendFile(path.join(__dirname, '../dist/index.html')) 
}); 

// start express server
const PORT = process.env["PORT"] || 4000; 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));