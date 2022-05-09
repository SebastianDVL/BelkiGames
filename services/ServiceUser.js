import {userModel} from '../models/userModel.js'

export class ServiceUser{
    constructor(){}

    async log(email){
        let user = await userModel.find({correo:email});
        return user
    }

    async insert(user){
        let newUser = new userModel(user);
        return await newUser.save();
    }

    
}