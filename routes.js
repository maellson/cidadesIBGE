// routes.js
const express = require('express');
const Sequelize = require('sequelize');
const Estado = require('./models/estado');
const Cidade = require('./models/cidade');

const router = express.Router();

// Rota que retorna as cidades correspondentes ao estado e nome da cidade
router.get('/cidades/:cod_uf/:nome_municipio', async (req, res) => {
    const { cod_uf, nome_municipio } = req.params;

    const cidades = await Cidade.findAll({
        attributes: ['codigo_municipio', 'cod_uf', 'nome_municipio'],
        where: {
            cod_uf,
            nome_municipio: {
                [Sequelize.Op.iLike]: `${nome_municipio}%`
            }
        }
    });

    res.json(cidades);
});

// Rota que retorna todas as cidades do estado
router.get('/cidades/:cod_uf', async (req, res) => {
    const { cod_uf } = req.params;

    const cidades = await Cidade.findAll({
        attributes: ['codigo_municipio', 'cod_uf', 'nome_municipio'],
        where: { cod_uf }
    });

    res.json(cidades);
});

module.exports = router;
