// estado.js

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Estado extends Model { }
Estado.init({
    cod: DataTypes.INTEGER,
    uf: DataTypes.STRING,
    nome_estado: DataTypes.STRING
}, { sequelize,
     modelName: 'estado' 
    });
    

module.exports = Estado;
