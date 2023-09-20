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
    required: true
  },
  needsWater: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  }
})

// plantSchema.methods.getBakedBy = function() {
//   return `${this.name} was baked with love by ${this.baker.name} who has been with us since ${this.baker.startDate.getFullYear()}.`
// }

plantSchema.methods.isIndoorParagraph = function() {
  return `and it ${this.isIndoor ? ' does ' : ' does not ' } grow indoors`
}

plantSchema.methods.needsLightParagraph = function() {
    return `${this.needsLight} needs light`
  }

module.exports = mongoose.model('Plant', plantSchema)