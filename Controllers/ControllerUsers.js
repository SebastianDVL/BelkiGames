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
        let data = req.body
        
        try{
            let user = await serviceUser.log(data.email)
         
            if(user[0].contraseña != data.password){
                res.status(200).json({
                    message: "Contraseña incorrecta",
                    data:[],
                    success: false
                })
            }else{
                res.status(200).json({
                    message: "Exito al ingresar",
                    data:user,
                    success: true
                })
            }
            
             
        }catch(e){
            res.status(400).json({
                message: e,
                data:null,
                success: false
            })
        }
    }
}