const Grupo = require('../Models/Grupo');
const Mensagem = require('../Models/Mensagem');

class GrupoController{
    async CriarNovoGrupo(req, res){
        const grupo = await Grupo.create(req.body);

        const mensagem = await Mensagem.create({
            texto: "Grupo criado",
            usuario: req.body.usuarios[0],
            tipo: 'a'
        });

        grupo.mensagens.push(mensagem);

        grupo.save();
        return res.json(grupo);
    }

    async BuscarGrupoPorId(req, res){
        const grupo = await Grupo.findById(req.params.id).populate({ 
            options: {sort: { createdAt: -1 }}
        });

        return res.json(grupo);
    
    }

    async BuscarGruposPorUsuario(req, res){
        const grupos = await Grupo.find({
            usuarios: [req.params.id]
        });

        return res.json(grupos);
    }
}

module.exports = new GrupoController();