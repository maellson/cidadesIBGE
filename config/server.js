//reqsuisitando as configuração do dotenv que estao no arquivo .env na raiz do projeto.
require('dotenv').config();
require('./database');
// requisito para se trabalhar com requisicao com http (post, get, put...)
const express = require('express');
// cabecalhos http
const cors = require('cors');
//trabalhar com rotas
// Importando o arquivo de rotas criadas.
const routes =  require('../routes');

const app = express();//habilita o app a usar o express para executar os metodos.


app.use(cors());//permite que qlqr um consiga usar a api
app.use(express.json({limite:'50mb'}));//limita o uso da APi apenas usando json e com tamanho maximo de 50mb
app.use(routes);

module.exports = app;