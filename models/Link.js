const moogose = require('mongoose')

const linkSchema = new moogose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    url: {type: String, required: true},
    clicks: {type: Number, default: 0}
})

const Link = new moogose.model('Link', linkSchema)

module.exports = Link