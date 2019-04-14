const express = require('express');
const routes = express.Router();

const GrupoController = require('./Controller/GrupoController');
const MensagemController = require('./Controller/MensagemController');
const UsuarioController = require('./Controller/UsuarioController');

routes.post('/Grupo', GrupoController.CriarNovoGrupo);
routes.get('/Grupo/:id', GrupoController.BuscarGrupoPorId);
routes.get('/Grupo/Usuario/:id', GrupoController.BuscarGruposPorUsuario);

routes.post('/Grupo/:id/Mensagem', MensagemController.EnviarMensagem);

routes.post('/Usuario', UsuarioController.CriarUsuario);
routes.post('/Usuario/Login', UsuarioController.Login);
module.exports = routes;