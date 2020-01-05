const express = require('express');
const router = express.Router();
// CREATE a post (GET)
    router.get('/posts/new', (req, res) => {
        res.render('posts-new');
    });

// CREATE a post (POST)
const Post = require('../models/post');
    router.post('/posts/new', (req, res) => {
        // INSTANTIATE INSTANCE OF POST MODEL
        const post = new Post(req.body);
        // SAVE INSTANCE OF POST MODEL TO DB
        post.save((err, post) => {
            // REDIRECT TO THE ROOT
            return res.redirect(`/`);
        })
    });

module.exports = router;
