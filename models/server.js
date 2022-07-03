import express from "express";
import cors from 'cors';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middleware();

        // Rutas de mi aplicacion
        this.routes();
    }

    middleware() {

        this.app.use(cors())

        // Public
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'Peticion API'
            })
        })

        this.app.put('/api', (req, res) => {
            res.status(201).json({
                ok: true,
                msg: 'Peticion Put API'
            })
        })

        this.app.post('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'Peticion Post API'
            })
        })

        this.app.delete('/api', (req, res) => {
            res.status(500).json({
                ok: true,
                msg: 'Peticion Delete API'
            })
        })
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando en https:localHost:${this.port}`)
        })
        
    }

}

export{Server}