const express = require("express") // importando o módulo
const app = express() // instaciando o express

app.set("view engine", "ejs") // define o ejs como view engine
app.use(express.static('public')) // define a pasta de arquivos estáticos

// cria a rota /
app.get('/', (req, res) => {
    // usamos o método render quando temos uma view engine
    res.render("index.ejs")
})

app.get('/perguntar', (req, res) => {
    res.render("perguntar.ejs")
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

