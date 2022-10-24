const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/:title', (req, res) => {
    res.send('entrou na rota')
})

router.post('/add', express.urlencoded({ extended: true }), (req, res) => {

})
module.exports = router