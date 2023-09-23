const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isIndoor: {
    type: Boolean
  },
  needsLight: {
    type: String,
    required: true,
    enum: ['Direct Sunight', 'Indirect Sunlight', 'Full Sunlight', 'Partial Sunlight']
  },
  needsWater: {
    type: String,
    required: true,
    enum: ['Water Daily', 'Water Every Other Day', 'Water Weekly', 'Water Every Other Week']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  //Added in the description to model
  description: {
    type: String, 
    required: true, 
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

plantSchema.methods.isIndoorParagraph = function() {
  return `and it ${this.isIndoor ? ' does ' : ' does not ' } grow indoors`
}

plantSchema.methods.needsLightParagraph = function() {
    return `${this.needsLight} needs light`
  }

module.exports = mongoose.model('Plant', plantSchema)