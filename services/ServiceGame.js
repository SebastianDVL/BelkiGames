import { gameModel } from "../models/gameModel.js";

export class ServiceGame{
    constructor(){}

    async getAll(){
        let games = await gameModel.find()
        return games
    }

    async getById(id){
        let game = await gameModel.findById(id)
        return game
    }

    async insert(game){
        let newGame = new gameModel(game)
        return await newGame.save()
    }

    async edit(id,game){
        return await gameModel.findByIdAndUpdate(id,game)
    }

    async delete(id){
        return await gameModel.findByIdAndDelete(id)
    }

    async getByName(name){
        let dev = await gameModel.find({nombre: name})
        return dev
    }

    async getByCategory(category){
        let games = await gameModel.find({categoria: category}) 
        return games
    }

}