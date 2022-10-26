const express = require('express')
const router = express.Router()
const { addLink, redirectLink, allLinks, deleteLink } = require('../controllers/linkController')

router.get('/', (req, res) => {
    res.render('index', { error: false, body: {}})
})

router.get('/all', express.static('./templates/'), (req, res) => {
    allLinks(req, res)
})

router.get('/:title', (req, res) => {
    redirectLink(req, res)
})

router.post('/add', express.urlencoded({ extended: true }), (req, res) => {
    addLink(req, res)
})

router.delete('/:id', (req, res) => {
    deleteLink(req, res)
})

module.exports = router