const express = require("express") // importando o módulo
const app = express() // instaciando o express
const bodyParser = require("body-parser")
const connection = require("./database/database")
const questionModel = require("./database/Question")

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msg) => {
        console.log(msg)
    })

app.set("view engine", "ejs") // define o ejs como view engine
app.use(express.static('public')) // define a pasta de arquivos estáticos

// Body parser
app.use(bodyParser.urlencoded({ extended: false })) // configura o bodyparser
app.use(bodyParser.json()) // permite com que seja possivel ler json enviado 

// cria a rota /
app.get('/', (req, res) => {
    // usamos o método render quando temos uma view engine
    res.render("index.ejs")
})

app.get('/perguntar', (req, res) => {
    res.render("perguntar.ejs")
})

app.post('/salvarpergunta', (req, res) => {
    // o nome é de acordo com o atributo name
    const title = req.body.title
    const description = req.body.description
    res.send("Formulario recebido! Titulo: " + title + " " + " descricao " + description)
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

