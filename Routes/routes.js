import { ControllerDev } from '../Controllers/ControllerDevs.js';

const controllerDev = new ControllerDev();

import express from 'express';

export let routes = express.Router();

//rutas para desarrolladoras
routes.get('/api/v1/devs/',controllerDev.getAll)
routes.get('/api/v1/devs/:nit',controllerDev.getById)
