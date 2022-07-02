import express from "express";

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.routes();
    }

    routes(){
        this.app.get('/', (req, res) => {
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