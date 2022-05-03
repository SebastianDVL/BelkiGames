import mongoose from 'mongoose';

const User = new mongoose.Schema({
    correo:{type:String,required:true },
    nombre:{type:String, required:true},
    telefono:{type:String, required:true},
    ubicacion:{type:String, required:true},
    activo:{type:Boolean, required:true,default:true}
 })