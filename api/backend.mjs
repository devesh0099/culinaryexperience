import express, { response } from "express";
import dotenv from "dotenv";
dotenv.config()
import db from "./db.mjs";

const app = express();
const PORT = process.env.PORT_BACKEND || 3000;

app.listen(PORT, () => {
    console.log(`Running on Port: ${PORT}`);
});

app.get("/", async (req,res) => {
    try {
        const result = await db.query('SELECT * FROM TEST');
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
});

app.get("/menu", (request,response) => {
    // db se menu lena hai??
});