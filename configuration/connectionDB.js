const moogose = require('mongoose')

const connectDb = () => {
    moogose.connect('mongodb://localhost/links').then( db => {
        console.log('Banco de dados iniciado com sucesso')
    }).catch (error => {
        console.log('Erro ao iniciar o banco de dados')
        console.log(error)
    })
}

module.exports = connectDb 
