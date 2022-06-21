const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  }
})

// const gameSchema = new Schema({
//   title: {
//     type: String,

//   },
//   completion: {
//     type: String
//   },
//   // playing: { type: Boolean, default: false },
//    // reviews is an array of review subdocs!
//   achievements: [achievmentSchema]
// }, {
//   timestamps: true
// });

const gameSchema = new Schema({
  title: String,
  completion: String ,
  achievements: [achievementSchema]
  

})
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;