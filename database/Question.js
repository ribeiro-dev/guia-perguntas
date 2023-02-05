const Sequelize = require("sequelize")
const connection = require("./database")

// Define o model
const Pergunta = connection.define('questions', {
    titulo: {
        type: Sequelize.STRING, // STRING = textos curtos 
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT, // TEXT = textos longos
        allowNull: false
    }
})

Pergunta.sync({
    force: false // impede de sobrescrever a tabela
}).then(() => {})