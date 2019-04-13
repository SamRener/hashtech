const mongoose = require('mongoose');

const Grupo = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        }, 
        usuarios: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Usuario"
            }
        ],
        mensagens: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Mensagem"
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Grupo", Grupo);