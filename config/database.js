const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/games',
  { useNewUrlParser: true }
);
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });
// , useCreateIndex: true

// shortcut to mongoose.connection objec
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});