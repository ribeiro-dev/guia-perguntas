// pega as variaveis do arquivo .env
require('dotenv').config()

// criando a conexão com o banco de dados
const Sequelize = require("sequelize")
const connection = new Sequelize(process.env.DB_TABLE, process.env.DB_USER, process.env.DB_PSSWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

module.exports = connection