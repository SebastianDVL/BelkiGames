import mongoose from 'mongoose';

export async function connect(){
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('Exito al conectar con la base de datos')
    }catch(e){
        console.log(`Error al conectar con la base de datos: ${e}`)
    }
}