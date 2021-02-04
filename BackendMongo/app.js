const express = require('express');
const app = express();

const mongoose = require('mongoose');

//models
require('./src/models/Comentario');
const Comentario = mongoose.model("comentarios");

// connection
require('./src/db/connect');

app.use(express.json())



app.get('/mostrar', async(req, res) => {
    const comentarioResponse = await Comentario.find();
    const comentarioJson = await comentarioResponse;

    return res.json(comentarioJson);
})

app.post('/comentarios', (req, res) => {
    const novoComentario = new Comentario({
       nome: req.body.nome,
       msg: req.body.msg, 
    });
    novoComentario.save();
    res.json({ message: "Cadastrado Ok", comentario:novoComentario });
})

app.listen(5000)