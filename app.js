import 'dotenv/config';
import express from "express";

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

app.listen(port,() => {
    console.log(`Escuchando en https:localHost:${port}`)
})

