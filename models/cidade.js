// cidade.js

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Cidade extends Model {}
        Cidade.init({
            codigo_municipio: DataTypes.BIGINT,
            cod_uf: DataTypes.INTEGER,
            nome_municipio: DataTypes.STRING
        }, { sequelize,
            modelName: 'cidade'
            });

module.exports = Cidade;
