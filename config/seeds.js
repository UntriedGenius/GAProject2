require('./database')
const Gif = require('../models/game')
const gifseeds = require('./seeds.json')

// const Bookmark = require('../models/game');
// const bookmarkseeds = require('./seeds.json');

Gif.deleteMany({})
.then(() =>{
  return Gif.insertMany(gifseeds)
  .then((gifs) =>{
    console.log((gifs));
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