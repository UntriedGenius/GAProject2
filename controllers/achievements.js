const Game = require('../models/game')

module.exports = {
  create,
  edit,
  deleteIt
};

function create(req, res) {
  // remember req.body has the form data for the achievement
  // also the route indicates that we also have req.params.id
  const achievement = new Game(req.body);
  Game.findById(req.params.id, function(err, game) {
    game.achievements.push(achievement);
    console.log(req.body);
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
function deleteIt(req, res) {
  Game.findById(req.params.gameId, function(err, game){
    Game.achievements.id(req.params.id).remove()

  //   console.log(req.params.gameId);
  //   console.log(game.achievements.id(req.params.achievementId));


    // console.log(game.achievements.id(req.params.achievementId));
    // console.log(req.params.achievementId)
    // console.log(game.achievements.id)
    // SelAch =(Game.find));
    // console.log(SelAch);
    // Game.remove(SelAch)
      
      if(err){
        res.status(400).json(err)
        return
      }
      else{
        a.save(function(err) {
      if (err) return handleError(err);
      res.redirect(`/games/${req.params.gameId}`)
      // console.log('Item Deleted');
    })
    // res.redirect(`/games/${req.params.gameId}`)
    }
  })
}