import { ServiceGame } from "../services/ServiceGame.js";

export class ControllerGame{
    constructor(){}

    async getAll(req, res){   
        let serviceGame = new ServiceGame();
        try{
            res.status(200).json({
                message: "Exito al encontrar juegos",
                data:await serviceGame.getAll(),
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

    async getGameById(req, res){
        let id = req.params.id
        let serviceGame = new ServiceGame();
        try{ 
            res.status(200).json({
                message: "Exito al encontrar juego",
                data: await serviceGame.getById(id),
                success: true
            })
        }catch(e){ 
            res.status(400).json({
                message: "Fallo al buscar juego: " + e,
                data:null,
                success:false
            })
        }
    }

    async getGamesByCategory(req, res){
        let category = req.params.category
        let serviceGame = new ServiceGame();
        try{ 
            res.status(200).json({
                message: "Exito al encontrar juegos",
                data: await serviceGame.getByCategory(category),
                success: true
            })
        }catch(e){ 
            res.status(400).json({
                message: "Fallo al buscar juegos por categoria: " + e,
                data:null,
                success:false
            })
        }

    }

    async insert(req, res){
        let newGame = req.body
        let serviceGame = new ServiceGame();

        try {
            let game = await serviceGame.insert(newGame)
            res.status(200).json({
                message: "Exito al guardar juego",
                data: game,
                success: true
            })  
        } catch (e) {
            res.status(400).json({
                message: "Fallo al guardar juego: " +e,
                data:null,
                success: false
            })
        }
    }

    async delete(req, res){
        let id = req.params.id
        let serviceGame = new ServiceGame();
        try {
            await serviceGame.delete(id)
            res.status(200).json({
                message: "Exito al borrar juego",
                data:[],
                success: true
            })
        } catch (e) {
            res.status(400).json({
                message: "Fallo al borrar juego: " + e,
                data:null,
                success: false
            })
        }
    }

    async modify(req, res){
        let id = req.params.id
        let data = req.body
        let serviceGame = new ServiceGame();

        try{
            res.status(200).json({
                message: "Exito al modificar juego",
                data: await serviceGame.edit(id,data),
                success: true
            })
        }catch(e){
            res.status(400).json({
                message: "Fallo al modificar juego: "+ e,
                data:null,
                success: false
            })
        }
    }
}