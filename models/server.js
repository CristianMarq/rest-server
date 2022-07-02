import express from "express";

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
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('Hola Mundo')
        })
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log(`Escuchando en https:localHost:${this.port}`)
        })
        
    }

}

export{Server}