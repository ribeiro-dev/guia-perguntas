const express = require("express") // importando o módulo
const app = express() // instaciando o express

app.set("view engine", "ejs") // define o ejs como view engine

// cria a rota /
app.get('/:nome/:lang/:level?', (req, res) => {
    let nome = req.params["nome"]
    let lang = req.params["lang"]
    let level = req.params["level"]

    const produtos = [
        { nome: "Doritos", preco: 3.14 },
        { nome: "Coca-cola", preco: 5 },
        { nome: "Leite", preco: 1.45 },
        { nome: "Carne", preco: 30 },
        { nome: "RedBull", preco: 8 }
    ]

    // usamos o método render quando temos uma view engine
    res.render("index", {
        nome: nome,
        lang: lang,
        level: level,
        produtos: produtos
    })
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

