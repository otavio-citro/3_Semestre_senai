import express from 'express';
import jogadorController from '../controllers/jogadorController';

const router = express.Router()

router.get('/jogador', livroController.listar)

//rota para adicionar jogador

router.post('/jogador', livroController.adicionar)


router.post('/jogador/adicionarPonto', livroController.adicionarPonto)

export default router