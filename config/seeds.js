require('./database')
const Game = require('../models/game')
const gameseeds = require('./seeds.json')

// const Bookmark = require('../models/game');
// const bookmarkseeds = require('./seeds.json');

Game.deleteMany({})
.then(() =>{
  return Game.insertMany(gameseeds)
  .then((games) =>{
    console.log((games));
  })
})
.finally(() => {
  process.exit();
});

// Deletes all bm
// Bookmark.deleteMany({})
// // the deletes all users
// .then(() => User.deleteMany({}))
// .then(() => {
//   // then returns updates with an owner:use._id
//   // first creates user, then maps over bm and adds that id in
//   return User.create({userName: 'DTPhotography', name: 'Dennis Tulga', birthDay: 'April 19, 1997'})
//   .then( user => {
//     return bookmarkseeds.map(bookmark => ({...bookmark, owner: user._id}))
//   })
// })
// .then((bookmarks) =>{
//   return Bookmark.insertMany(bookmarks) 
// }) .then((bookmarks) =>{
//   console.log(bookmarks);
// }).catch(console.error)
// .finally(() => {
//   process.exit();
// });