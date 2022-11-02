const Sequelize = require('sequelize');
const database = require('../database/database');

const Ponto = database.define('ponto',{
    id:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rua:{
        type: Sequelize.STRING,
        allowNull: false
    },
    numero:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    bairro:{
        type:Sequelize.STRING,
        allowNull: false
    },
    cidade:{
        type:Sequelize.STRING,
        allowNull: false
    },
    uf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cep:{
        type: Sequelize.STRING,
        allowNull: false
    },
    geometria:{
        type: Sequelize.GEOMETRY,
        allowNull: false
    }
});

module.exports = Ponto;