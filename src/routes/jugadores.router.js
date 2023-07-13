import { Router } from 'express';
import { isUser, isAdmin, multerUploadFile } from '../middlewares/checkAuth.js';
import { jugadoresController } from '../controllers/jugadores.controller.js';
export const jugadoresRouter = new Router();

jugadoresRouter.get('/', jugadoresController.getAll);
jugadoresRouter.post('/:id', isAdmin, multerUploadFile, jugadoresController.create);
