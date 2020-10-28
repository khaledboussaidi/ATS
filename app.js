const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/myindex'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('database opened')
})
const myrouter = require('./controller')
app.use(express.json())
app.use('/',myrouter)
app.listen(9090,()=> {console.log('hello from node server ...')})