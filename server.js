// Get a basic Hello world site up
const express = require('express');
const app = express();
// import Handlebars
const exphbs = require('express-handlebars');

// give app a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));

// Route for Home page
app.get('/', (req, res) => res.render('index'));

// 'Create post' route views (GET and POST)
app.get('/posts/new', (req, res) => res.render('posts-new'));

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
