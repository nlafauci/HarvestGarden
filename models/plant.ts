import mongoose from 'mongoose';

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
    enum: ['Direct Sunlight', 'Indirect Sunlight', 'Full Sunlight', 'Partial Sunlight']
  },
  needsWater: {
    type: String,
    required: true,
    enum: ['Water Daily', 'Water Every Other Day', 'Water Weekly', 'Water Every Other Week']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80'
  },
  //Added in the description to model
  description: {
    type: String, 
    required: true, 
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

plantSchema.methods.isIndoorParagraph = function() {
  return `This plant ${this.isIndoor ? ' does ' : ' does not ' } grow indoors`
}

plantSchema.methods.needsLightParagraph = function() {
    return `It needs ${this.needsLight}`
  }

plantSchema.methods.needsWaterParagraph = function() {
    return `It needs ${this.needsWater}`
  }

module.exports = mongoose.model('Plant', plantSchema)