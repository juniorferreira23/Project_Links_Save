const Link = require('../models/Link')

const redirectLink = async (req, res) => {
    const title = req.params.title
    try {
        const docLink = await Link.findOne({title})
        res.status(200).redirect(docLink.url)
    } catch (error) {
        res.status(400).send('<h2>Link não encontrado :(</h2>')
    }
}

const addLink = async (req, res) => {
    const docLink = new Link(req.body)
    try {
        await docLink.save()
        res.status(201).redirect('/all')
    } catch (error) {
        res.status(400).render('index', { error, body: docLink })
    }
}

const allLinks = async (req, res) => {
    try {
        const links = await Link.find({})
        res.status(200).render('all', { links })
    } catch (error) {
        res.status(400).send('<h2>Links não encontrados no Banco de dados, verificar se o banco de dados foi iniciado<h2>')
    }
}

const deleteLink = async (req, res) => {
    const idLink = req.params.id
    try {
        await Link.findByIdAndDelete(idLink)
        res.status(200).send(idLink)
    } catch (error) {
        res.status(400).send(error)
    }
}

const loadEditLink = async (req, res) => {
    const idLink = req.params.id
    try {
        const doc = await Link.findById(idLink)
        console.log(doc)
        res.status(200).render('edit', {body: doc, error: false})
    } catch (error) {
        res.status(400).send(error)
    }
}


module.exports = { addLink, redirectLink, allLinks, deleteLink, loadEditLink}