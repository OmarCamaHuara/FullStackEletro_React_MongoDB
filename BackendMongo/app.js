const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")

const mongoose = require('mongoose');

//models
require('./src/models/Comentario');
const Comentario = mongoose.model("comentarios");


require('./src/models/Produto');
const Produto = mongoose.model("produtos");

// connection
require('./src/db/connect');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', async(req, res) => {
    const produtoResponse = await Produto.find();
    const produtoJson = await produtoResponse;

    return res.json(produtoJson);
})

app.get('/mostrar', async(req, res) => {
    const comentarioResponse = await Comentario.find();
    res.send(comentarioResponse);
})

app.post('/comentarios', async(req, res) => {
    const novoComentario = new Comentario({
       nome: req.body.nome,
       msg: req.body.msg, 
    });
    const result = await novoComentario.save();
    res.send(result);
})

app.listen(5000)