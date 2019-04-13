const mongoose = require('mongoose');

const Usuario = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        nick: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        grupos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Grupo"
            }
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Usuario", Usuario);