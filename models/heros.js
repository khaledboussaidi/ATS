const { ObjectID } = require("mongodb");
const mongoose = require('mongoose')
const herosSchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    modified:{
        type:Date
    },
    thumbnail:{
        type : ObjectID,
        ref:'thumbnail'
    },
    })
    module.exports = mongoose.model('heros',herosSchema)