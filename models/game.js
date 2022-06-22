const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const achievementSchema = new Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true,
//   }
// })

const achievementSchema = new Schema({
  title: String,
  description: String,

})

const gameSchema = new Schema({
  title: String,
  completion: String ,
  achievements: [achievementSchema]
  

})
const Game = mongoose.model('Game', gameSchema);

module.exports = Game;