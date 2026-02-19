import express from 'express';
import JogadorController from '../controllers/jogadorController.js';

const router = express.Router()

router.get('/jogador', JogadorController.listar)

//rota para adicionar jogador

router.post('/jogador', JogadorController.adicionar)


router.post('/jogador/adicionarPonto', JogadorController.adicionarPonto)

export default router