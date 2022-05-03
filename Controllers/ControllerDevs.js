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
                message: "Fallo al buscar informacion: " + e,
                data:null,
                success: false
            })
        }
        
    }

    async getById(req, res){
        let serviceDev = new ServiceDev();
        let id = req.params.id

        try{
            res.status(200).json({
                message: "Exito al encontrar desarrolladora",
                data:await serviceDev.getById(id),
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al buscar informacion: " + e,
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
                message: "Fallo al ingresar datos: " + e,
                data:null,
                success: false
            })
        }
    }

    async deleteDevById(req, res){
        let serviceDev = new ServiceDev();
        let id = req.params.id

        try{

            await serviceDev.delete(id)
            res.status(200).json({
                message: "Exito al borrar desarrolladora",
                data:[],
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al borrar desarrolladora: " + e,
                data:null,
                success: false
            })
        }

    }

    async modifyDevById(req, res){
        let serviceDev = new ServiceDev();
        let id = req.params.id
        let dataReq = req.body
        
        try{

            await serviceDev.edit(id,dataReq)
            res.status(200).json({
                message: "Exito al modificar informacion",
                data:[],
                success: true
            })
            
        }catch(e){
            res.status(400).json({
                message: "Fallo al modificar informacion: " + e,
                data:null,
                success:false
            })
        }
    }



}