import { devModel } from "../models/devModel.js";

export class ServiceDev {
    constructor(){

    }

    async getAll() {
        let devs = await devModel.find()
        return devs
    }

    async getById(id){
        let dev = await devModel.findById(id)
        return dev
    }

    async insert(dev){
        let newDev = new devModel(dev)
        return await newDev.save()
    }

    async edit(id,dev){
        return await devModel.findByIdAndUpdate(id,dev)
    }

    async delete(id){
        return await devModel.findByIdAndDelete(id)
    }

    async getByName(name){
        let dev = await devModel.find({nombre: name})
        return dev
    }
}