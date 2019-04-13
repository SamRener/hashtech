const mongoose = require('mongoose');

const Mensagem = new mongoose.Schema(
    {
        texto: {
            type: String,
            required: true
        },
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        },
        tipo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Mensagem", Mensagem);