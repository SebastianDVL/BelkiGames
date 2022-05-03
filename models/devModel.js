import mongoose from 'mongoose';

 const Dev = new mongoose.Schema({
    nit:{type:String,required:true },
    nombre:{type:String, required:true},
    correo:{type:String, required:true},
    telefono:{type:String, required:true},
    ubicacion:{type:String, required:true},
    contraseña:{type:String, required:true},
    activo:{type:Boolean, required:true,default:true}
     
 })

 export const devModel = mongoose.model('desarrolladoras',Dev)