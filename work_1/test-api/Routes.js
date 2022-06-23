const express = require('express')

class UserRoutes{
    constructor(){
        this._route = express.Router()
        this.registerRouters()   
    }
    
    registerRouters(){
        this._route.post('/user', (req,res)=>{

            console.log(req.method)
            res.json({"message": "Soy la ruta post"})
        
        })

        this._route.get('/user', (req,res)=>{

            console.log(req.method)
            res.json({"message": "Soy la ruta get"})
        
        })

        this._route.put('/user/:id', (req,res)=>{

            console.log(req.method)
            console.log(req.params.id)
            res.json({"Parametro": req.params.id})
        
        })

        this._route.delete('/user/:id', (req,res)=>{

            console.log(req.method)
            console.log(req.params.id)
            res.json({"Parametro": req.params.id})
        
        })

        this._route.get('/user/:id', (req,res)=>{

            console.log(req.params.id)
            res.json({"message": "Soy la ruta get"})
        
        })

    }

}

module.exports = UserRoutes;