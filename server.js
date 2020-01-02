// Get a basic Hello world site up
const express = require('express');
const app = express();
// import Handlebars
const exphbs = require('express-handlebars');
// import body parser and validator middleware
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// Controllers for POSTs views
require('./controllers/posts.js')(app);
// Import the Post model
const Post = require('../models/post');

// use the body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// give app a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));

// Route for Home page
app.get('/', (req, res) => res.render('index'));


// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set db
require('./data/reddit-db');
