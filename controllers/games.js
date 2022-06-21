const Game = require('../models/game').Game;

module.exports = {
  index,
  show,
  new: newGame,
  create
};

function index(req, res) {
  Game.find({}, function(err, games) {
    res.render('games/index', { title: 'All Games', games });
  });
}

function show(req, res) {
  Game.findById(req.params.id, function(err, game) {
    res.render('games/show', { title: 'Game Detail', game });
  });
}

function newGame(req, res) {
  res.render('games/new', { title: 'Add Game' });
}

function create(req, res) {
  const game = new Game(req.body);
  game.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/games/new');
    console.log(game);
    // for now, redirect right back to new.ejs
    res.redirect('/games');
  });
}