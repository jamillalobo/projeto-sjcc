import { Router } from 'express';
import AppController from '../controllers/app.controller.js';

const router = Router();

// rota listagem(GET)
router.get('/overview', AppController.getNews);

// rota palavra-chave(POST)
router.post('/overview', AppController.searchByKeyWord);

// rota sugestao (POST)
router.post('/sugestion', AppController.createSugestion);

export default router
