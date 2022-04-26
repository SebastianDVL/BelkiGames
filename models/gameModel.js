import mongoose from 'mongoose';

const Game =new mongoose.Schema({
    nombre: {type: String, required:true},
    categoria: {type: String,required:true},
    fechaLanzamiento: {type: String, required:true},
    descripcipn: {type: String, required:true},
    precio: {type: Number, required:true},
    linkDescarga: {type: String, required:true},
    imagenLink:{type:String, required:true},
    nitDev:{type:String, required:true}
})

export const gameModel = mongoose.Model('juegos',Game)