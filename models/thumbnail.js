const { ObjectID } = require("mongodb");
const mongoose = require('mongoose')
const thumbnailSchema = new mongoose.Schema({
    path:{
        type:String
    },
    extension:{
        type:String
    }
    })
    module.exports = mongoose.model('thumbnail',thumbnailSchema)