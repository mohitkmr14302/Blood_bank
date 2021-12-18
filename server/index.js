import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Router from "./routes/route.js";
import auth from "./middleware/auth.js";
import connection from './database/db.js';
const app=express();

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Origin: http://localhost:3000");
    res.header("Access-Control-Allow-Credentials: true");
    // res.header("Access-Control-Allow-Methods: GET, POST");
    res.header("Access-Control-Allow-Headers: Content-Type, *");
    next();
});

app.use(cors(corsOptions));
app.use(cookieParser());

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);
app.use(express.json());

const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server is running sucessfully on ${PORT}`);
})

connection();