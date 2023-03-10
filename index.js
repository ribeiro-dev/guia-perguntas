const express = require("express") // importando o módulo
const app = express() // instaciando o express
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Question = require("./database/Question")
const Answer = require("./database/Answer")

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


// Rotas
app.get('/', (req, res) => {
    Question.findAll({ // esse método executa um SELECT * no banco
        raw: true, // trás somente os dados (sem mais informações)
        order: [
            ['id', 'DESC'] // faz um ORDER BY pelo ID
        ] 
    })
    .then(questions => { 
        // usamos o método render quando temos uma view engine
        res.render("index.ejs", { questions: questions })
    })
    
})

app.get('/perguntar', (req, res) => {
    res.render("perguntar.ejs")
})

app.post('/salvarpergunta', (req, res) => {
    // o nome é de acordo com o atributo name
    const title = req.body.title
    const description = req.body.description
    Question.create({
        titulo: title,
        descricao: description 
    }).then(() => {
        res.redirect("/") // redireciona o usuário após criar a pergunta
    })
})


app.get('/pergunta/:id', (req, res) => {
    const id = req.params.id
    Question.findOne({
        where: {
            id: id
        }
    })
    .then(question => {
            Answer.findAll({
                where: { questionId: id },
                order: [
                    ['id', 'DESC']
                ]
            })
            .then(answers => {
                res.render("pergunta.ejs", { 
                    question: question,
                    answers: answers
                })
            })
    })
})


app.post("/responder", (req, res) => {
    const body          = req.body.body
    const questionId    = req.body.question

    Answer.create({
        body: body,
        questionId: questionId
    }).then(() => {
        res.redirect("/pergunta/" + questionId)
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

