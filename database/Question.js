const Sequelize = require("sequelize")
const connection = require("./database")

// Define o model
const Question = connection.define('questions', {
    titulo: {
        type: Sequelize.STRING, // STRING = textos curtos 
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT, // TEXT = textos longos
        allowNull: false
    }
})

Question.sync({
    force: false // impede de sobrescrever a tabela
}).then(() => {})

module.exports = Question