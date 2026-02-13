import express from 'express';
import livroController from '../controllers/livroController.js';

const router = express.Router()

router.get('/livros', livroController.listar)

//rota para adicionar livros

router.post('/livros', livroController.adicionar)


router.post('/livros/marcar-lido', livroController.marcarComoLido)

export default router