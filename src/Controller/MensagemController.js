const Mensagem = require('../Models/Mensagem');
const Grupo = require('../Models/Grupo');

class MensagemController{
    async EnviarMensagem(req, res){
        const mensagem = await Mensagem.create({
            texto: req.body.texto,
            usuario: req.body.usuario,
            tipo: 'u'
        });

        const Grupo = await Grupo.findById(req.params.id);

        grupo.mensagens.push(mensagem);

        await grupo.save();

        return res.json(mensagem);
    };

}

module.exports = new MensagemController();