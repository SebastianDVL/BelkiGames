import { ServiceDev } from "../services/ServiceDev.js"

export class ControllerDev{
    constructor(){}

    async getAll(req, res){
        let serviceDev = new ServiceDev();
        try{
            res.status(200).json({
                message: "Exito al encontrar desarrolladoras",
                data:await serviceDev.getAll(),
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al buscar informacion",
                data:null,
                success: false
            })
        }
        
    }

    async getByNit(req, res){
        let serviceDev = new ServiceDev();
        let nit = req.params.nit

        try{
            res.status(200).json({
                message: "Exito al encontrar desarrolladora",
                data:await serviceDev.getById(nit),
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al buscar informacion",
                data:null,
                success: false
            })
        }
    }

    async insert(req, res){
        let serviceDev = new ServiceDev();
        let dataReq = req.body

        try{

            await serviceDev.insert(dataReq)
            res.status(200).json({
                message: "Exito al ingresar datos",
                data:[],
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al ingresar datos",
                data:null,
                success: false
            })
        }
    }

    disableDevByNit(req, res){
        let nit = req.params.nit
    }

    async modifyDevByNit(req, res){
        let serviceDev = new ServiceDev();
        let nit = req.params.nit
        let dataReq = req.body
        
        try{

            await serviceDev.edit(nit,dataReq)
            res.status(200).json({
                message: "Exito al modificar informacion",
                data:[],
                success: true
            })
            
        }catch(e){
            res.status(400).json({
                message: "Fallo al modificar informacion",
                data:null,
                success:false
            })
        }
    }



}