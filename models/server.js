import { router } from '../routers/users.js';

import express from "express";
import cors from 'cors';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users';

        // Middlewares
        this.middleware();

        // Rutas de mi aplicacion
        this.routes();
    }

    middleware() {
        // Cors
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json());

        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.userPath, router);
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando en https:localHost:${this.port}`)
        })
        
    }

}

export{Server}