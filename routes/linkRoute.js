const express = require('express')
const router = express.Router()
const linkController= require('../controllers/linkController')

router.get('/', (req, res) => {res.render('index', { err: false, body: {}})})
router.get('/all', linkController.allLinks)
router.get('/:title', linkController.redirectLink)
router.get('/edit/:id', linkController.loadEditLink)

router.post('/add', express.urlencoded({ extended: true }), linkController.addLink)
router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink)

router.delete('/:id', linkController.deleteLink)

module.exports = router