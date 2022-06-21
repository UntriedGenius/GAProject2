const Game = require('../models/game')

module.exports = {
  create,
  edit
  // deleteIt
};

function create(req, res) {
  // remember req.body has the form data for the achievement
  // also the route indicates that we also have req.params.id
  Game.findById(req.params.id, function(err, game) {
    game.achievements.push(req.body);
    game.save(function(err) {
      res.redirect(`/games/${game._id}`);
    });
  });
}

// update
function edit(req, res){
  Game.achievements.id(req.params.id) = req.body

}

// delete
// function deleteIt(req, res){
// Game.findById(req.params.movieId, function(err,game) {
//   console.log(game.reviews.id(req.params.reviewID))

//   game.reviews.id(req.params.reviewId).rating = 5
//   game.save(function(err){
//     if (err) console.log(err);
//   })
// })
