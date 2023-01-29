const express = require("express") // importando o módulo
const app = express() // instaciando o express

app.set("view engine", "ejs") // define o ejs como view engine

// cria a rota /
app.get('/:nome/:lang/:level?', (req, res) => {
    let nome = req.params["nome"]
    let lang = req.params["lang"]
    res.render("index", {
        nome: nome,
        lang: lang,
        level: level
    }) // usamos o método render quando temos uma view engine
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

