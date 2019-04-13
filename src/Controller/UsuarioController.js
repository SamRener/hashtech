const Usuario = require('../Models/Usuario');

class UsuarioController{
    async CriarUsuario(req, res){
        const usuario = await Usuario.create(req.body); 
        return res.json(usuario);
    }
    async ConsultarPorNick(req, res){
        const usuario = await Usuario.findOne({
            nick: req.params.nick
        });

        return res.json(usuario);
    }
    async Login(req, res){
        const usuario = await Usuario.findOne({
            nick: req.body.nick,
            senha: req.body.senha
        });

        return res.json(usuario);
    }
}

module.exports = new UsuarioController();