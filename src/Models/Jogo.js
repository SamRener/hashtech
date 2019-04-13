const mongoose = require('mongoose');

const Jogo = new mongoose.Schema(
    {
        nome: String   
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Jogo", Jogo);