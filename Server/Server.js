import express from 'express';
import { routes } from '../Routes/routes.js';

export class Server{

    constructor(){
        this.app = express();
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

    }

    callHelpers(){
        this.app.use(express.json())
    }

}