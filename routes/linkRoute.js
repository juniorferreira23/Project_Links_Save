const express = require('express')
const router = express.Router()
const linkController= require('../controllers/linkController')
const cors = require('cors')

const options = {
    origin: 'http://localhost:8000'
}

router.use(cors(options))

router.get('/', cors(), (req, res) => {res.render('index', { err: false, body: {}})})
router.get('/all', linkController.allLinks)
router.get('/:title', linkController.redirectLink)
router.get('/edit/:id', linkController.loadEditLink)

router.post('/add', express.urlencoded({ extended: true }), linkController.addLink)
router.post('/edit/:id', express.urlencoded({ extended: true }), linkController.editLink)

router.delete('/:id', linkController.deleteLink)

module.exports = router