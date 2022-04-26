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
routes.get('/api/v1/dev/:nit/',controllerDev.getByNit)
routes.post('/api/v1/dev/',controllerDev.insert)
routes.put('/api/v1/dev/:nit',controllerDev.modifyDevByNit)
routes.put('/api/v1/dev/:nit',controllerDev.disableDevByNit)

//rutas para videojuegos
routes.get('/api/v1/games/',controllerGame.getAll)
routes.get('/api/v1/game/:id/',controllerGame.getGameById)
routes.get('/api/v1/games/:category/',controllerGame.getGamesByCategory)


//rutas para clientes/usuarios


//rutas para facturas