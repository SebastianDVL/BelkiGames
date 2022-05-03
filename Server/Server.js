import express from 'express';
import { routes } from '../routes/routes.js';
import { connect } from '../database/conexion.js';
import cors from 'cors';

export class Server{

    constructor(){
        this.app = express();
        this.connectServer();
        this.callHelpers();
        this.routeServices();
    }

    openServer(){
        this.app.listen(process.env.PORT,()=>{
            console.log(`Server opened in port ${process.env.PORT}`);
        })
    }

    routeServices(){
        this.app.use('/',routes)
    }

    connectServer(){
        connect()
    }

    callHelpers(){
        this.app.use(cors())
        this.app.use(express.json())
    }

}