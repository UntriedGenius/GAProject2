const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const achievmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  }
},{
  timestamps: true
})

const gameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completion: {
    type: Number
  },
  // playing: { type: Boolean, default: false },
   // reviews is an array of review subdocs!
  achievements: [achievmentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);