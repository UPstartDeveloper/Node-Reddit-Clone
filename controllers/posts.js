// CREATE a post (GET)
module.exports = app => {
  app.get('/posts/new', (req, res) => res.render('posts-new'));
  };

// CREATE a post (POST)
module.exports = (app) => {
   app.post('/posts/new', (req, res) => {
     // INSTANTIATE INSTANCE OF POST MODEL
     const post = new Post(req.body);

     // SAVE INSTANCE OF POST MODEL TO DB
     post.save((err, post) => {
       // REDIRECT TO THE ROOT
       return res.redirect(`/`);
     })
  });
};
