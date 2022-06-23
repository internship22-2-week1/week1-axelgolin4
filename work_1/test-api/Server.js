const express = require('express')
const UserRoutes = require('./Routes.js')

const userRoutes = new UserRoutes 


class Server{
    constructor(){      
        this._app = express()
        this._port = 5000
        this.initMiddlewares()
        this.initRoutes()
    }
    
    initMiddlewares(){
        this._app.use(express.json())
    }

    initRoutes(){
        this._app.use('/appi/v2', userRoutes._route)

    }
    
    start(){
        this._app.listen(this._port, () =>{
            console.log("El servidor ha iniciado")
        })
    }
}


module.exports = Server;


