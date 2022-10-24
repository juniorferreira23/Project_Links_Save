const express = require('express')
const app = express()
const path = require('path')

const { connectDb } = require('./configuration/connectionDB')
const linkRoute = require('./routes/linkRoute')

const PORT = 8000

connectDb()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)

app.listen(PORT, (error) => {
    if(error){
        console.log('Erro ao tentar conectar ao servidor')
        console.log(error)
    }else{
        console.log(`Servidor iniciado com Sucesso. Rodando na porta: ${PORT}`)
    }
})