const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const ColumnSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    index: {
        type: Number,
        required: true
    }

})

const Model = mongoose.model('Column', ColumnSchema)

module.exports = Model