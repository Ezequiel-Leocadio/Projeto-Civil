import express from 'express';
import multer from 'multer';

import SessionController from './controllers/SessionController';
import ArtistaController from './controllers/ArtistaController';
import AlbumController from './controllers/AlbumController';
import CapaController from './controllers/CapaController';

import authMiddleware from './middleware/auth';

const routes = new express.Router();

routes.post('/login', SessionController.Login);
routes.get('/cargatabelas', SessionController.Models);
routes.use(authMiddleware);
routes.get('/artistas', ArtistaController.List);
routes.post('/artistas', ArtistaController.Create);
routes.post('/artistafind/:id', ArtistaController.Find);
routes.put('/artistas/:id', ArtistaController.Update);

routes.post('/albuns', AlbumController.Create);
routes.post('/albuns/:id', AlbumController.Find);
routes.put('/albuns/:id', AlbumController.Update);

routes.post('/capas', multer({ storage: multer.memoryStorage() }).single('image'), CapaController.Create);
routes.post('/capas/:id', CapaController.Find);
routes.put('/capas/:id', CapaController.Update);

module.exports = routes;
