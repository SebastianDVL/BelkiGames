import mongoose from 'mongoose';

const User = new mongoose.Schema({
    correo:{type: String, required:true,index:{unique:true}},
    nombre: {type: String, required:true},
    apellidos: {type: String, required:true},
    pais: {type: String, required:true},
    usuario: {type: String, required:true},
    contraseña: {type: String, required:true},
    activo: {type:Boolean, required:true, default:true},
})

export const userModel = mongoose.model('usuarios',User);