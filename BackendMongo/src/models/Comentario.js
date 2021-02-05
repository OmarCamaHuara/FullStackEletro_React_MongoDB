const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comentario = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    msg:{
        type: String,
        required: true,
        trim: true
    }
})

mongoose.model('comentarios', Comentario);