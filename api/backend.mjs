import express, { response } from "express";
import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
dotenv.config()

const app = express();
const PORT = process.env.PORT_BACKEND || 3000;

const pgPool = new Pool ({
    user: 'appuser',
    password: '1234',
    host: 'localhost',
    port: 5000,
    database: 'appdb',
    host: '../connection',
  });

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
});

app.get("/", (request,response) => {
    response.send(`Hello World! ${PORT}` );
});

app.get("/menu", (request,response) => {
    // db se menu lena hai??
});