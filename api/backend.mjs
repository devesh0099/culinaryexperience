import express, { response } from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const PORT = process.env.PORT_BACKEND || 3000;

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
});

app.get("/", (request,response) => {
    response.send(`Hello World! ${PORT}` );
});