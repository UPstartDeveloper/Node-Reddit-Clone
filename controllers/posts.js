module.exports = app => {
  // CREATE a post (GET and POST)
  app.get('/posts/new', (req, res) => res.render('posts-new'));

  app.post("/posts/new", (req, res) => {
    console.log(req.body);
  });
};
