require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin@cluster0.l5mv6kh.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Plant = require('./plant')