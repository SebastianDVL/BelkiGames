import { ServiceUser } from "../services/ServiceUser.js"

export class ControllerUser{
    constructor(){}
    
    async insert(req, res){
        let serviceUser = new ServiceUser();
        let dataReq = req.body

        try{

            await serviceUser.insert(dataReq)
            res.status(200).json({
                message: "Exito al ingresar datos",
                data:[],
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al ingresar datos: " + e,
                data:null,
                success: false
            })
        }
    }

    async login(req, res){
        let serviceUser = new ServiceUser();
        let email = req.params.email
        let password = req.params.password
  
        try{
            
            res.status(200).json({
                message: "Exito al encontrar usuario",
                data:await serviceUser.log(email),
                success: true
            })
             
        }catch(e){
            res.status(400).json({
                message: "Fallo al ingresar: " + e,
                data:null,
                success: false
            })
        }
    }
}