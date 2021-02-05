const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Produto = new Schema({

    categoria : {
        type : String,
        required : true
    }, 
    imagen : {
        type : String,
        required : true
    },
    descripcao : {
        type : String,
        required : true
    },
    preco : {
        type: Number,
        required : true
    },
    precoFinal : {
        type : Number,
        required : true
    }
})

mongoose.model('produtos', Produto);