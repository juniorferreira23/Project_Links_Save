const Link = require('../models/Link')

const redirectLink = async (req, res) => {
    const title = req.params.title
    try {
        const docLink = await Link.findOne({title})
        await Link.updateOne({title}, {$inc: {clicks: 1}})
        res.status(200).redirect(docLink.url)
    } catch (err) {
        res.status(404).send('<h2>Link não encontrado :(</h2></br>' + err)
    }
}

const addLink = async (req, res) => {
    const docLink = new Link(req.body)
    try {
        await docLink.save()
        res.status(201).redirect('/all')
    } catch (err) {
        res.status(400).render('index', { err, body: docLink })
    }
}

const allLinks = async (req, res) => {
    try {
        const links = await Link.find({})
        res.status(200).render('all', { links, err: false })
    } catch (err) {
        res.status(404).send('<h2>Links não encontrados no Banco de dados, verificar se o banco de dados foi iniciado<h2></br>' + error)
    }
}

const deleteLink = async (req, res) => {
    const idLink = req.params.id
    try {
        await Link.findByIdAndDelete(idLink)
        res.status(200).send(idLink)
    } catch (err) {
        res.status(404).send(err)
    }
}

const loadEditLink = async (req, res) => {
    const idLink = req.params.id
    try {
        const doc = await Link.findById(idLink)
        res.status(200).render('edit', {body: doc, err: false})
    } catch (err) {
        res.status(404).send(err)
    }
}

const editLink = async (req, res) => {
    const docLink = {}
    const idLink = req.params.id
    docLink.id = idLink
    docLink.title = req.body.title
    docLink.description = req.body.description
    docLink.url = req.body.url
    
    try {
        if(docLink.title == '' || docLink.url == ''){
            throw new Error('Campos Obrigatórios, preencher todos os campos!')
        }else{
            await Link.updateOne({ _id: idLink}, docLink)
            res.redirect('/all')
        }
    } catch (err) {
        res.status(400).render('edit', { body: docLink, err })
    }
}

module.exports = { addLink, redirectLink, allLinks, deleteLink, loadEditLink, editLink}