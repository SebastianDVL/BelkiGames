import { ControllerDev } from '../Controllers/ControllerDevs.js';
import { ControllerGame} from '../Controllers/ControllerGames.js'; 
import {ControllerUser} from '../Controllers/ControllerUsers.js';
import { ControllerBill } from '../Controllers/ControllerBills.js';

let controllerDev = new ControllerDev();
let controllerGame = new ControllerGame();
let controllerUser = new ControllerUser();
let controllerBill = new ControllerBill();

import express from 'express';

export let routes = express.Router();

//rutas para desarrolladoras
routes.get('/api/v1/devs/',controllerDev.getAll)
routes.get('/api/v1/dev/:id/',controllerDev.getById)
routes.post('/api/v1/dev/',controllerDev.insert)
routes.put('/api/v1/dev/:id',controllerDev.modifyDevById)
routes.delete('/api/v1/dev/:id',controllerDev.deleteDevById)

//rutas para videojuegos
routes.get('/api/v1/games/',controllerGame.getAll)
routes.get('/api/v1/game/:id/',controllerGame.getGameById)
routes.get('/api/v1/games/:category/',controllerGame.getGamesByCategory)


//rutas para clientes/usuarios
routes.get('/api/v1/user/:email&:password',controllerUser.login)
routes.post('/api/v1/user/',controllerUser.insert)
//rutas para facturas