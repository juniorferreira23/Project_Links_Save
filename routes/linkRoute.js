const express = require('express')
const router = express.Router()
const linkController= require('../controllers/linkController')

router.get('/', (req, res) => {res.render('index', { error: false, body: {}})})
router.get('/all', linkController.allLinks)
router.get('/edit/:id', linkController.loadEditLink)
router.get('/:title', linkController.redirectLink)

router.post('/add', express.urlencoded({ extended: true }), linkController.addLink)

router.delete('/:id', linkController.deleteLink)

module.exports = router